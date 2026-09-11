import './HowItWorks.css'

const steps = [
  {
    id: 1,
    title: 'Inscreva-se',
    text: 'Crie sua conta e faça parte do programa.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 12a3.75 3.75 0 1 0-3.75-3.75A3.75 3.75 0 0 0 12 12Zm0 1.8c-3.1 0-5.6 1.7-5.6 3.8V19h11.2v-1.4c0-2.1-2.5-3.8-5.6-3.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Receba seu link',
    text: 'Ganhe um link exclusivo para divulgar.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M10.2 13.8a3.4 3.4 0 0 1 0-4.8l1.6-1.6a3.4 3.4 0 0 1 4.8 4.8l-.7.7-1.1-1.1.7-.7a1.85 1.85 0 1 0-2.6-2.6l-1.6 1.6a1.85 1.85 0 0 0 0 2.6l.4.4-1.1 1.1-.4-.4Zm3.6-3.6a3.4 3.4 0 0 1 0 4.8l-1.6 1.6a3.4 3.4 0 1 1-4.8-4.8l.7-.7 1.1 1.1-.7.7a1.85 1.85 0 1 0 2.6 2.6l1.6-1.6a1.85 1.85 0 0 0 0-2.6l-.4-.4 1.1-1.1.4.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Divulgue',
    text: 'Compartilhe com sua audiência no ritmo certo.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 18.2 19.2 5.8l-2.1 12.4-4.4-3.2-2.7 2.6.5-4.1 8.6-7.2-10.8 5.8-3.8-2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Acompanhe',
    text: 'Veja cliques, conversões e performance em tempo real.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 18.5h2.2V10H4.5v8.5Zm6.4 0h2.2V6.2h-2.2v12.3Zm6.4 0h2.2V13h-2.2v5.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Receba',
    text: 'Comissões claras, no prazo e com transparência.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.8A8.2 8.2 0 1 0 20.2 12 8.2 8.2 0 0 0 12 3.8Zm.7 12.3v1.2h-1.4v-1.15c-1.35-.2-2.45-.9-2.55-2.2h1.55c.08.55.55.95 1.45.95.85 0 1.35-.4 1.35-.95 0-.6-.4-.9-1.55-1.15-1.55-.35-2.55-.95-2.55-2.25 0-1.2.95-2 2.3-2.2V7.7h1.4v1.15c1.25.2 2.2.9 2.3 2.15h-1.55c-.05-.55-.5-.9-1.25-.9-.75 0-1.2.35-1.2.85 0 .5.4.8 1.55 1.05 1.65.35 2.55 1 2.55 2.35 0 1.3-1 2.15-2.4 2.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

const reasons = [
  {
    id: 'commissions',
    title: 'Comissões atrativas',
    text: 'Ganhe de forma justa por cada resultado gerado.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 18.5h2.2V10H4.5v8.5Zm6.4 0h2.2V6.2h-2.2v12.3Zm6.4 0h2.2V13h-2.2v5.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'realtime',
    title: 'Acompanhamento em tempo real',
    text: 'Painel claro para ver o que está performando.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4.2A7.8 7.8 0 1 0 19.8 12 7.8 7.8 0 0 0 12 4.2Zm0 13.2A5.4 5.4 0 1 1 17.4 12 5.4 5.4 0 0 1 12 17.4Zm.7-8.9V12l3 1.8-.7 1.15L11.2 12.5V8.5h1.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'assets',
    title: 'Materiais prontos',
    text: 'Criativos e referências para acelerar suas campanhas.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7.2 4.5h9.6A1.7 1.7 0 0 1 18.5 6.2v11.6a1.7 1.7 0 0 1-1.7 1.7H7.2a1.7 1.7 0 0 1-1.7-1.7V6.2a1.7 1.7 0 0 1 1.7-1.7Zm1.3 3.1v1.5h7v-1.5h-7Zm0 3.3v1.5h7v-1.5h-7Zm0 3.3v1.5h4.8v-1.5H8.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'support',
    title: 'Suporte dedicado',
    text: 'Time em português para tirar dúvidas e escalar.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M16 11a3.5 3.5 0 1 0-3.45-4H11.5A3.5 3.5 0 1 0 8 11c1.4 0 2.63-.72 3.35-1.82.1-.14.2-.28.28-.43.08.15.18.29.28.43C12.63 10.28 13.86 11 15.26 11H16Zm-8 1.25c-2.62 0-4.75 1.68-4.75 3.75V18h9.5v-1.99c0-2.07-2.13-3.76-4.75-3.76Zm8 0c-.52 0-1.02.07-1.49.2 1.5.84 2.49 2.17 2.49 3.67V18H21v-1.99c0-2.07-2.13-3.76-4.75-3.76Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works">
      <div className="how-it-works__inner">
        <header className="how-it-works__header">
          <p className="how-it-works__eyebrow">Como funciona</p>
          <h2 className="how-it-works__title">
            Do seu conteúdo <span>ao seu crescimento</span>
          </h2>
          <p className="how-it-works__lede">
            Um processo simples, pensado para creators que querem ir mais longe.
          </p>
        </header>

        <ol className="how-it-works__steps">
          {steps.map((step) => (
            <li key={step.id} className="how-it-works__step">
              <span className="how-it-works__step-num">{step.id}</span>
              <div className="how-it-works__step-card">
                <span className="how-it-works__step-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="how-it-works__divider" role="presentation">
          <span>Por que fazer parte</span>
        </div>

        <ul className="how-it-works__reasons">
          {reasons.map((reason) => (
            <li key={reason.id} className="how-it-works__reason">
              <span className="how-it-works__reason-icon">{reason.icon}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="how-it-works__cta-wrap">
          <a className="how-it-works__cta" href="#contato">
            Quero fazer parte
            <span aria-hidden="true">→</span>
          </a>
          <p className="how-it-works__foot">Pessoas reais. Oportunidades reais.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
