'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import localFont from 'next/font/local'
import BnnerImageSmoot from './BnnerImageSmootAbout'

// Fuentes personalizadas cargadas localmente
const satoshiLight = localFont({ src: './../../app/fonts/Satoshi-Light.otf' })
const marcellusFont = localFont({ src: './../../app/fonts/Marcellus-Regular.ttf' })

export default function AboutBannerText() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const logoRef = useRef<HTMLDivElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      // You can use this timer for any initial animations if needed
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      })
    }
  }

  return (
    <div 
      className="relative w-full h-[100vh]" 
      onMouseMove={handleMouseMove}
      ref={bannerRef}
    >
      {/* Imagen de fondo con z-index 0 y efecto de movimiento suave */}
      <div className="absolute inset-0 z-0">
        <BnnerImageSmoot mousePosition={mousePosition} />
      </div>

      {/* El resto del contenido permanece igual */}
      <div className="relative z-10 w-full h-full leading-tight">
        {/* Texto alineado a la izquierda */}
        <div className={`absolute top-[50%] left-0 leading-tight ${satoshiLight.className}`}>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.1',
              color: 'white',
              textAlign: 'left',
              fontWeight: 700,
            }}
          >
            WE BREAK DOWN WALLS, BRIDGE CULTRURES AND 
          </p>
        </div>

        {/* Texto alineado a la derecha */}
        <div className={`absolute top-[50%] right-0 leading-tight ${satoshiLight.className}`}>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.1',
              color: 'white',
              textAlign: 'right',
              fontWeight: 700,
            }}
          >
            CELEBRATE THE VIBRANT WORLD OF LATIN AMERICAN ART
          </p>
        </div>
      </div>
    </div>
  )
}