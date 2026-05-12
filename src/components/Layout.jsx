import { Outlet } from 'react-router-dom'
import SiteNavbar from './SiteNavbar'
import SiteFooter from './SiteFooter'

function Layout() {
  return (
    <div className="app-shell d-flex flex-column">
      <SiteNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <SiteFooter />

    </div>
  )
}

export default Layout
