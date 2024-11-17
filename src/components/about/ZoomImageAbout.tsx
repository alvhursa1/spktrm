'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({ weight: '400', subsets: ['latin'] })

gsap.registerPlugin(ScrollTrigger)

export default function ZoomImageAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && imageRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      tl.fromTo(
        imageRef.current,
        {
          scale: 25,
          transformOrigin: 'center center',
          y: '0%',
        },
        {
          scale: 0.5,
          y: '-25%',
          duration: 0.5,
          ease: 'none',
        }
      )

      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
        },
        '-=0.2'
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[200vh] overflow-hidden"
      aria-label="Imagen de fondo con efecto de zoom"
    >
      <div 
        ref={imageRef} 
        className="w-full h-full"
      >
        <Image
          src="/images/figures/02-about-figure.png"
          alt="Figura About 2"
          width={8000}
          height={8000}
          unoptimized
          priority
          className="object-cover w-full h-full"
        />
      </div>
      <div 
        ref={textRef}
        className={`absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ${marcellus.className}`}
        style={{ fontSize: '1rem' }}
      >
        THE ILLUSTRATiON AGENCY
      </div>
    </div>
  )
}