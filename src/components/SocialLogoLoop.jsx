import {
  SiYoutube,
  SiInstagram,
  SiTiktok,
  SiTwitch,
  SiX,
} from 'react-icons/si'
import LogoLoop from './LogoLoop'
import earthBg from '../assets/platforms-earth.png'
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
  const { ref, visible } = useReveal()
  const revealed = visible ? ' is-revealed' : ''

  return (
    <section id="plataformas" className="platforms" aria-labelledby="platforms-title">
      <div className="platforms__bg" aria-hidden="true">
        <img
          src={earthBg}
          alt=""
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="platforms__veil" aria-hidden="true" />

      <div ref={ref} className="platforms__inner">
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
              logos={platforms}
              speed={isMobile ? 45 : 58}
              direction="left"
              logoHeight={isMobile ? 48 : 64}
              gap={isMobile ? 36 : 48}
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
