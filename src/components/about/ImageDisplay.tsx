'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

interface ImageDisplayProps {
  activeImage: string | null
}

export default function ImageDisplay({ activeImage }: ImageDisplayProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      )
    }
  }, [activeImage])

  if (!activeImage) return null

  return (
    <div ref={imageRef} className="sticky top-0 p-8">
      <Image
        src={activeImage}
        alt="About image"
        width={500}
        height={500}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}