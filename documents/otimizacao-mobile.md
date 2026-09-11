# Otimização e responsividade mobile

## Performance
- Fontes via `preconnect` no `index.html` (sem `@import` bloqueante)
- WebGL em qualidade baixa no mobile (`LightPillar`, `GhostFibers`)
- `LightPillar` pausa fora da viewport
- Imagem do programa com `loading="lazy"` + `decoding="async"`
- PNG do hero comprimida

## Mobile
- Breakpoints reforçados em header, programa, logos, como funciona, criadores, CTA
- Botões full-width e altura mínima ~48px
- Cards flutuantes reduzidos no programa
- Mock phone oculto no mobile; sidebar do dashboard simplificada
- `overflow-x: hidden` e `safe-area` no CTA/header
