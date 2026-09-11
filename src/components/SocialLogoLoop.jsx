import { SiYoutube, SiInstagram, SiTiktok } from 'react-icons/si'
import LogoLoop from './LogoLoop'
import './SocialLogoLoop.css'

const socialLogos = [
  { node: <SiYoutube />, title: 'YouTube', href: 'https://www.youtube.com' },
  { node: <SiInstagram />, title: 'Instagram', href: 'https://www.instagram.com' },
  { node: <SiTiktok />, title: 'TikTok', href: 'https://www.tiktok.com' },
]

function SocialLogoLoop() {
  return (
    <section className="social-logo-loop" aria-labelledby="social-logo-loop-title">
      <div className="social-logo-loop__inner">
        <p id="social-logo-loop-title" className="social-logo-loop__label">
          Presente onde sua audiência está
        </p>

        <div className="social-logo-loop__track-wrap">
          <LogoLoop
            logos={socialLogos}
            speed={90}
            direction="left"
            logoHeight={42}
            gap={56}
            hoverSpeed={0}
            scaleOnHover
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
