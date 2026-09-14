import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import shiverLogo from '../assets/shiver-logo.webp'
import GooeyNav from './GooeyNav'
import { useIsMobile } from '../hooks/useIsMobile'
import './SiteNav.css'

const desktopNavItems = [
  { label: 'Início', href: '#topo' },
  { label: 'Programa', href: '#programa' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
]

const mobileNavItems = [
  { label: 'Início', href: '#topo' },
  { label: 'Programa', href: '#programa' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
]

const DRAWER_ID = 'site-nav-drawer'

function SiteNav() {
  const isMobile = useIsMobile(900)
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalReady, setPortalReady] = useState(false)

  useEffect(() => {
    setPortalReady(true)
  }, [])

  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((open) => !open)

  const mobileMenu =
    isMobile && portalReady
      ? createPortal(
          <div
            className={`site-nav__layer${menuOpen ? ' is-open' : ''}`}
            aria-hidden={!menuOpen}
          >
            <button
              type="button"
              className="site-nav__backdrop"
              aria-label="Fechar menu"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            />

            <nav
              id={DRAWER_ID}
              className="site-nav__drawer"
              aria-label="Navegação principal"
              inert={!menuOpen ? true : undefined}
            >
              <div className="site-nav__drawer-top">
                <p className="site-nav__drawer-kicker">ShiverPartner</p>
                <p className="site-nav__drawer-tag">Create · Collaborate · Grow</p>
              </div>

              <ul className="site-nav__drawer-list">
                {mobileNavItems.map((item, index) => (
                  <li key={item.href} style={{ '--i': index }}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      <span className="site-nav__drawer-index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="site-nav__drawer-text">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="site-nav__drawer-foot">
                <a
                  className="site-nav__cta site-nav__cta--drawer"
                  href="#contato"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  Quero ser parceiro
                </a>
                <a
                  className="site-nav__drawer-mail"
                  href="mailto:support@shiverbroker.com"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  support@shiverbroker.com
                </a>
              </div>
            </nav>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <header
        className={`site-nav${menuOpen ? ' is-open' : ''}${isMobile ? ' site-nav--mobile' : ''}`}
      >
        <div className="site-nav__inner">
          <a
            className="site-nav__brand"
            href="#topo"
            aria-label="ShiverPartner — início"
            onClick={closeMenu}
          >
            <img
              src={shiverLogo}
              alt="Shiver"
              width="180"
              height="48"
              decoding="async"
            />
          </a>

          {isMobile ? (
            <button
              type="button"
              className="site-nav__toggle"
              aria-expanded={menuOpen}
              aria-controls={DRAWER_ID}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={toggleMenu}
            >
              <span className="site-nav__toggle-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          ) : (
            <>
              <div className="site-nav__gooey">
                <GooeyNav
                  items={desktopNavItems}
                  particleCount={12}
                  particleDistances={[70, 10]}
                  particleR={80}
                  initialActiveIndex={0}
                  animationTime={500}
                  timeVariance={220}
                  colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
              </div>

              <a className="site-nav__cta" href="#contato">
                Quero ser parceiro
              </a>
            </>
          )}
        </div>
      </header>

      {mobileMenu}
    </>
  )
}

export default SiteNav
