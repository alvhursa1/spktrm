'use client'

import { useState, useEffect, useRef } from 'react'
import localFont from 'next/font/local'
import BnnerImageSmoot from './BnnerImageSmootWork'

// Fuentes personalizadas cargadas localmente
const satoshiLight = localFont({ src: './../../app/fonts/Satoshi-Light.otf' })
const marcellusFont = localFont({ src: './../../app/fonts/Marcellus-Regular.ttf' })

export default function BannerText() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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
        <div className={`${marcellusFont.className} text-left pt-[4%] leading-tight`}>
        <h2 className="font-satoshi-light font-bold text-[2.69rem] w-[85vw] leading-tight">
            &nbsp;&nbsp;&nbsp;&nbsp;Representing top illustrators who produce captivating children’s, decorative & advertising works on comission or license
          </h2>
        </div>

        {/* Párrafo 2 */}
        <div className={`absolute top-[55%] right-[3%] leading-tight ${satoshiLight.className}`}>
        <p className=" font-satoshi text-base font-extralight text-left pl-[55%]">
        Dedicated team made of Project Managers, Designers, Creative Directors and Customer Success Manager. Unlimited user on the Spektrum platform, where project briefing, collaboration, and review happen. We provide contractual and legal support for the illustration services.
            </p>
        </div>

        {/* Logo Spektrum en la parte inferior */}
        <div>

        </div>
      </div>
    </div>
  )
}