const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

(async () => {
  const stage = process.argv[2] || 'after';
  const dir = path.join('.hallmark', stage);
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const response = await page.goto('http://127.0.0.1:4317/', { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  await page.locator('#home h1').waitFor();
  await page.evaluate(() => document.fonts.ready);
  const inventory = await page.evaluate(() => ({
    links: [...new Set([...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')))].sort(),
    projects: [...document.querySelectorAll('#projetos h3')].map(n => n.textContent),
    headings: [...document.querySelectorAll('h1,h2')].map(n => n.innerText),
  }));
  const widths = stage === 'before' ? [375, 1280, 1440] : [320, 375, 414, 768, 1024, 1280, 1440, 1920];
  const layouts = [];
  for (const width of widths) {
    await page.setViewportSize({ width, height: width === 1280 ? 800 : 900 });
    await page.evaluate(async () => {
      for (const img of document.images) img.loading = 'eager';
      await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
      window.scrollTo(0, 0);
    });
    await page.screenshot({ path: path.join(dir, `page-${width}.png`), fullPage: true });
    if (width === 1280) await page.screenshot({ path: path.join(dir, 'hero-1280.png') });
    layouts.push(await page.evaluate(() => ({ width: innerWidth, overflow: document.documentElement.scrollWidth > innerWidth,
      brokenImages: [...document.images].filter(i => !i.naturalWidth).map(i => i.getAttribute('src')),
      ctaBottom: document.querySelector('#home .btn-primary')?.getBoundingClientRect().bottom,
    })));
  }
  const interactions = {};
  if (stage === 'after') {
    const previous = JSON.parse(fs.readFileSync('.hallmark/before/review.json', 'utf8')).inventory;
    assert.deepEqual(inventory.projects, previous.projects, 'All existing projects must remain');
    assert.deepEqual(previous.links.filter(href => !inventory.links.includes(href)), [], 'All link destinations must remain');
    assert(layouts.every(l => !l.overflow && l.brokenImages.length === 0), 'No overflow or broken images');
    assert(layouts.find(l => l.width === 1280).ctaBottom < 800, 'Primary action must be visible in the first viewport');
    await page.setViewportSize({ width: 375, height: 900 });
    const menu = page.locator('.menu-toggle');
    await menu.click();
    await page.locator('#mobile-navigation').waitFor({ state: 'visible' });
    assert.equal(await menu.getAttribute('aria-expanded'), 'true');
    await page.locator('#mobile-navigation a[href="#projetos"]').click();
    await page.locator('#mobile-navigation').waitFor({ state: 'hidden' });
    interactions.mobileNavigation = 'passed';
    const details = page.locator('.project-case details').first();
    await details.locator('summary').click();
    assert.equal(await details.getAttribute('open'), '');
    const thumbnail = details.locator('button').first();
    await thumbnail.click();
    const dialog = page.getByRole('dialog');
    await dialog.waitFor({ state: 'visible' });
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Fechar galeria');
    await page.getByRole('button', { name: 'Próxima imagem' }).click();
    await page.getByRole('button', { name: 'Imagem anterior' }).click();
    await page.getByRole('button', { name: 'Fechar galeria' }).focus();
    await page.keyboard.press('Shift+Tab');
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Próxima imagem');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Fechar galeria');
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'hidden' });
    assert(await thumbnail.evaluate(node => node === document.activeElement));
    interactions.galleryKeyboardAndFocus = 'passed';
    await details.locator('summary').click();
    assert.equal(await details.getAttribute('open'), null);
    interactions.projectDetails = 'passed';
    for (const route of ['/privacidade', '/admin']) {
      const routeResponse = await page.goto('http://127.0.0.1:4317' + route, { waitUntil: 'domcontentloaded' });
      assert.equal(routeResponse.status(), 200);
      await page.locator('h1').first().waitFor({ state: 'visible' });
      interactions[route] = 'passed';
    }
    if (process.argv.includes('--a11y')) {
      await page.goto('http://127.0.0.1:4317/', { waitUntil: 'networkidle' });
      const response = await fetch('https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js');
      assert(response.ok);
      await page.addScriptTag({ content: await response.text() });
      const audit = await page.evaluate(async () => {
        document.querySelectorAll('details').forEach(detail => { detail.open = true });
        return axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
      });
      fs.writeFileSync(path.join(dir, 'accessibility.json'), JSON.stringify({ violations: audit.violations, passes: audit.passes.length }, null, 2));
      assert.deepEqual(audit.violations, [], 'No automated WCAG violations');
      interactions.accessibility = { violations: 0, passes: audit.passes.length };
    }
    assert.deepEqual(errors, [], 'No browser exceptions');
  }
  const result = { inventory, layouts, interactions, errors };
  fs.writeFileSync(path.join(dir, 'review.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
