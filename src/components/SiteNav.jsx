import shiverLogo from '../assets/shiver-logo.png'
import GooeyNav from './GooeyNav'
import { useIsMobile } from '../hooks/useIsMobile'
import './SiteNav.css'

const navItems = [
  { label: 'Início', href: '#topo', short: 'Início' },
  { label: 'Programa', href: '#programa', short: 'Programa' },
  { label: 'Como funciona', href: '#como-funciona', short: 'Como' },
  { label: 'Contato', href: '#contato', short: 'Contato' },
]

function SiteNav() {
  const isMobile = useIsMobile(900)

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#topo" aria-label="ShiverPartner — início">
          <img
            src={shiverLogo}
            alt="Shiver"
            width="180"
            height="48"
            decoding="async"
          />
        </a>

        {isMobile ? (
          <nav className="site-nav__links" aria-label="Navegação principal">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.short}</a>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <div className="site-nav__gooey">
            <GooeyNav
              items={navItems}
              particleCount={12}
              particleDistances={[70, 10]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={220}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        )}

        <a className="site-nav__cta" href="#contato">
          {isMobile ? 'Parceiro' : 'Quero ser parceiro'}
        </a>
      </div>
    </header>
  )
}

export default SiteNav
