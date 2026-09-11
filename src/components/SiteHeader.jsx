import LightPillar from './LightPillar';
import StrokeText from './StrokeText';
import './SiteHeader.css';

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__visual" aria-hidden="true">
        <LightPillar
          topColor="#7EC8FF"
          bottomColor="#2A1F4D"
          intensity={1.05}
          rotationSpeed={0.28}
          glowAmount={0.005}
          pillarWidth={2.8}
          pillarHeight={0.42}
          noiseIntensity={0.45}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <div className="site-header__veil" aria-hidden="true" />

      <div className="site-header__content">
        <h1 className="site-header__brand">
          <StrokeText
            text="ShiverPartner"
            strokeColor="#9ad4ff"
            fillColor="#eef3ff"
            strokeWidth={1.6}
            drawDuration={1.5}
            fillDelay={0.15}
            stagger={0.04}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={128}
            fontWeight={800}
            letterSpacing={-4}
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
  );
}

export default SiteHeader;
