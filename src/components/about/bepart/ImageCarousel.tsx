'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const images = [
  '/images/about/about1-horz.png',
  '/images/about/about2-horz.png',
  '/images/about/about3-horz.png',
  '/images/about/about4-horz.png',
  '/images/about/about5-horz.png',
  '/images/about/about6-horz.png',
]

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect()
      setHoverPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [currentImage])

  return (
    <div
      ref={imageRef}
      className="relative cursor-pointer"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={images[currentImage]}
        alt={`About image ${currentImage + 1}`}
        width={1000}
        height={600}
        className="w-full h-auto"
        unoptimized
        priority
      />
      <div
        className="absolute text-foreground bg-background bg-opacity-50 px-4 py-1 rounded"
        style={{ left: hoverPosition.x, top: hoverPosition.y }}
      >
        {currentImage + 1}/{images.length}
      </div>
    </div>
  )
}