# Como funciona — nota de estabilidade

O efeito `ScrollExpand` (React Bits) foi **removido** desta seção porque gerava travamento ao entrar na viewport (loop de layout/`clip-path` + sticky + conteúdo pesado).

A seção `#como-funciona` voltou ao layout estático: título, 5 passos, benefícios e CTA — sem animação de scroll.
