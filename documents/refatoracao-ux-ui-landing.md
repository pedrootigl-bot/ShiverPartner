# Refatoração UX/UI — ShiverPartner Landing

Data: 2026-09-14

## Nova ordem das sections

1. Hero (`SiteHeader`)
2. Manifesto (`PartnerProgram` / `#programa`)
3. Audiência em movimento (`AudienceMotion` / `#movimento`) — DriftWall (React Bits)
4. Plataformas (`SocialLogoLoop`)
5. Como funciona (`HowItWorks` / `#como-funciona`)
6. O que você recebe (`Benefits` / `#beneficios`)
7. Creator Dashboard (`CreatorDashboard` / `#dashboard`)
8. Formatos de conteúdo (`ContentFormats` / `#formatos`)
9. Quem pode participar (`WhoCanJoin` / `#quem-pode`)
10. Prova social (`SocialProof` / `#creators`)
11. FAQ (`Faq` / `#faq`)
12. CTA final + formulário (`FinalCta` / `#contato`)

## Sections removidas

- `CreatorsShowcase` (“Crie hoje / Cresça amanhã!”)
- `CreatorProgram` (“Sua próxima parceria…”)

## Sections unificadas

- Dashboards duplicados → `CreatorDashboard` (notebook + celular)

## Sections adicionadas

- `Benefits`, `ContentFormats`, `WhoCanJoin`, `SocialProof`, `Faq`
- Formulário UI no CTA final (mailto provisório; ponto de integração API/CRM documentado no código)

## Placeholders

- Métricas do dashboard: `data-placeholder="true"` / valores `—`
- Depoimento social: estrutura editorial marcada como PLACEHOLDER

## Build

`npm run build` — sucesso (Vite 8.3.0)
