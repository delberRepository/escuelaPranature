import { useEffect, useState } from 'react'
import foto1 from '../portfolio/1.jpeg'
import foto2 from '../portfolio/2.jpeg'
import foto3 from '../portfolio/3.jpeg'
import foto4 from '../portfolio/4.jpeg'
import foto5 from '../portfolio/5.jpeg'
import foto6 from '../portfolio/6.jpeg'
import foto7 from '../portfolio/7.jpeg'
import foto8 from '../portfolio/8.jpeg'
import foto9 from '../portfolio/9.jpeg'
import foto10 from '../portfolio/10.jpeg'
import foto11 from '../portfolio/11.png'
import foto12 from '../portfolio/12.jpg'



const portfolioPhotos = [
  {
    src: foto1,
    alt: 'Sara Morillo en Pranature',

  },
  {
    src: foto5,
    alt: 'Retrato de Sara Morillo',

  },


  {
    src: foto3,
    alt: 'Espacio Pranature',

  },
  {
    src: foto2,
    alt: 'Práctica de yoga',

  },
  {
    src: foto4,
    alt: 'Detalle visual de Pranature',

  },

  {
    src: foto6,
    alt: 'Clase de yoga en Pranature',

  },
  {
    src: foto7,
    alt: 'Ambiente del centro Pranature',

  },
  {
    src: foto8,
    alt: 'Ambiente del centro Pranature',

  },
  {
    src: foto9,
    alt: 'Ambiente del centro Pranature',

  },
  {
    src: foto10,
    alt: 'Ambiente del centro Pranature',

  },
  {
    src: foto11,
    alt: 'Ambiente del centro Pranature',

  },
  {
    src: foto12,
    alt: 'Ambiente del centro Pranature',

  },
]

function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    if (!selectedPhoto) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPhoto])

  return (
    <section className="page-section">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-6 fw-semibold">Portfolio</h1>
          <p className="mb-0 text-dark">
            Momentos, clases y detalles del universo Pranature.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className={`portfolio-item ${
                index === 0 || index === 3 ? 'portfolio-item-featured' : ''
              }`}
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`Abrir foto: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} className="portfolio-photo" />

            </button>
          ))}
        </div>
      </div>

      {selectedPhoto ? (
        <div
          className="portfolio-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="portfolio-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="portfolio-modal-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Cerrar foto"
            >
              ×
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="portfolio-modal-photo"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Portfolio
