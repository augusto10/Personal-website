# Portfólio — Jose Augusto Nascimento

Projeto Next.js + TypeScript + Tailwind + Framer Motion para um portfólio moderno.

## Rodando localmente

1. Instale dependências:
```
npm install
```

2. Inicie o servidor de desenvolvimento:
```
npm run dev
```

3. Abra http://localhost:3000

## Personalização

- Edite `src/config/site.ts` para:
  - Nome, tagline e cor de destaque
  - Links de contato (WhatsApp, Telegram, E-mail)
  - Serviços e Projetos (cards)
  - Links sociais (GitHub/LinkedIn)

## Deploy

- Vercel (recomendado): importe o repositório na Vercel e finalize.

## Notas

- Imagens de projetos podem usar URLs externas. Use `<img>` ou configure domínios no `next.config.mjs` para `next/image`.
- O botão de orçamento (WhatsApp) está no header e na seção Contato.
