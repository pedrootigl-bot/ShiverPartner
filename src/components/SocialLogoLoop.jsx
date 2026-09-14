import {
  SiYoutube,
  SiInstagram,
  SiTiktok,
  SiTwitch,
  SiX,
} from 'react-icons/si'
import LogoLoop from './LogoLoop'
import earthBg from '../assets/platforms-earth.webp'
import { useIsMobile } from '../hooks/useIsMobile'
import { useReveal } from '../hooks/useReveal'
import './SocialLogoLoop.css'

const platforms = [
  {
    node: (
      <span className="platforms__loop-item">
        <SiInstagram />
        <span>Instagram</span>
      </span>
    ),
    title: 'Instagram',
    href: 'https://www.instagram.com',
  },
  {
    node: (
      <span className="platforms__loop-item">
        <SiTiktok />
        <span>TikTok</span>
      </span>
    ),
    title: 'TikTok',
    href: 'https://www.tiktok.com',
  },
  {
    node: (
      <span className="platforms__loop-item">
        <SiYoutube />
        <span>YouTube</span>
      </span>
    ),
    title: 'YouTube',
    href: 'https://www.youtube.com',
  },
  {
    node: (
      <span className="platforms__loop-item">
        <SiTwitch />
        <span>Twitch</span>
      </span>
    ),
    title: 'Twitch',
    href: 'https://www.twitch.tv',
  },
  {
    node: (
      <span className="platforms__loop-item">
        <SiX />
        <span>X</span>
      </span>
    ),
    title: 'X',
    href: 'https://x.com',
  },
]

function SocialLogoLoop() {
  const isMobile = useIsMobile()
  const { ref, visible } = useReveal({
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  })
  const revealed = visible ? ' is-revealed' : ''
  const logos = isMobile ? platforms.slice(0, 3) : platforms

  return (
    <section
      id="plataformas"
      ref={ref}
      className={`platforms${revealed}`}
      aria-labelledby="platforms-title"
    >
      <div className="platforms__bg bg-reveal bg-reveal--bottom" aria-hidden="true">
        <img
          src={earthBg}
          alt=""
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="platforms__veil bg-veil" aria-hidden="true" />

      <div className="platforms__inner">
        <div className={`platforms__header reveal${revealed}`}>
          <div className="platforms__heading">
            <p className="platforms__eyebrow">Onde sua audiência está</p>
            <h2 id="platforms-title" className="platforms__title">
              Conteúdo não <span>tem fronteiras.</span>
            </h2>
          </div>
          <p className="platforms__aside">
            Presença nas principais plataformas globais.
          </p>
        </div>

        <div className={`platforms__loop-frame reveal reveal-delay-2${revealed}`}>
          <div className="platforms__loop">
            <LogoLoop
              logos={logos}
              speed={isMobile ? 38 : 58}
              direction="left"
              logoHeight={isMobile ? 42 : 64}
              gap={isMobile ? 28 : 48}
              hoverSpeed={0}
              scaleOnHover={false}
              fadeOut
              fadeOutColor="rgba(5, 6, 13, 0.92)"
              ariaLabel="Plataformas: Instagram, TikTok, YouTube, Twitch e X"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialLogoLoop
