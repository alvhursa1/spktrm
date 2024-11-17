'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ZoomImageAbout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && imageRef.current) {
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
          y: '-20%',
          duration: 0.5,
          ease: 'none',
        }
      )

/*       tl.to(
        containerRef.current,
        {
          height: '100vh',
          duration: 1,
          ease: 'none',
        },
        0
      ) */
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
    </div>
  )
}

export default ZoomImageAbout