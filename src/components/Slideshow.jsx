// src/components/Slideshow.jsx
import { useState, useEffect } from 'react';
import portada1 from '../assets/portada.jpg';
import portada2 from '../assets/portada2.jpg';


const imagenes = [portada1, portada2];

export default function Slideshow() {
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev + 1) % imagenes.length);
        }, 8000);
        return () => clearInterval(intervalo);
    }, []);


    return (
        <div className="card-body p-0" style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4 / 3',
            overflow: 'hidden',
            borderRadius: '15px'
        }}>
            {imagenes.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`Slide ${i}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Evita que la imagen se estire
                        transition: 'opacity 1.5s ease-in-out',
                        opacity: i === indice ? 1 : 0,
                        zIndex: i === indice ? 1 : 0
                    }}
                />
            ))}
        </div>
    );
}