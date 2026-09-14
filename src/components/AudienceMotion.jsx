import creator01 from '../assets/creators/creator-01.webp'
import creator02 from '../assets/creators/creator-02.webp'
import creator03 from '../assets/creators/creator-03.webp'
import creator04 from '../assets/creators/creator-04.webp'
import creator05 from '../assets/creators/creator-05.webp'
import creator06 from '../assets/creators/creator-06.webp'
import DriftWall from './DriftWall'
import { useIsMobile } from '../hooks/useIsMobile'
import { useReveal } from '../hooks/useReveal'
import './AudienceMotion.css'

const leftItems = [
  { image: creator01, title: 'Creator em estúdio', label: 'Studio' },
  { image: creator03, title: 'Creator lifestyle', label: 'Stories' },
  { image: creator05, title: 'Creator selfie', label: 'Reels' },
  { image: creator02, title: 'Creator em podcast', label: 'Live' },
  { image: creator04, title: 'Creator no desk', label: 'Create' },
  { image: creator06, title: 'Creator em gravação', label: 'YouTube' },
  { image: creator01, title: 'Creator em estúdio', label: 'Campanha' },
  { image: creator03, title: 'Creator lifestyle', label: 'Travel' },
  { image: creator05, title: 'Creator selfie', label: 'TikTok' },
]

const rightItems = [
  { image: creator02, title: 'Creator em podcast', label: 'Collab' },
  { image: creator04, title: 'Creator no desk', label: 'Partner' },
  { image: creator06, title: 'Creator em gravação', label: 'Grow' },
  { image: creator01, title: 'Creator em estúdio', label: 'Content' },
  { image: creator03, title: 'Creator lifestyle', label: 'Creator' },
  { image: creator05, title: 'Creator selfie', label: 'Audience' },
  { image: creator02, title: 'Creator em podcast', label: 'Live' },
  { image: creator04, title: 'Creator no desk', label: 'Studio' },
  { image: creator06, title: 'Creator em gravação', label: 'Reels' },
]

function AudienceCopy({ ready }) {
  return (
    <div className={`audience-motion__content${ready ? ' is-ready' : ''}`}>
      <p className="audience-motion__brand audience-motion__item">ShiverPartner</p>
      <p className="audience-motion__tagline audience-motion__item">
        Create · Collaborate · Grow
      </p>
      <p className="audience-motion__eyebrow audience-motion__item">
        Conteúdo que conecta
      </p>

      <h2 id="audience-motion-title" className="audience-motion__title audience-motion__item">
        Sua audiência já está
        <br />
        em movimento.
      </h2>

      <p className="audience-motion__lede audience-motion__item">
        Leve sua criatividade para campanhas que conectam creators, marcas e
        novas oportunidades.
      </p>

      <a className="audience-motion__cta audience-motion__item" href="#contato">
        Quero ser parceiro
        <span aria-hidden="true">→</span>
      </a>

      <p className="audience-motion__formats audience-motion__item">
        Reels · Stories · TikTok · YouTube · Lives
      </p>
    </div>
  )
}

function AudienceMotion() {
  const isMobile = useIsMobile(900)
  const { ref, visible } = useReveal({
    threshold: 0.22,
    rootMargin: '0px 0px -10% 0px',
  })

  const sharedProps = {
    columns: 3,
    tileWidth: 160,
    tileHeight: 228,
    gap: 14,
    radius: 12,
    tilt: 12,
    perspective: 1400,
    depth: 90,
    speed: 38,
    variance: 0.5,
    parallax: 0.35,
    lift: 48,
    fade: 0.72,
    dim: 0.58,
    grayscale: false,
    overlayColor: '#070812',
  }

  if (isMobile) {
    return (
      <section
        id="movimento"
        ref={ref}
        className="audience-motion audience-motion--mobile"
        aria-labelledby="audience-motion-title"
      >
        <div className="audience-motion__veil" aria-hidden="true" />
        <AudienceCopy ready={visible} />
      </section>
    )
  }

  return (
    <section
      id="movimento"
      ref={ref}
      className="audience-motion"
      aria-labelledby="audience-motion-title"
    >
      <div className="audience-motion__side audience-motion__side--left" aria-hidden="true">
        <DriftWall {...sharedProps} items={leftItems} turn={28} direction="up" />
      </div>

      <div className="audience-motion__side audience-motion__side--right" aria-hidden="true">
        <DriftWall {...sharedProps} items={rightItems} turn={-28} direction="down" />
      </div>

      <div className="audience-motion__veil" aria-hidden="true" />
      <AudienceCopy ready={visible} />
    </section>
  )
}

export default AudienceMotion
