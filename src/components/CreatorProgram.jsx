import './CreatorProgram.css'

function CreatorProgram() {
  return (
    <section id="programa-criadores" className="creator-program">
      <div className="creator-program__shell">
        <div className="creator-program__grid">
          <div className="creator-program__copy">
            <p className="creator-program__eyebrow">
              Programa de criadores ShiverPartner
            </p>

            <h2 className="creator-program__title">
              Sua próxima parceria pode{' '}
              <span className="creator-program__title-accent">começar aqui.</span>
            </h2>

            <p className="creator-program__lede">
              Faça parte do programa de criadores da ShiverPartner, tenha acesso
              a campanhas, materiais exclusivos e acompanhe tudo com total
              transparência.
            </p>

            <div className="creator-program__actions">
              <a className="creator-program__cta" href="#contato">
                Quero fazer parte
                <span aria-hidden="true">→</span>
              </a>
              <a className="creator-program__ghost" href="#contato">
                <span className="creator-program__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M9.5 7.8v8.4l7-4.2-7-4.2Z" fill="currentColor" />
                  </svg>
                </span>
                Falar com o time
              </a>
            </div>

            <p className="creator-program__footnote">
              <span className="creator-program__footnote-line" aria-hidden="true" />
              Pessoas reais. Oportunidades reais.
            </p>
          </div>

          <div className="creator-program__stage" aria-hidden="true">
            <div className="creator-program__glow" />
            <div className="creator-program__neon">GOOD PARTNERS BETTER CREATORS</div>

            <div className="cp-laptop">
              <div className="cp-laptop__lid">
                <div className="cp-dash">
                  <aside className="cp-dash__side">
                    <div className="cp-dash__logo">SP</div>
                    <span className="is-active">Dashboard</span>
                    <span>Campanhas</span>
                    <span>Materiais</span>
                    <span>Pagamentos</span>
                    <span>Minha conta</span>
                  </aside>

                  <div className="cp-dash__main">
                    <header className="cp-dash__hello">
                      <strong>Olá, Lucas!</strong>
                      <em>Sua jornada como criador na ShiverPartner.</em>
                    </header>

                    <div className="cp-dash__stats">
                      <article>
                        <small>Comissões</small>
                        <b>R$ 12.450,00</b>
                        <i>+18,4%</i>
                      </article>
                      <article>
                        <small>Cliques</small>
                        <b>8.421</b>
                        <i>+12,1%</i>
                      </article>
                      <article>
                        <small>Conversões</small>
                        <b>342</b>
                        <i>+9,8%</i>
                      </article>
                    </div>

                    <div className="cp-dash__panel">
                      <div className="cp-dash__panel-head">
                        <span>Seu desempenho</span>
                        <em>Últimos 30 dias</em>
                      </div>
                      <svg className="cp-dash__chart" viewBox="0 0 360 120" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="cpFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7EC8FF" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#7EC8FF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 88 C40 84, 55 60, 90 62 C130 64, 150 28, 190 32 C230 36, 255 58, 290 44 C320 34, 345 30, 360 22"
                          fill="none"
                          stroke="#7EC8FF"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 88 C40 84, 55 60, 90 62 C130 64, 150 28, 190 32 C230 36, 255 58, 290 44 C320 34, 345 30, 360 22 L360 120 L0 120 Z"
                          fill="url(#cpFill)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cp-laptop__base" />
            </div>

            <div className="creator-program__mug">
              <span>CREATORS</span>
              <span>CREATE</span>
              <strong>FREEDOM</strong>
            </div>
          </div>
        </div>

        <p className="creator-program__program-tag">ShiverPartner Creator Program</p>
      </div>
    </section>
  )
}

export default CreatorProgram
