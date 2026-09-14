import shiverLogo from '../assets/shiver-logo.webp'
import { useIsMobile } from '../hooks/useIsMobile'
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
  const navLinks = isMobile ? links.filter((link) => ['#topo', '#programa', '#como-funciona', '#contato'].includes(link.href)) : links

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <a className="site-footer__brand" href="#topo" aria-label="ShiverPartner — início">
            <img
              src={shiverLogo}
              alt="Shiver"
              width="180"
              height="48"
              decoding="async"
            />
          </a>
          <p className="site-footer__tagline">Create · Collaborate · Grow</p>
          <p className="site-footer__lede">
            Programa de creators da Shiver — campanhas, materiais e parceria com
            acompanhamento.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Links do rodapé">
          <p className="site-footer__nav-title">Navegação</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <p className="site-footer__nav-title">Contato</p>
          <a className="site-footer__mail" href="mailto:support@shiverbroker.com">
            support@shiverbroker.com
          </a>
          {!isMobile && (
            <a className="site-footer__cta" href="#contato">
              Quero ser parceiro
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {year} ShiverPartner. Todos os direitos reservados.</p>
        <a href="#topo">Voltar ao topo</a>
      </div>
    </footer>
  )
}

export default SiteFooter
