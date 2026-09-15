import shiverLogo from '../assets/shiver-logo.webp'
import { useIsMobile } from '../hooks/useIsMobile'
import { useReveal } from '../hooks/useReveal'
import './SiteFooter.css'

const links = [
  { label: 'Início', href: '#topo' },
  { label: 'Programa', href: '#programa' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Ganhos', href: '#ganhos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

function SiteFooter() {
  const year = new Date().getFullYear()
  const isMobile = useIsMobile(900)
  const { ref, visible } = useReveal({
    threshold: 0.12,
    rootMargin: '0px 0px -4% 0px',
  })
  const revealed = visible ? ' is-revealed' : ''
  const navLinks = isMobile
    ? links.filter((link) =>
        ['#topo', '#programa', '#como-funciona', '#contato'].includes(link.href),
      )
    : links

  return (
    <footer ref={ref} className={`site-footer${revealed}`}>
      <div className="site-footer__inner">
        <div className={`site-footer__brand-block${revealed}`}>
          <a className="site-footer__brand reveal-text" href="#topo" aria-label="ShiverPartner — início">
            <img
              src={shiverLogo}
              alt="Shiver"
              width="180"
              height="48"
              decoding="async"
            />
          </a>
          <p className="site-footer__tagline reveal-text">Create · Collaborate · Grow</p>
          <p className="site-footer__lede reveal-text">
            Programa de creators da Shiver — campanhas, materiais e parceria com
            acompanhamento.
          </p>
        </div>

        <nav
          className={`site-footer__nav${revealed}`}
          aria-label="Links do rodapé"
        >
          <p className="site-footer__nav-title reveal-text">Navegação</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="reveal-text">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`site-footer__contact${revealed}`}>
          <p className="site-footer__nav-title reveal-text">Contato</p>
          <a className="site-footer__mail reveal-text" href="mailto:support@shiverbroker.com">
            support@shiverbroker.com
          </a>
          {!isMobile && (
            <a className="site-footer__cta reveal-text" href="#contato">
              Quero ser parceiro
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>

      <div className={`site-footer__bottom${revealed}`}>
        <p className="reveal-text">© {year} ShiverPartner. Todos os direitos reservados.</p>
        <a className="reveal-text" href="#topo">Voltar ao topo</a>
      </div>
    </footer>
  )
}

export default SiteFooter
