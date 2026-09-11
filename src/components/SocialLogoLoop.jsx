import { SiYoutube, SiInstagram, SiTiktok } from 'react-icons/si'
import LogoLoop from './LogoLoop'
import { useIsMobile } from '../hooks/useIsMobile'
import './SocialLogoLoop.css'

const socialLogos = [
  { node: <SiYoutube />, title: 'YouTube', href: 'https://www.youtube.com' },
  { node: <SiInstagram />, title: 'Instagram', href: 'https://www.instagram.com' },
  { node: <SiTiktok />, title: 'TikTok', href: 'https://www.tiktok.com' },
]

function SocialLogoLoop() {
  const isMobile = useIsMobile()

  return (
    <section className="social-logo-loop" aria-labelledby="social-logo-loop-title">
      <div className="social-logo-loop__inner">
        <p id="social-logo-loop-title" className="social-logo-loop__label">
          Presente onde sua audiência está
        </p>

        <div className="social-logo-loop__track-wrap">
          <LogoLoop
            logos={socialLogos}
            speed={isMobile ? 70 : 90}
            direction="left"
            logoHeight={isMobile ? 32 : 42}
            gap={isMobile ? 36 : 56}
            hoverSpeed={0}
            scaleOnHover={!isMobile}
            fadeOut
            fadeOutColor="#070812"
            ariaLabel="Plataformas sociais: YouTube, Instagram e TikTok"
          />
        </div>
      </div>
    </section>
  )
}

export default SocialLogoLoop
