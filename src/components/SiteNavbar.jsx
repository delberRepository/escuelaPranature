import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/centro', label: 'El centro' },
  { to: '/actividades', label: 'Actividades' },
  { to: '/horarios', label: 'Horarios' },
  { to: '/tarifas', label: 'Tarifas' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contacto', label: 'Contacto' },
]

function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-nav sticky-top">
      <div className="container nav-shell">
        <div className="nav-layout d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <NavLink
            to="/"
            className="nav-brand d-inline-flex align-items-center fw-semibold text-dark"
            onClick={handleNavClick}
          >
            <span className="brand-mark">
              <img src={logo} alt="Logo Pranature" className="brand-logo" />
            </span>
          </NavLink>

          <button
            type="button"
            className="nav-toggle d-lg-none"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label="Abrir o cerrar menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>

          <nav
            id="site-navigation"
            className={`nav-links ${isMenuOpen ? 'is-open' : ''} d-lg-flex flex-wrap justify-content-center`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-chip ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteNavbar
