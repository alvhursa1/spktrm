'use client'

import {  useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ViewToggleProps {
  currentView: 'grid' | 'list'
  onViewChange: (view: 'grid' | 'list') => void
}

export default function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
/*   const [ setIsHoveredEnquire] = useState(false) */
  const enquireButtonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // Registrar el plugin ScrollTrigger de GSAP
    gsap.registerPlugin(ScrollTrigger)

    const enquireButton = enquireButtonRef.current

    if (enquireButton) {
      // Crear una animación de scroll para el botón "ENQUIRE TO PURCHASE"
      ScrollTrigger.create({
        trigger: enquireButton,
        start: 'top top',
        endTrigger: '#artist-gallery-end',
        end: 'bottom top',
        onEnter: () => {
          // Fijar el botón en la parte superior al entrar en la vista
          gsap.to(enquireButton, { 
            position: 'fixed',
            top: '10px',
            right: '3%',
            zIndex: 60,
            duration: 0.3 
          })
        },
        onLeaveBack: () => {
          // Volver a la posición original al salir de la vista hacia arriba
          gsap.to(enquireButton, { 
            position: 'absolute',
            top: '0',
            right: '3%',
            zIndex: 60,
            duration: 0.3 
          })
        },
        onLeave: () => {
          // Ocultar el botón al salir de la vista hacia abajo
          gsap.to(enquireButton, { 
            opacity: 0,
            duration: 0.3 
          })
        },
        onEnterBack: () => {
          // Mostrar el botón al volver a entrar en la vista desde abajo
          gsap.to(enquireButton, { 
            opacity: 1,
            duration: 0.3 
          })
        }
      })
    }

    // Limpiar los triggers de ScrollTrigger al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleViewChange = (view: 'grid' | 'list') => {
    onViewChange(view)
    // Registrar un mensaje en la consola si se hace clic en vista móvil
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      console.log(`${view} view clicked in mobile view`)
    }
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center pl-[3%] pr-[3%] mt-10 -mb-8">
        <div className="flex items-center">
          {/* Botón GRID */}
          <button
            className={`font-satoshi-light text-[0.8rem] text-white ${
              currentView === 'grid' ? 'font-bold' : 'font-extralight'
            } transition-all duration-300 ease-in-out mr-8`}
            onClick={() => handleViewChange('grid')}
          >
            GRID
          </button>
          {/* Círculo separador */}
          <div className="w-1 h-1 bg-white rounded-full "></div>
          {/* Botón LIST */}
          <button
            className={`font-satoshi-light text-[0.8rem] text-white ${
              currentView === 'list' ? 'font-bold' : 'font-extralight'
            } transition-all duration-300 ease-in-out ml-8`}
            onClick={() => handleViewChange('list')}
          >
            LIST
          </button>
        </div>
        {/* Botón ENQUIRE TO PURCHASE */}
        <Link
          ref={enquireButtonRef}
          href="/enquire-to-purcharse"
          className="relative bg-black rounded-full px-4 py-2 cursor-pointer transition-all duration-500 ease-in-out z-60"
/*           onMouseEnter={() => setIsHoveredEnquire(true)}
          onMouseLeave={() => setIsHoveredEnquire(false)} */
        >
          <span className="font-broone text-base font-extralight text-white uppercase relative group">
            ENQUIRE TO PURCHASE
            {/* Línea de subrayado animada solo para el texto */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </span>
        </Link>
      </div>
    </div>
  )
}