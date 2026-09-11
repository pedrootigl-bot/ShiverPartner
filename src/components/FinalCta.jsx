import GhostFibers from './GhostFibers'
import './FinalCta.css'

function FinalCta() {
  return (
    <section id="contato" className="final-cta">
      <div className="final-cta__bg" aria-hidden="true">
        <GhostFibers
          lineColor="#0B1528"
          glowColor="#4FA8E8"
          speed={0.18}
          scale={2.1}
          rotation={0}
          rotationSpeed={0.2}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.1}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.45}
          brightness={1.85}
          blueBoost={1.15}
          vignette={0.85}
          grain={0.04}
          dpr={1}
        />
      </div>

      <div className="final-cta__veil" aria-hidden="true" />

      <div className="final-cta__content">
        <p className="final-cta__eyebrow">Pronto para crescer</p>
        <h2 className="final-cta__title">
          Vamos transformar sua influência em parceria real.
        </h2>
        <p className="final-cta__lede">
          Fale com a ShiverPartner e monte campanhas com presença, ritmo e
          retorno claro — do primeiro contato à ativação.
        </p>

        <div className="final-cta__actions">
          <a className="final-cta__primary" href="mailto:contato@shiverpartner.com">
            Quero começar
            <span aria-hidden="true">→</span>
          </a>
          <a className="final-cta__secondary" href="#programa">
            Ver o programa
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
