const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const baseUrl = process.env.REVIEW_URL || 'http://127.0.0.1:4317';
  const response = await fetch(`${baseUrl}/api/projects`);
  assert.equal(response.status, 200);
  const projects = await response.json();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    const results = [];
    for (const project of projects) {
      const article = page.locator('.project-case').filter({
        has: page.getByRole('heading', { name: project.name, exact: true }),
      });
      if (!await article.count()) continue;
      const images = [project.image, ...project.gallery].filter((image, index, all) =>
        !image.placeholder && all.findIndex(candidate => candidate.src === image.src) === index
      );
      const details = article.locator('details');
      await details.locator('summary').click();
      const thumbnails = details.locator('button');
      assert.equal(await thumbnails.count(), images.length,
        `${project.name}: every registered image, including the cover, must be available`);
      if (images.length) {
        await thumbnails.last().click();
        const dialog = page.getByRole('dialog');
        await dialog.waitFor({ state: 'visible' });
        await page.getByText(`${images.at(-1).alt} · ${images.length} de ${images.length}`, { exact: true }).waitFor();
        assert.equal(await dialog.locator('img, video').getAttribute('src'), images.at(-1).src);
        if (images.length > 1) {
          await page.keyboard.press('ArrowRight');
          assert.equal(await dialog.locator('img, video').getAttribute('src'), images[0].src);
          await page.keyboard.press('ArrowLeft');
          assert.equal(await dialog.locator('img, video').getAttribute('src'), images.at(-1).src);
        }
        await page.keyboard.press('Escape');
        await dialog.waitFor({ state: 'hidden' });
      }
      await details.locator('summary').click();
      results.push({ project: project.name, images: images.length });
    }
    assert(results.length > 0, 'At least one project must be verified');
    assert(results.some(project => project.images > 8), 'Verify a gallery with more than eight images');
    console.log(JSON.stringify(results, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exit(1); });
