import './CreatorsShowcase.css'

const highlights = [
  {
    id: 'monetize',
    label: 'Monetize sua audiência',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M16 11a3.5 3.5 0 1 0-3.45-4H11.5A3.5 3.5 0 1 0 8 11c1.4 0 2.63-.72 3.35-1.82.1-.14.2-.28.28-.43.08.15.18.29.28.43C12.63 10.28 13.86 11 15.26 11H16Zm-8 1.25c-2.62 0-4.75 1.68-4.75 3.75V18h9.5v-1.99c0-2.07-2.13-3.76-4.75-3.76Zm8 0c-.52 0-1.02.07-1.49.2 1.5.84 2.49 2.17 2.49 3.67V18H21v-1.99c0-2.07-2.13-3.76-4.75-3.76Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'track',
    label: 'Acompanhe seus resultados',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 18.5h2.2V10H4.5v8.5Zm6.4 0h2.2V6.2h-2.2v12.3Zm6.4 0h2.2V13h-2.2v5.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'support',
    label: 'Conte com suporte dedicado',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.8A8.2 8.2 0 1 0 20.2 12 8.2 8.2 0 0 0 12 3.8Zm0 3.2a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 12 7Zm1.3 9.4h-2.6v-1.1c-1.2-.2-2.1-.85-2.2-2.05h1.45c.06.5.5.85 1.3.85.75 0 1.2-.3 1.2-.8 0-.5-.35-.75-1.4-1-1.4-.3-2.3-.85-2.3-2.05 0-1.1.9-1.85 2.15-2.05V8.1h1.3v1.05c1.1.2 1.95.85 2.05 2h-1.45c-.05-.5-.45-.8-1.1-.8-.65 0-1.05.3-1.05.75 0 .45.35.7 1.4.95 1.5.35 2.3.9 2.3 2.15 0 1.2-.95 2-2.25 2.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function CreatorsShowcase() {
  return (
    <section id="criadores" className="creators-showcase">
      <div className="creators-showcase__shell">
        <div className="creators-showcase__grid">
          <div className="creators-showcase__copy">
            <p className="creators-showcase__eyebrow">Para criadores</p>
            <h2 className="creators-showcase__title">
              Crie hoje. <span>Cresça amanhã.</span>
            </h2>
            <p className="creators-showcase__lede">
              Monetize sua audiência com a ShiverPartner e transforme seu
              conteúdo em oportunidades reais, de forma simples e transparente.
            </p>

            <div className="creators-showcase__actions">
              <a className="creators-showcase__cta" href="#contato">
                Quero ser parceiro
                <span aria-hidden="true">→</span>
              </a>
              <a className="creators-showcase__ghost" href="#contato">
                <span className="creators-showcase__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M9.5 7.8v8.4l7-4.2-7-4.2Z" fill="currentColor" />
                  </svg>
                </span>
                Falar com o time
              </a>
            </div>

            <ul className="creators-showcase__highlights">
              {highlights.map((item) => (
                <li key={item.id}>
                  <span className="creators-showcase__hi-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="creators-showcase__stage" aria-hidden="true">
            <div className="device-laptop">
              <div className="device-laptop__bezel">
                <div className="dash">
                  <aside className="dash__side">
                    <div className="dash__brand">SP</div>
                    <span className="is-active">Dashboard</span>
                    <span>Campanhas</span>
                    <span>Materiais</span>
                    <span>Pagamentos</span>
                  </aside>
                  <div className="dash__main">
                    <header className="dash__top">
                      <strong>Olá, Lucas!</strong>
                      <em>Seu painel de performance</em>
                    </header>
                    <div className="dash__stats">
                      <article>
                        <small>Comissões</small>
                        <b>R$ 12.450</b>
                        <i>+18%</i>
                      </article>
                      <article>
                        <small>Cliques</small>
                        <b>8.421</b>
                        <i>+12%</i>
                      </article>
                      <article>
                        <small>Conversões</small>
                        <b>342</b>
                        <i>+9%</i>
                      </article>
                    </div>
                    <div className="dash__chart">
                      <svg viewBox="0 0 320 110" preserveAspectRatio="none">
                        <path
                          d="M0 80 C40 78, 55 55, 90 58 C125 61, 145 30, 180 34 C215 38, 240 55, 270 42 C295 32, 310 28, 320 22"
                          fill="none"
                          stroke="#7EC8FF"
                          strokeWidth="3"
                        />
                        <path
                          d="M0 80 C40 78, 55 55, 90 58 C125 61, 145 30, 180 34 C215 38, 240 55, 270 42 C295 32, 310 28, 320 22 L320 110 L0 110 Z"
                          fill="url(#dashFill)"
                          opacity="0.35"
                        />
                        <defs>
                          <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7EC8FF" />
                            <stop offset="100%" stopColor="#7EC8FF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="device-laptop__base" />
            </div>

            <div className="device-phone">
              <div className="device-phone__notch" />
              <div className="dash dash--mobile">
                <strong>Dashboard</strong>
                <div className="dash__stats dash__stats--stack">
                  <article>
                    <small>Receita</small>
                    <b>R$ 12.4k</b>
                  </article>
                  <article>
                    <small>Cliques</small>
                    <b>8.4k</b>
                  </article>
                </div>
                <div className="dash__chart dash__chart--sm">
                  <svg viewBox="0 0 160 70" preserveAspectRatio="none">
                    <path
                      d="M0 50 C25 48, 35 28, 55 30 C75 32, 90 18, 115 20 C135 22, 150 14, 160 10"
                      fill="none"
                      stroke="#7EC8FF"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorsShowcase
