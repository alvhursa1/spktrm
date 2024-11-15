'use client'

import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

const images = [
  'Artist-01.JPG', 'Artist-02.JPG', 'Artist-03.JPG', 'Artist-04.JPG',
  'Artist-05.JPG', 'Artist-06.JPG', 'Artist-07.JPG', 'Artist-08.JPG',
  'Artist-09.JPG', 'Artist-10.JPG', 'Artist-11.JPG', 'Artist-12.JPG',
  'Artist-13.JPG', 'Artist-14.JPG'
]

export default function ScrollingArtist() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

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
            <ImageCarousel scrollYProgress={scrollYProgress} images={images} />
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
