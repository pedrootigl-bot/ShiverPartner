# LightPillar no header — ShiverPartner

## Objetivo

Usar o componente open-source **LightPillar** (React Bits) como plano visual full-bleed do header/hero do site.

## Integração

| Item | Caminho |
|------|---------|
| Componente | `src/components/LightPillar.jsx` |
| CSS do efeito | `src/components/LightPillar.css` |
| Título animado | `src/components/StrokeText.jsx` |
| Header do site | `src/components/SiteHeader.jsx` |
| Dependências | `three`, `gsap` |

## StrokeText no título

- Texto: `ShiverPartner`
- `strokeColor`: `#9ad4ff`
- `fillColor`: `#eef3ff`
- `fillMode`: `wipe`, `trigger`: `mount`

## Props usadas no header

- `topColor`: `#7EC8FF` (gelo / brand)
- `bottomColor`: `#2A1F4D` (base profunda)
- `intensity`: `1.05`
- `rotationSpeed`: `0.28`
- `mixBlendMode`: `screen`
- `interactive`: `false`

## Como rodar

```bash
npm install
npm run dev
```

## Referência

- Biblioteca: https://reactbits.dev/llms.txt
- Componente: LightPillar (variant JavaScript + CSS)
