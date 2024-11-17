'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registramos el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger)

// Definimos la estructura de los datos de texto
interface TextData {
  id: number
  content: string
  className: string
}

// Definimos las props que recibirá nuestro componente
interface StackedTextsProps {
  texts: TextData[]
}

export default function StackedTexts({ texts }: StackedTextsProps) {
  // Creamos una referencia para el contenedor principal
  const containerRef = useRef<HTMLDivElement>(null)
  // Creamos un array de referencias para cada elemento de texto
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {
    // Verificamos que el contenedor exista
    if (containerRef.current) {
      const textsElements = textRefs.current

      // Iteramos sobre cada elemento de texto
      textsElements.forEach((text, index) => {
        if (text) {
          // Creamos una animación para cada texto usando GSAP
          gsap.fromTo(
            text,
            {
              // Estado inicial: texto oculto y desplazado hacia abajo
              y: '100%',
              opacity: 0,
            },
            {
              // Estado final: texto visible y en su posición original
              y: '10%',
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              // Configuramos el ScrollTrigger para controlar la animación
              scrollTrigger: {
                trigger: containerRef.current,
                // Ajustamos el inicio y fin de la animación basándonos en el índice del texto
                start: `top+=${index * 800} center`,
                end: `top+=${(index + 1) * 1500} center`,
                scrub: 1, // Suaviza la animación
                // markers: true, // Útil para depuración, muestra marcadores visuales
              },
            }
          )
        }
      })
    }

    // Limpieza: eliminamos todos los ScrollTriggers al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [texts]) // Este efecto se ejecuta cuando cambia el array de textos

  return (
    // Contenedor principal, fijado en la parte superior de la pantalla
    <div ref={containerRef} className="w-full bg-black p-8 flex flex-col justify-start sticky top-0 h-screen overflow-hidden">
      {/* Mapeamos cada texto a un elemento <p> */}
      {texts.map((text, index) => (
        <p 
          key={text.id}
          // Asignamos una referencia a cada elemento de texto
          ref={(el) => { textRefs.current[index] = el }}
          // Aplicamos las clases CSS, incluyendo opacidad 0 inicialmente
          className={`${text.className} mb-8 opacity-0 text-white`}
        >
          {text.content}
        </p>
      ))}
    </div>
  )
}