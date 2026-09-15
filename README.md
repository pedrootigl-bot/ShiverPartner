# ShiverPartner

Landing page do programa de creators da Shiver — React + Vite, deploy estático (Hostinger).

## Início rápido

```bash
npm install
npm run dev
```

Build para Hostinger:

```bash
npm run build
```

Envie o **conteúdo** de `dist/` para `public_html/` (veja o guia de deploy).

## Documentação

A documentação completa do projeto está em:

- **[documents/DOCUMENTACAO.md](./documents/DOCUMENTACAO.md)** — visão geral, seções, stack, animações, manutenção
- **[documents/HOSTINGER-DEPLOY.md](./documents/HOSTINGER-DEPLOY.md)** — upload na Hostinger

Demais notas e histórico em [`documents/`](./documents/).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build + prepare-dist |
| `npm run preview:static` | Preview no estilo Hostinger |
| `npm run lint` | Oxlint |

## Stack

React 19 · Vite 8 · Lenis · GSAP · Motion · Three.js · OGL
