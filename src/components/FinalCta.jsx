import GhostFibers from './GhostFibers'
import { useIsMobile } from '../hooks/useIsMobile'
import './FinalCta.css'

function FinalCta() {
  const isMobile = useIsMobile()

  function handleSubmit(event) {
    event.preventDefault()
    // TODO: conectar API/CRM — por enquanto abre mailto com os dados do formulário
    const form = event.currentTarget
    const data = new FormData(form)
    const body = [
      `Nome: ${data.get('name') || ''}`,
      `Social: ${data.get('social') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `WhatsApp: ${data.get('whatsapp') || ''}`,
      `Plataforma: ${data.get('platform') || ''}`,
      `Nicho: ${data.get('niche') || ''}`,
    ].join('\n')

    window.location.href = `mailto:contato@shiverpartner.com?subject=${encodeURIComponent(
      'Candidatura ShiverPartner',
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contato" className="final-cta">
      <div className="final-cta__bg" aria-hidden="true">
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

      <div className="final-cta__veil" aria-hidden="true" />

      <div className="final-cta__content">
        <p className="final-cta__eyebrow">Comece agora</p>
        <h2 className="final-cta__title">
          Vamos transformar sua
          <br />
          influência em parceria real.
        </h2>
        <p className="final-cta__lede">
          Conte um pouco sobre você. O time ShiverPartner retorna com os
          próximos passos.
        </p>

        {/* Integração futura: substituir handleSubmit por POST para API/CRM */}
        <form className="final-cta__form" onSubmit={handleSubmit} noValidate>
          <div className="final-cta__fields">
            <label>
              <span>Nome</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Instagram / @social</span>
              <input name="social" type="text" autoComplete="username" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>WhatsApp</span>
              <input name="whatsapp" type="tel" autoComplete="tel" />
            </label>
            <label>
              <span>Principal plataforma</span>
              <select name="platform" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="youtube">YouTube</option>
                <option value="twitch">Twitch</option>
                <option value="x">X</option>
                <option value="outra">Outra</option>
              </select>
            </label>
            <label>
              <span>Nicho</span>
              <input name="niche" type="text" placeholder="Ex.: games, lifestyle…" />
            </label>
          </div>

          <button className="final-cta__primary" type="submit">
            Quero começar
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default FinalCta
