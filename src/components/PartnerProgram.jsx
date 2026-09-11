import partnerHero from '../assets/partner-hero.png'
import './PartnerProgram.css'

const features = [
  {
    id: 'long-term',
    label: 'Parceria de longo prazo',
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
    id: 'commission',
    label: 'Comissões competitivas',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 18.5h2.2V10H4.5v8.5Zm6.4 0h2.2V6.2h-2.2v12.3Zm6.4 0h2.2V13h-2.2v5.5ZM3 20.5h18V22H3v-1.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'support',
    label: 'Suporte dedicado em português',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.5A8.5 8.5 0 1 0 20.5 12 8.51 8.51 0 0 0 12 3.5Zm6.9 8H15.8a13.6 13.6 0 0 0-1.1-4.55A6.55 6.55 0 0 1 18.9 11.5ZM12 5.45c.7 1.05 1.5 2.9 1.75 5.05h-3.5C10.5 8.35 11.3 6.5 12 5.45ZM8.3 7A13.6 13.6 0 0 0 7.2 11.5H5.1A6.55 6.55 0 0 1 8.3 7ZM5.1 13.5H7.2A13.6 13.6 0 0 0 8.3 18a6.55 6.55 0 0 1-3.2-4.5Zm5.15 0h3.5c-.25 2.15-1.05 4-1.75 5.05-.7-1.05-1.5-2.9-1.75-5.05Zm5.45 4.5a13.6 13.6 0 0 0 1.1-4.5h2.1A6.55 6.55 0 0 1 15.7 18Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function PartnerProgram() {
  return (
    <section id="programa" className="partner-program">
      <div className="partner-program__shell">
        <div className="partner-program__grid">
          <div className="partner-program__copy">
            <p className="partner-program__eyebrow">Programa de influenciadores</p>

            <h2 className="partner-program__title">
              Transforme sua influência em{' '}
              <span className="partner-program__title-accent">parceria.</span>
            </h2>

            <p className="partner-program__lede">
              Conectamos marcas e criadores em campanhas com presença, ritmo e
              retorno mensurável — do primeiro contato à ativação.
            </p>

            <div className="partner-program__actions">
              <a className="partner-program__cta" href="#contato">
                Quero ser parceiro
                <span aria-hidden="true">→</span>
              </a>

              <a className="partner-program__ghost" href="#como-funciona">
                <span className="partner-program__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M9.5 7.8v8.4l7-4.2-7-4.2Z" fill="currentColor" />
                  </svg>
                </span>
                Como funciona
              </a>
            </div>

            <ul className="partner-program__features">
              {features.map((feature) => (
                <li key={feature.id} className="partner-program__feature">
                  <span className="partner-program__feature-icon">{feature.icon}</span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>

            <p className="partner-program__footnote">
              <span className="partner-program__footnote-line" aria-hidden="true" />
              Pessoas reais. Oportunidades reais.
            </p>
          </div>

          <div className="partner-program__visual">
            <div className="partner-program__frame">
              <img
                className="partner-program__image"
                src={partnerHero}
                alt="Criador sorrindo atrás do notebook com gesto de boas-vindas"
                width="1014"
                height="792"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 720px) 92vw, (max-width: 1024px) 640px, 560px"
              />
            </div>

            <div className="partner-program__card partner-program__card--approved">
              <span className="partner-program__card-icon partner-program__card-icon--ok" aria-hidden="true">
                ✓
              </span>
              <div>
                <p className="partner-program__card-title">Creator aprovado</p>
                <p className="partner-program__card-meta">Perfil verificado</p>
              </div>
            </div>

            <div className="partner-program__card partner-program__card--campaign">
              <span className="partner-program__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4.5 18.5h2.2V10H4.5v8.5Zm6.4 0h2.2V6.2h-2.2v12.3Zm6.4 0h2.2V13h-2.2v5.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <p className="partner-program__card-kicker">Campanha ativa</p>
                <p className="partner-program__card-title">Fall Creator Challenge</p>
              </div>
            </div>

            <div className="partner-program__card partner-program__card--performance">
              <div className="partner-program__card-head">
                <p className="partner-program__card-kicker">Performance</p>
                <p className="partner-program__card-delta">+286%</p>
              </div>
              <svg className="partner-program__spark" viewBox="0 0 160 56" aria-hidden="true">
                <path
                  d="M4 42 C24 40, 28 28, 44 30 C60 32, 64 18, 82 16 C100 14, 108 28, 124 22 C138 17, 146 10, 156 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M4 48 C24 46, 28 34, 44 36 C60 38, 64 24, 82 22 C100 20, 108 34, 124 28 C138 23, 146 16, 156 14 L156 56 L4 56 Z"
                  fill="url(#ppSpark)"
                  opacity="0.35"
                />
                <defs>
                  <linearGradient id="ppSpark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7EC8FF" />
                    <stop offset="100%" stopColor="#7EC8FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="partner-program__card-meta">vs. mês anterior</p>
            </div>

            <div className="partner-program__card partner-program__card--rewards">
              <span className="partner-program__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7.5 4.5h9l1.2 3H20v2.2h-1.1V19a1.5 1.5 0 0 1-1.5 1.5H6.6A1.5 1.5 0 0 1 5.1 19v-9.3H4V7.5h2.3L7.5 4.5Zm1.4 3h6.2l-.6-1.5H9.5L8.9 7.5ZM7.1 9.7v9.3h4.1v-9.3H7.1Zm5.7 0v9.3h4.1v-9.3h-4.1Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <p className="partner-program__card-kicker">Recompensas</p>
                <p className="partner-program__card-value">R$ 12.450,00</p>
              </div>
            </div>

            <blockquote className="partner-program__quote">
              <p>
                “Mais que uma marca. Um parceiro para quem cria o próprio futuro.”
              </p>
              <footer>Lucas Moreira — Creator Partner</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerProgram
