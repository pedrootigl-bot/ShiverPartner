# ShiverPartner — Documentação do projeto

Landing page do programa de creators da **Shiver**, focada em conversão: apresentar o programa, explicar o fluxo e levar o usuário ao CTA de candidatura.

| Item | Valor |
|------|--------|
| Repositório | [github.com/pedrootigl-bot/ShiverPartner](https://github.com/pedrootigl-bot/ShiverPartner) |
| Stack | React 19 + Vite 8 |
| Tipo | SPA estática (sem backend neste repositório) |
| Idioma da UI | Português (pt-BR) |
| Deploy previsto | Hostinger (`public_html` / subpasta) |

---

## 1. Visão geral

O site é uma landing one-page com âncoras. Os botões “Quero ser parceiro” e links de contato apontam para `#contato`. O formulário embutido foi removido: o CTA final usa a constante `APPLY_FORM_URL` em `FinalCta.jsx` (hoje `#contato`; trocar pelo URL do formulário externo quando existir).

**Objetivos de produto**

- Comunicar o valor da parceria Shiver × creators
- Explicar como funciona e como se ganha
- Direcionar para inscrição / formulário externo

---

## 2. Como rodar

### Pré-requisitos

- Node.js 20+ (recomendado)
- npm

### Comandos

```bash
npm install
npm run dev          # desenvolvimento (HMR)
npm run build        # gera dist/ + prepare-dist (Hostinger)
npm run preview      # preview Vite do build
npm run preview:static  # serve .preview-static (como Hostinger)
npm run lint         # oxlint
```

### Variáveis de build

| Variável | Uso |
|----------|-----|
| `BASE_PATH` | Base URL do Vite. Vazio = raiz do domínio. Ex.: `/shiverpartner` para subpasta na Hostinger. |

PowerShell:

```powershell
$env:BASE_PATH="/shiverpartner"; npm run build
```

Detalhes de upload: [HOSTINGER-DEPLOY.md](./HOSTINGER-DEPLOY.md).

---

## 3. Estrutura do repositório

```text
ShiverPartner/
├── documents/           # Base de conhecimento e guias
├── public/              # Estáticos copiados para dist (favicon, icons)
├── scripts/
│   ├── prepare-dist.cjs     # .htaccess, index.php, preview Hostinger
│   └── preview-static.cjs
├── src/
│   ├── assets/          # Imagens WebP e SVGs
│   ├── components/      # Seções e UI
│   ├── hooks/           # useReveal, useIsMobile
│   ├── lib/             # smoothScroll (Lenis)
│   ├── styles/mobile.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── dist/                # Build de produção (gitignored)
├── vite.config.js
└── package.json
```

---

## 4. Mapa das seções (ordem da página)

| Ordem | Componente | Âncora `id` | Função |
|------:|------------|-------------|--------|
| — | `SiteNav` | — | Navbar fixa (GooeyNav no desktop; hambúrguer ≤900px) |
| 1 | `SiteHeader` | `#topo` | Hero + LightPillar + StrokeText “ShiverPartner” |
| 2 | `PartnerProgram` | `#programa` | Manifesto / valor da parceria |
| 3 | `AudienceMotion` | `#movimento` | DriftWall (desktop) / copy mobile |
| 4 | `SocialLogoLoop` | `#plataformas` | Loop de logos de redes |
| 5 | `HowItWorks` | `#como-funciona` | 4 passos (grid desktop / carrossel mobile) |
| 6 | `EarnWays` | `#ganhos` | 3 formas de ganhar + CTA |
| 7 | `CreatorDashboard` | `#dashboard` | Painel + features |
| 8 | `WhoCanJoin` | `#quem-pode` | Critérios de participação |
| 9 | `Faq` | `#faq` | Accordion + suporte |
| 10 | `FinalCta` | `#contato` | CTA final (GhostFibers) |
| — | `SiteFooter` | — | Links, e-mail; CTA oculto no mobile |

`SmoothScroll` monta o Lenis no `App` (sem UI).

---

## 5. Stack e bibliotecas

| Lib | Uso no projeto |
|-----|-----------------|
| **React 19** | UI |
| **Vite 8** | Bundler / build estático |
| **Lenis** | Scroll suave (wheel), âncoras, sync GSAP |
| **GSAP + ScrollTrigger** | StrokeText e ticker do Lenis |
| **Motion** | Carousel (How It Works mobile) |
| **Three.js** | LightPillar (hero) |
| **OGL** | GhostFibers (CTA final) |
| **react-icons** | Ícones pontuais |

Componentes de efeito inspirados em React Bits: `LightPillar`, `GhostFibers`, `DriftWall`, `GooeyNav`, `Carousel`, `LogoLoop`, `StrokeText`.

---

## 6. Animações e scroll

### Lenis (`src/lib/smoothScroll.js`)

- Inércia no scroll do mouse
- Cliques em `a[href^="#"]` via `scrollTo` com offset de navbar
- Pausa quando o menu mobile abre (`stopSmoothScroll` / `startSmoothScroll`)
- Desligado se `prefers-reduced-motion: reduce`

### Reveal (`useReveal` + `Reveal.css`)

- Entrada e saída ao cruzar a viewport (bidirecional)
- `.reveal` / `.reveal-stagger`: bloco com fade + leve translate
- `.reveal-text`: fade in/out de tipografia
- Backgrounds: `.bg-reveal`, `.bg-veil`

### Hero

- `StrokeText` desenha “ShiverPartner” no mount; demais textos do hero entram após `onComplete`
- Brand permanece visível durante o stroke; fade de saída só ao sair da viewport

---

## 7. Responsividade

- Breakpoint principal de layout/nav: **900px** (`useIsMobile(900)`)
- Estilos mobile agregados em `src/styles/mobile.css`
- Navbar: portal do drawer no `body` (evita bug de `backdrop-filter`)
- Drawer do menu: ~**50%** da largura da tela; animação de abrir e fechar
- How It Works: carrossel só no mobile; grid de 4 cards no desktop
- Footer: CTA “Quero ser parceiro” removido no mobile
- FAQ: ordem mobile título → lista → botão de suporte (centralizado)

---

## 8. Assets

Imagens raster em **WebP** sob `src/assets/` (creators, dashboard, manifesto, fundos, logo).

SVGs em `public/` (`favicon.svg`, `icons.svg`) e alguns em `src/assets/`.

Ao adicionar imagens novas, preferir WebP e atualizar imports nos componentes.

---

## 9. Design tokens (resumo)

Definidos em `src/index.css`:

- Fundo: `#070812`
- Texto: `#9aa4b8` / headings `#eef3ff`
- Accent: `#9ad4ff` / fill botão `#7ec8ff`
- Fontes: Roboto (display), Inter (body) via Google Fonts
- Botões compartilhados: `Buttons.css`

---

## 10. Configurações importantes para manutenção

### Trocar link do formulário externo

Arquivo: `src/components/FinalCta.jsx`

```js
const APPLY_FORM_URL = '#contato' // → URL real do form
```

Os demais CTAs que usam `#contato` continuam levando o usuário até essa section; o botão final abre o form.

### Contato / e-mail

- Navbar drawer e footer: `support@shiverbroker.com`
- Ajustar nos componentes `SiteNav.jsx` e `SiteFooter.jsx` se mudar.

### Base path Hostinger

Ver `vite.config.js` + [HOSTINGER-DEPLOY.md](./HOSTINGER-DEPLOY.md).

---

## 11. Fluxo de build para produção

1. `npm run build`
2. Vite gera `dist/`
3. `scripts/prepare-dist.cjs` adiciona `.htaccess`, `index.php` e copia para `.preview-static/`
4. Upload do **conteúdo interno** de `dist/` para a Hostinger (não enviar a pasta `dist` como subpasta)

Checklist pós-upload:

- [ ] Página carrega com CSS/JS
- [ ] Âncoras do menu funcionam
- [ ] Menu mobile abre/fecha
- [ ] CTA final aponta para o destino correto
- [ ] Imagens WebP carregam

---

## 12. Documentos relacionados

| Documento | Conteúdo |
|-----------|----------|
| [HOSTINGER-DEPLOY.md](./HOSTINGER-DEPLOY.md) | Deploy estático Hostinger |
| [refatoracao-ux-ui-landing.md](./refatoracao-ux-ui-landing.md) | Notas de refatoração UX/UI |
| [otimizacao-mobile.md](./otimizacao-mobile.md) | Otimizações mobile |
| [partner-program-section.md](./partner-program-section.md) | Section Programa |
| [sections-como-funciona-e-ganhos.md](./sections-como-funciona-e-ganhos.md) | Como funciona + Ganhos |
| [light-pillar-header.md](./light-pillar-header.md) | Hero LightPillar |
| [final-cta-ghost-fibers.md](./final-cta-ghost-fibers.md) | CTA GhostFibers |
| [social-logo-loop.md](./social-logo-loop.md) | Loop de plataformas |
| [secoes-referencia-nextrade.md](./secoes-referencia-nextrade.md) | Referências de seções |
| [scroll-expand-como-funciona.md](./scroll-expand-como-funciona.md) | Histórico scroll-expand |

---

## 13. Limitações e próximos passos sugeridos

- Sem CMS/API neste repo — conteúdo estático no JSX
- Formulário de candidatura ainda externo (placeholder `#contato`)
- Bundle JS grande (Three/OGL/GSAP/Motion) — eventual code-split se performance for crítica
- Sem testes automatizados no momento

---

*Última atualização alinhada ao estado do código em setembro/2026.*
