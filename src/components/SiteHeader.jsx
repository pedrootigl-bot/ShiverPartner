import LightPillar from './LightPillar'
import StrokeText from './StrokeText'
import { useIsMobile } from '../hooks/useIsMobile'
import './SiteHeader.css'

function SiteHeader() {
  const isMobile = useIsMobile()

  return (
    <header className="site-header">
      <div className="site-header__visual" aria-hidden="true">
        <LightPillar
          topColor="#7EC8FF"
          bottomColor="#2A1F4D"
          intensity={isMobile ? 0.9 : 1.05}
          rotationSpeed={isMobile ? 0.2 : 0.28}
          glowAmount={0.005}
          pillarWidth={2.8}
          pillarHeight={0.42}
          noiseIntensity={isMobile ? 0.3 : 0.45}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
          quality={isMobile ? 'low' : 'medium'}
        />
      </div>

      <div className="site-header__veil" aria-hidden="true" />

      <div className="site-header__content">
        <h1 className="site-header__brand">
          <StrokeText
            text="ShiverPartner"
            strokeColor="#9ad4ff"
            fillColor="#eef3ff"
            strokeWidth={isMobile ? 1.8 : 1.6}
            drawDuration={isMobile ? 1.1 : 1.5}
            fillDelay={0.12}
            stagger={isMobile ? 0.03 : 0.04}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={isMobile ? 96 : 128}
            fontWeight={800}
            letterSpacing={isMobile ? -2 : -4}
          />
        </h1>
        <p className="site-header__headline">Parcerias que aquecem o jogo</p>
        <p className="site-header__lede">
          Conecte marcas e criadores com presença, ritmo e impacto.
        </p>
        <div className="site-header__actions">
          <a className="site-header__cta" href="#contato">
            Começar agora
          </a>
          <a className="site-header__link" href="#como-funciona">
            Conhecer mais
          </a>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
