'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import localFont from 'next/font/local'
import BnnerImageSmoot from './BnnerImageSmoot'

// Fuentes personalizadas cargadas localmente
const satoshiLight = localFont({ src: './../../app/fonts/Satoshi-Light.otf' })
const marcellusFont = localFont({ src: './../../app/fonts/Marcellus-Regular.ttf' })

export default function BannerText() {
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
        {/* Párrafo 1 */}
        <div className={`${marcellusFont.className} text-left pt-[10%] leading-tight`}>
          <p
            style={{
              fontSize: '2rem',
              lineHeight: '1.2',
              color: 'white',
              paddingLeft: '7.5%',
              fontWeight: 700,
            }}
          >
            Specialized in art licensing
          </p>
          <p
            style={{
              fontSize: '2rem',
              lineHeight: '1.2',
              color: 'white',
              paddingLeft: '5%',
              fontWeight: 700,
            }}
          >
            and book illustration.
          </p>
        </div>

        {/* Párrafo 2 */}
        <div className={`absolute top-[55%] right-[7.5%] leading-tight ${satoshiLight.className}`}>
          <p
            style={{
              fontSize: '0.8rem',
              lineHeight: '1.1',
              color: 'white',
              textAlign: 'left',
              height: '10%',
            }}
          >
            Effortless art <br />
            creation <br />
            with adaptable <br />
            payments <br />
            and no legal <br />
            headaches
          </p>
        </div>

        {/* Logo Spektrum en la parte inferior */}
        <div ref={logoRef} className="absolute bottom-0 left-0 w-full flex justify-center">
          <Image
            src="/logo-spektrum.svg"
            alt="Logo de Spektrum"
            width={200}
            height={50}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}