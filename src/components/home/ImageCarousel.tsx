'use client'

import React, { useEffect, useState } from 'react'
import { useTransform, MotionValue } from 'framer-motion'
import CarouselImage from './CarouselImage'

interface ImageCarouselProps {
  scrollYProgress: MotionValue<number>; // Usar el tipo MotionValue de framer-motion
  images: string[];
}

interface ImageSize {
  width: number;
  height: number;
}

export default function ImageCarousel({ scrollYProgress, images }: ImageCarouselProps) {
  const [imageSize, setImageSize] = useState<ImageSize>({ width: 0, height: 0 })

  const imageIndex = useTransform(scrollYProgress, [0, 1], [0, images.length - 1])

  useEffect(() => {
    const loadImage = (src: string): Promise<ImageSize> => {
      return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => resolve({ width: img.width, height: img.height })
        img.onerror = reject
        img.src = `/images/artists/${src}`
      })
    }

    loadImage(images[0])
      .then((size: ImageSize) => {
        const aspectRatio = size.width / size.height
        const height = window.innerHeight * 0.6 // 60vh
        const width = height * aspectRatio
        setImageSize({ width, height })
      })
      .catch(error => console.error('Error loading image:', error))
  }, [images])

  return (
    <div style={{ width: `${imageSize.width}px`, height: `${imageSize.height}px` }} className="relative">
      {images.map((src, index) => (
        <CarouselImage
          key={src}
          src={src}
          index={index}
          imageIndex={imageIndex}
          imageSize={imageSize}
        />
      ))}
    </div>
  )
}
