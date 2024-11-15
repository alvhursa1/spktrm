'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const images = [
  'Artist-01.JPG', 'Artist-02.JPG', 'Artist-03.JPG', 'Artist-04.JPG',
  'Artist-05.JPG', 'Artist-06.JPG', 'Artist-07.JPG', 'Artist-08.JPG',
  'Artist-09.JPG', 'Artist-10.JPG', 'Artist-11.JPG', 'Artist-12.JPG',
  'Artist-13.JPG', 'Artist-14.JPG'
]

interface ImageSize {
  width: number;
  height: number;
}

export default function ScrollingArtist() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [imageSize, setImageSize] = useState<ImageSize>({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

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
  }, [])

  return (
    <div ref={targetRef} className="min-h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-between py-6">
        <div className="pl-[3%]">
          <h2 className="font-satoshi-light font-bold text-[2.69rem] w-[80vw] leading-tight">
          &nbsp;&nbsp;&nbsp;&nbsp;We are an Illustration and design agency focused on helping and supporting companies, editorial houses and executive groups in their creative endeavors.
          </h2>
        </div>

        <div className="flex h-full items-center">
          <div className="w-1/2 flex items-center justify-center">
            <div style={{ width: `${imageSize.width}px`, height: `${imageSize.height}px` }} className="relative">
              {images.map((src, index) => (
                <motion.div
                  key={src}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: useTransform(
                      imageIndex,
                      [index - 0.5, index, index + 0.5],
                      [0, 1, 0]
                    ),
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
              ))}
            </div>
          </div>

          <div className="w-1/2 pr-[3%]">
            <p className="font-satoshi text-base font-extralight text-left">
              With a team of over <span className="font-bold">70 talented artists</span> with unique styles and design lines we aim to provide a wide range of services, from <span className="font-bold">banners, illustrations, album covers to even fashion and clothing designs.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}