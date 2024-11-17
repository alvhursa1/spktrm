'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ImageData {
  id: number
  url: string
  title: string
  link: string
  width: number
  height: number
}

interface ImageCarouselProps {
  images: ImageData[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((image) => {
        gsap.fromTo(image,
          { 
            opacity: 0, 
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image,
              start: "top bottom-=5%",
              end: "bottom top+=20%",
              scrub: 1,
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="space-y-6">
      {images.map((image, index) => (
        <div
          key={image.id}
          ref={(el: HTMLDivElement | null) => {
            if (el) imagesRef.current[index] = el;
          }}
          className="opacity-0 transform"
        >
          <Link href={image.link}>
            <Image
              src={image.url}
              alt={image.title}
              width={image.width}
              height={image.height}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </Link>
        </div>
      ))}
    </div>
  )
}