import dashboardDevices from '../assets/dashboard-devices.webp'
import { useReveal } from '../hooks/useReveal'
import './CreatorDashboard.css'

const features = [
  {
    id: 'campaigns',
    title: 'Campanhas',
    text: 'Veja o que está ativo e o que vem a seguir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.4 9.1v5.8c0 .6.48 1.1 1.08 1.1h2.2L12.2 20V4L7.68 8H5.48c-.6 0-1.08.5-1.08 1.1Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M15.3 9.2a3.5 3.5 0 0 1 0 5.6M17.8 7a6.4 6.4 0 0 1 0 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'materials',
    title: 'Materiais',
    text: 'Acesse criativos e briefings prontos para divulgar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 4.8h7.2L19 9.6v9.1c0 .8-.7 1.5-1.5 1.5H7c-.8 0-1.5-.7-1.5-1.5V6.3c0-.8.7-1.5 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M14.1 4.9v4h4M8.4 13.2h7.2M8.4 16.4h5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'results',
    title: 'Resultados',
    text: 'Acompanhe sua performance em tempo real.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.2 18.6h15.6M6.4 18.4V12M12 18.4V7.2M17.6 18.4v-4.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function CreatorDashboard() {
  const { ref, visible } = useReveal({
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  })
  const revealed = visible ? ' is-revealed' : ''

  return (
    <section id="dashboard" ref={ref} className={`creator-dashboard${revealed}`}>
      <div className="creator-dashboard__shell">
        <div className="creator-dashboard__grid">
          <div className="creator-dashboard__copy">
            <div className={`creator-dashboard__intro${revealed}`}>
              <p className="creator-dashboard__eyebrow reveal-text">Creator dashboard</p>
              <h2 className="creator-dashboard__title reveal-text">
                Tudo que você precisa.
                <br />
                <span>Em um só lugar.</span>
              </h2>
              <p className="creator-dashboard__lede reveal-text">
                Organize suas campanhas, acesse materiais e acompanhe sua
                performance em um painel feito para creators.
              </p>
            </div>

            <ul className={`creator-dashboard__features reveal-stagger${revealed}`}>
              {features.map((item) => (
                <li key={item.id}>
                  <span className="creator-dashboard__feature-icon">{item.icon}</span>
                  <div>
                    <strong className="reveal-text">{item.title}</strong>
                    <p className="reveal-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={`creator-dashboard__actions reveal reveal-delay-2${revealed}`}>
              <a className="creator-dashboard__cta" href="#contato">
                Quero ser parceiro
                <span aria-hidden="true">→</span>
              </a>
              <a className="creator-dashboard__ghost" href="#como-funciona">
                Ver como funciona
                <span aria-hidden="true">›</span>
              </a>
            </div>
          </div>

          <div className="creator-dashboard__stage">
            <div className="creator-dashboard__glow" aria-hidden="true" />

            <div className="cd-float cd-float--left" aria-hidden="true">
              <span className="cd-float__dot" />
              <div>
                <small>Status</small>
                <strong>Campanha ativa</strong>
              </div>
            </div>

            <div className="cd-float cd-float--right" aria-hidden="true">
              <span className="cd-float__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4.8h7.2L19 9.6v9.1c0 .8-.7 1.5-1.5 1.5H7c-.8 0-1.5-.7-1.5-1.5V6.3c0-.8.7-1.5 1.5-1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <div>
                <small>Materiais</small>
                <strong>Prontos para uso</strong>
              </div>
            </div>

            <img
              className="creator-dashboard__devices bg-reveal"
              src={dashboardDevices}
              alt="Painel ShiverPartner no notebook e no celular"
              width="1400"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorDashboard
