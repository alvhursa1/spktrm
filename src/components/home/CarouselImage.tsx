'use client'

import React from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface CarouselImageProps {
  src: string;
  index: number;
  imageIndex: MotionValue<number>; // Usar el tipo MotionValue de framer-motion
  imageSize: { width: number; height: number };
}

export default function CarouselImage({ src, index, imageIndex, imageSize }: CarouselImageProps) {
  const opacity = useTransform(
    imageIndex,
    [index - 0.5, index, index + 0.5],
    [0, 1, 0]
  )

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity,
      }}
    >
      <Image
        src={`/images/artists/${src}`}
        alt={`Artist ${index + 1}`}
        width={imageSize.width}
        height={imageSize.height}
        style={{ objectFit: 'contain' }}
        unoptimized
      />
    </motion.div>
  )
}
