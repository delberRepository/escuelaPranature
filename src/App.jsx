import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './components/Inicio'
import ElCentro from './components/ElCentro'
import Tarifas from './components/Tarifas'
import Contacto from './components/Contacto'
import Actividades from './components/Actividades'
import Horarios from './components/Horarios'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="centro" element={<ElCentro />} />
          <Route path="tarifas" element={<Tarifas />} />
          <Route path="horarios" element={<Horarios />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="actividades" element={<Navigate to="danza-oriental" replace />} />
          <Route path="actividades/:actividadSlug" element={<Actividades />} />
        </Route>
      </Routes>
      <a
          href="https://wa.me/34619622534?text=Hola!%20Me%20gustaría%20información%20sobre%20las%20clases"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
      >
        {/* Puedes usar un icono de FontAwesome o un simple SVG */}
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.104-1.076a7.863 7.863 0 0 0 3.888 1.02h.001c4.369 0 7.926-3.559 7.93-7.93a7.897 7.897 0 0 0-2.333-5.694zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </HashRouter>
  )
}

export default App
