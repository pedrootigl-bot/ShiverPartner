import GhostFibers from './GhostFibers'
import { useIsMobile } from '../hooks/useIsMobile'
import { useReveal } from '../hooks/useReveal'
import './FinalCta.css'

/** Substituir pelo URL do formulário externo quando estiver pronto. */
const APPLY_FORM_URL = '#contato'

function FinalCta() {
  const isMobile = useIsMobile()
  const { ref, visible } = useReveal({
    threshold: 0.12,
    rootMargin: '0px 0px -6% 0px',
  })

  return (
    <section
      id="contato"
      ref={ref}
      className={`final-cta${visible ? ' is-revealed' : ''}`}
    >
      <div className="final-cta__bg bg-reveal" aria-hidden="true">
        <GhostFibers
          lineColor="#0B1528"
          glowColor="#4FA8E8"
          speed={isMobile ? 0.12 : 0.18}
          scale={2.1}
          rotation={0}
          rotationSpeed={isMobile ? 0.12 : 0.2}
          layers={isMobile ? 2 : 4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.1}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={isMobile ? 12 : 16}
          glowFalloff={10}
          glowIntensity={isMobile ? 1.2 : 1.45}
          brightness={isMobile ? 1.5 : 1.85}
          blueBoost={1.15}
          vignette={0.85}
          grain={isMobile ? 0.02 : 0.04}
          dpr={isMobile ? 0.7 : 1}
          fps={isMobile ? 30 : 60}
        />
      </div>

      <div className="final-cta__veil bg-veil" aria-hidden="true" />

      <div className={`final-cta__content reveal${visible ? ' is-revealed' : ''}`}>
        <p className="final-cta__eyebrow">Comece agora</p>
        <h2 className="final-cta__title">
          Vamos transformar sua
          <br />
          influência em parceria real.
        </h2>
        <p className="final-cta__lede">
          Candidate-se ao ShiverPartner e o time retorna com os próximos passos.
        </p>

        <a className="final-cta__primary" href={APPLY_FORM_URL}>
          Quero começar
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default FinalCta
