import { useId, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Faq.css'

const items = [
  {
    q: 'Como funciona o programa?',
    a: 'Você se candidata, o perfil é analisado e, se aprovado, passa a receber campanhas e materiais pelo painel. Detalhes comerciais são confirmados com o time.',
  },
  {
    q: 'Preciso ter muitos seguidores?',
    a: 'Não há um número mínimo público neste momento. Avaliamos consistência, qualidade do conteúdo e alinhamento com a marca.',
  },
  {
    q: 'Quais redes sociais são aceitas?',
    a: 'O programa contempla creators com presença em plataformas como Instagram, TikTok, YouTube e outras redes relevantes para a audiência.',
  },
  {
    q: 'Como recebo as campanhas?',
    a: 'Após a aprovação, as campanhas e materiais ficam disponíveis no painel do creator.',
  },
  {
    q: 'Existe exclusividade?',
    /* Conteúdo oficial de exclusividade a confirmar com o time jurídico/comercial */
    a: 'As condições de exclusividade, quando existirem, são informadas no momento da aprovação e nos termos da parceria.',
  },
  {
    q: 'Como acompanho meus resultados?',
    a: 'Pelo dashboard do programa, com visão de campanhas e indicadores de performance.',
  },
  {
    q: 'Como funcionam os pagamentos?',
    /* Conteúdo oficial de pagamento a confirmar com o time */
    a: 'Os critérios e prazos de pagamento são definidos nos termos da parceria e comunicados pelo time ShiverPartner.',
  },
  {
    q: 'Como funciona a aprovação?',
    a: 'Cada candidatura passa por análise de perfil. O retorno é feito pelo canal informado no momento da inscrição.',
  },
]

function FaqItem({ item, open, onToggle, panelId, buttonId }) {
  return (
    <div className={`faq__item${open ? ' is-open' : ''}`}>
      <h3 className="faq__question">
        <button
          type="button"
          id={buttonId}
          className="faq__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span className="faq__icon" aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq__panel"
      >
        <div className="faq__panel-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  )
}

function Faq() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(-1)
  const { ref, visible } = useReveal()
  const revealed = visible ? ' is-revealed' : ''

  return (
    <section id="faq" className="faq">
      <div ref={ref} className="faq__inner">
        <header className={`faq__header reveal${revealed}`}>
          <p className="faq__eyebrow">FAQ</p>
          <h2 className="faq__title">
            Perguntas
            <br />
            <span>frequentes.</span>
          </h2>
          <div className="faq__support">
            <p className="faq__support-title">Não encontrou sua dúvida?</p>
            <p className="faq__support-text">Fale com o nosso time</p>
            <a className="faq__support-btn" href="#contato">
              Falar com o time
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <div className={`faq__list reveal-stagger${revealed}`}>
          {items.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              panelId={`${baseId}-panel-${index}`}
              buttonId={`${baseId}-button-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
