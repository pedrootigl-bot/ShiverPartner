import { useReveal } from '../hooks/useReveal'
import { useIsMobile } from '../hooks/useIsMobile'
import './WhoCanJoin.css'

const criteria = [
  'Perfil ativo e consistente',
  'Conteúdo original',
  'Audiência real',
  'Boa comunicação',
  'Alinhamento com a marca',
  'Cumprimento das diretrizes do programa',
]

function WhoCanJoin() {
  const isMobile = useIsMobile(900)
  const { ref, visible } = useReveal()
  const revealed = visible ? ' is-revealed' : ''
  const list = isMobile ? criteria.slice(0, 4) : criteria

  return (
    <section id="quem-pode" ref={ref} className={`who-can-join${revealed}`}>
      <div className="who-can-join__inner">
        <div className={`who-can-join__copy${revealed}`}>
          <p className="who-can-join__eyebrow reveal-text">Quem pode participar</p>
          <h2 className="who-can-join__title reveal-text">
            Feito para creators que constroem
            <br />
            <span>audiência de verdade.</span>
          </h2>
          <p className="who-can-join__lede reveal-text">
            Não se trata só de número de seguidores. Buscamos presença,
            autenticidade e alinhamento com a Shiver.
          </p>
        </div>

        <ul className={`who-can-join__list reveal-stagger${revealed}`}>
          {list.map((item) => (
            <li key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhoCanJoin
