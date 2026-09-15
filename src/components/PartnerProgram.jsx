import manifestoCreator from '../assets/manifesto-creator.webp'
import { useReveal } from '../hooks/useReveal'
import './PartnerProgram.css'

const features = [
  {
    id: 'long-term',
    label: 'Parceria de longo prazo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8.2 11.2a2.6 2.6 0 1 0-2.6-2.6 2.6 2.6 0 0 0 2.6 2.6Zm10.2 0a2.6 2.6 0 1 0-2.6-2.6 2.6 2.6 0 0 0 2.6 2.6Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3.8 18.2v-.7c0-1.9 1.8-3.4 4.4-3.4s4.4 1.5 4.4 3.4v.7M11.6 18.2v-.5c0-1.55 1.15-2.85 3-3.25"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15.8 14.1c2.4.15 4.4 1.55 4.4 3.4v.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'campaigns',
    label: 'Campanhas exclusivas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 9.2v5.6c0 .55.45 1 1 1h2.15L12 19.4V4.6L7.65 8.2H5.5c-.55 0-1 .45-1 1Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M15.2 9.4a3.4 3.4 0 0 1 0 5.2M17.6 7.3a6.2 6.2 0 0 1 0 9.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'support',
    label: 'Suporte dedicado',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.2 11.5V10a4.8 4.8 0 0 1 9.6 0v1.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7.2 11.5a1.7 1.7 0 0 0-1.7 1.7v1.6a1.7 1.7 0 0 0 1.7 1.7h.6M16.8 11.5a1.7 1.7 0 0 1 1.7 1.7v1.6a1.7 1.7 0 0 1-1.7 1.7h-.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 18.4v.8a1.4 1.4 0 0 0 1.4 1.4h1.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function PartnerProgram() {
  const { ref, visible } = useReveal({
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px',
  })

  return (
    <section
      id="programa"
      ref={ref}
      className={`partner-program${visible ? ' is-revealed' : ''}`}
    >
      <div className="partner-program__media" aria-hidden="true">
        <img
          src={manifestoCreator}
          alt=""
          width="1200"
          height="1500"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="partner-program__overlay" aria-hidden="true" />

      <div className="partner-program__shell">
        <div className="partner-program__copy">
          <p className="partner-program__eyebrow reveal-text">Mais que campanhas</p>

          <h2 className="partner-program__title reveal-text">
            Criadores <span>movem</span> mercados.
          </h2>

          <p className="partner-program__lede reveal-text">
            A ShiverPartner conecta creators e marca em parcerias com presença,
            ritmo e acompanhamento — do primeiro contato à ativação contínua.
          </p>

          <ul className="partner-program__features">
            {features.map((feature) => (
              <li key={feature.id} className="partner-program__feature reveal-text">
                <span className="partner-program__feature-icon">{feature.icon}</span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="partner-program__script" aria-hidden="true">
          Great Content Bigger Opportunities
        </p>
      </div>
    </section>
  )
}

export default PartnerProgram
