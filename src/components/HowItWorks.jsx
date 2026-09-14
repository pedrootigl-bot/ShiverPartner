import { useEffect, useMemo, useState } from 'react'
import Carousel from './Carousel'
import { useIsMobile } from '../hooks/useIsMobile'
import { useReveal } from '../hooks/useReveal'
import './HowItWorks.css'

const steps = [
  {
    id: 'join',
    title: 'Entre no programa',
    text: 'A Shiver analisa seu perfil.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M5.5 18.2c1.2-2.6 3.5-4 6.5-4s5.3 1.4 6.5 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M17.2 7.2v3.2M15.6 8.8h3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'campaigns',
    title: 'Receba campanhas e roteiros',
    text: 'Você recebe temas, materiais e links personalizados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 4.8h7.2L19 9.6v9.1c0 .8-.7 1.5-1.5 1.5H7c-.8 0-1.5-.7-1.5-1.5V6.3c0-.8.7-1.5 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M14.1 4.9v4h4M8.4 12.4h7.2M8.4 15.4h5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'create',
    title: 'Crie e publique',
    text: 'Produza conteúdos no seu estilo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="4.5"
          y="5.5"
          width="15"
          height="13"
          rx="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M10.2 9.2v5.6L15.2 12l-5-2.8Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'earn',
    title: 'Envie, valide e ganhe',
    text: 'Nossa equipe valida o conteúdo e sua recompensa é liberada.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.2 18.6h15.6M6.4 18.4V12M12 18.4V7.2M17.6 18.4v-4.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M14.8 6.2h4.2v4.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m19 6.2-5.4 5.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function useCarouselWidth(maxWidth = 380) {
  const [width, setWidth] = useState(() => {
    if (typeof window === 'undefined') return maxWidth
    const pad = window.innerWidth > 900 ? 80 : 32
    return Math.min(maxWidth, Math.max(300, window.innerWidth - pad))
  })

  useEffect(() => {
    const update = () => {
      const pad = window.innerWidth > 900 ? 80 : 32
      const cap = window.innerWidth > 900 ? 400 : maxWidth
      setWidth(Math.min(cap, Math.max(300, window.innerWidth - pad)))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [maxWidth])

  return width
}

function HowItWorks() {
  const isMobile = useIsMobile(900)
  const { ref, visible } = useReveal()
  const revealed = visible ? ' is-revealed' : ''
  const carouselWidth = useCarouselWidth(380)

  const carouselItems = useMemo(
    () =>
      steps.map((step, index) => ({
        id: index + 1,
        number: index + 1,
        title: step.title,
        description: step.text,
        icon: step.icon,
      })),
    [],
  )

  return (
    <section id="como-funciona" className="how-it-works">
      <div ref={ref} className="how-it-works__inner">
        <header className={`how-it-works__header reveal${revealed}`}>
          <div className="how-it-works__badge-row">
            <span className="how-it-works__rule" aria-hidden="true" />
            <p className="how-it-works__badge">Como funciona</p>
            <span className="how-it-works__rule" aria-hidden="true" />
          </div>
          <h2 className="how-it-works__title">
            Do seu conteúdo ao <span>seu crescimento</span>
          </h2>
          <p className="how-it-works__lede">
            Um processo simples para creators que querem crescer com clareza.
          </p>
        </header>

        {isMobile ? (
          <div className={`how-it-works__carousel reveal${revealed}`}>
            <Carousel
              items={carouselItems}
              baseWidth={carouselWidth}
              autoplay
              autoplayDelay={3200}
              pauseOnHover
              loop
            />
          </div>
        ) : (
          <ol className={`how-it-works__steps reveal-stagger${revealed}`}>
            {steps.map((step, index) => (
              <li key={step.id} className="how-it-works__step">
                <span className="how-it-works__number">{index + 1}</span>
                <span className="how-it-works__icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}

export default HowItWorks
