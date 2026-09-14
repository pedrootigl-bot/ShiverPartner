import earnWaysBg from '../assets/earn-ways-bg.png'
import { useReveal } from '../hooks/useReveal'
import './EarnWays.css'

const ways = [
  {
    id: 'content',
    index: '01',
    title: (
      <>
        Conteúdo <span>aprovado</span>
      </>
    ),
    text: 'Receba por pacotes de vídeos.',
    visual: 'play',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
        <path d="M10.2 8.6v6.8L16.2 12l-6-3.4Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'performance',
    index: '02',
    title: 'Performance',
    text: 'Ganhe extra por cadastros qualificados.',
    visual: 'chart',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5.2 18.2V11.4M10.8 18.2V7.8M16.4 18.2v-4.2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M4.4 18.8h15.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'rewards',
    index: '03',
    title: 'Rewards',
    text: 'Acumule moedas para sacar, trocar por benefícios ou utilizar na plataforma.',
    visual: 'coins',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 15.6h12l-.9-5.4-2.9 2.3L12 8.2l-2.2 4.3-2.9-2.3L6 15.6Z"
          fill="currentColor"
          opacity="0.95"
        />
        <path d="M6.4 17h11.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const perks = [
  {
    id: 'simple',
    label: 'Simples de participar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12.8 3.2 7.1 12.4h3.9l-.9 8.4 6.6-10.8h-4L12.8 3.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'secure',
    label: 'Pagamentos seguros',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.4 5.2 6.2v5.2c0 4.2 2.9 7.7 6.8 9 3.9-1.3 6.8-4.8 6.8-9V6.2L12 3.4Z"
          fill="currentColor"
          opacity="0.22"
        />
        <path
          d="M12 3.4 5.2 6.2v5.2c0 4.2 2.9 7.7 6.8 9 3.9-1.3 6.8-4.8 6.8-9V6.2L12 3.4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m9.1 12 2.1 2.1 3.8-3.9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'support',
    label: 'Suporte especializado',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" fill="currentColor" opacity="0.25" />
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5.4 18.6c1.2-2.7 3.5-4.1 6.6-4.1s5.4 1.4 6.6 4.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function CardVisual({ type }) {
  if (type === 'play') {
    return (
      <div className="earn-visual earn-visual--play" aria-hidden="true">
        <svg className="earn-visual__svg" viewBox="0 0 160 140" fill="none">
          <defs>
            <linearGradient id="ew-play-fill" x1="40" y1="30" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9ad4ff" />
              <stop offset="0.5" stopColor="#00a3ff" />
              <stop offset="1" stopColor="#006bb3" />
            </linearGradient>
            <filter id="ew-play-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="80" cy="118" rx="34" ry="8" fill="#00a3ff" opacity="0.18" />
          <circle cx="80" cy="70" r="52" stroke="#00a3ff" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 7" />
          <circle cx="80" cy="70" r="40" stroke="#7ec8ff" strokeOpacity="0.55" strokeWidth="1.8" filter="url(#ew-play-glow)" />
          <circle cx="80" cy="70" r="40" stroke="#00a3ff" strokeOpacity="0.2" strokeWidth="6" />
          <rect x="52" y="46" width="56" height="48" rx="14" fill="url(#ew-play-fill)" filter="url(#ew-play-glow)" />
          <path d="M74 58.5v27l24-13.5-24-13.5Z" fill="#041018" />
        </svg>
      </div>
    )
  }

  if (type === 'chart') {
    return (
      <div className="earn-visual earn-visual--chart" aria-hidden="true">
        <svg className="earn-visual__svg" viewBox="0 0 160 140" fill="none">
          <defs>
            <linearGradient id="ew-bar-a" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#7ec8ff" />
              <stop offset="1" stopColor="#005f9e" />
            </linearGradient>
            <linearGradient id="ew-bar-b" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#9ad4ff" />
              <stop offset="1" stopColor="#0077cc" />
            </linearGradient>
            <linearGradient id="ew-bar-c" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#c4e7ff" />
              <stop offset="1" stopColor="#00a3ff" />
            </linearGradient>
            <filter id="ew-chart-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="72" cy="118" rx="42" ry="8" fill="#00a3ff" opacity="0.16" />
          <path d="M36 112h78" stroke="#7ec8ff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
          <rect x="42" y="78" width="18" height="34" rx="5" fill="url(#ew-bar-a)" filter="url(#ew-chart-glow)" />
          <rect x="66" y="58" width="18" height="54" rx="5" fill="url(#ew-bar-b)" filter="url(#ew-chart-glow)" />
          <rect x="90" y="38" width="18" height="74" rx="5" fill="url(#ew-bar-c)" filter="url(#ew-chart-glow)" />
          <path
            d="M108 28h28v28"
            stroke="#9ad4ff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ew-chart-glow)"
          />
          <path
            d="M136 28 100 64"
            stroke="#9ad4ff"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#ew-chart-glow)"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="earn-visual earn-visual--coins" aria-hidden="true">
      <svg className="earn-visual__svg" viewBox="0 0 160 140" fill="none">
        <defs>
          <radialGradient id="ew-coin" cx="0.35" cy="0.3" r="0.75">
            <stop stopColor="#edf4fb" />
            <stop offset="0.35" stopColor="#9eb4cb" />
            <stop offset="0.7" stopColor="#5b738c" />
            <stop offset="1" stopColor="#2c3c4e" />
          </radialGradient>
          <linearGradient id="ew-crown" x1="70" y1="48" x2="110" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c4e7ff" />
            <stop offset="1" stopColor="#00a3ff" />
          </linearGradient>
          <filter id="ew-coin-glow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse cx="82" cy="118" rx="40" ry="8" fill="#00a3ff" opacity="0.16" />
        <circle cx="52" cy="78" r="28" fill="url(#ew-coin)" opacity="0.72" />
        <circle cx="52" cy="78" r="28" stroke="#b7d0e6" strokeOpacity="0.35" />
        <circle cx="112" cy="70" r="30" fill="url(#ew-coin)" opacity="0.82" />
        <circle cx="112" cy="70" r="30" stroke="#b7d0e6" strokeOpacity="0.4" />
        <circle cx="84" cy="82" r="34" fill="url(#ew-coin)" filter="url(#ew-coin-glow)" />
        <circle cx="84" cy="82" r="34" stroke="#9ad4ff" strokeOpacity="0.55" strokeWidth="2" />
        <path
          d="M66 90h36l-2.6-14.8-8.4 6.6L84 66.5l-6.9 15.3-8.4-6.6L66 90Z"
          fill="url(#ew-crown)"
          filter="url(#ew-coin-glow)"
        />
        <path d="M67.5 94.5h33" stroke="#7ec8ff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function EarnWays() {
  const { ref, visible } = useReveal()
  const revealed = visible ? ' is-revealed' : ''

  return (
    <section id="ganhos" className="earn-ways">
      <div className="earn-ways__bg" aria-hidden="true">
        <img
          src={earnWaysBg}
          alt=""
          width="1024"
          height="576"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="earn-ways__veil" aria-hidden="true" />

      <div ref={ref} className="earn-ways__shell">
        <header className={`earn-ways__header reveal${revealed}`}>
          <p className="earn-ways__eyebrow">
            <span aria-hidden="true">—</span>
            Mais resultados para você
            <span aria-hidden="true">—</span>
          </p>
          <h2 className="earn-ways__title">
            Ganhe de <span>3</span> formas
          </h2>
          <p className="earn-ways__lede">
            Diversas oportunidades, um só programa. Escolha o que mais combina
            com você (ou aproveite todas) e transforme seu conteúdo em
            recompensa.
          </p>
        </header>

        <ul className={`earn-ways__cards reveal-stagger${revealed}`}>
          {ways.map((way) => (
            <li key={way.id} className="earn-ways__card">
              <div className="earn-ways__card-top">
                <span className="earn-ways__index">{way.index}</span>
                <span className="earn-ways__badge">{way.badgeIcon}</span>
              </div>

              <CardVisual type={way.visual} />

              <h3 className="earn-ways__card-title">{way.title}</h3>
              <p className="earn-ways__card-text">{way.text}</p>
              <span className="earn-ways__accent" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <a className={`earn-ways__cta reveal reveal-delay-2${revealed}`} href="#contato">
          Quero ser parceiro
          <span aria-hidden="true">→</span>
        </a>

        <ul className={`earn-ways__perks reveal reveal-delay-3${revealed}`}>
          {perks.map((perk) => (
            <li key={perk.id}>
              <span className="earn-ways__perk-icon">{perk.icon}</span>
              {perk.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default EarnWays
