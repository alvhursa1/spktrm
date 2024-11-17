'use client'

import React from 'react'
import ImageCarousel from './ImageCarousel'
/* import ScrollingText from './ScrollingText' */

export default function BePartAbout() {
  return (
    <div className="bg-background text-foreground min-h-screen p-8">
      <h2 className="text-left mb-8 -mt-[45%]">
        <div className="font-marcellus text-[4rem]">BE PART OF THE</div>
        <div className="font-broone text-[4rem] -mt-[2%]">SPEKTRUM</div>
      </h2>
      <div className="flex">
        <div className="w-[70%] pr-4">
          <ImageCarousel />
        </div>
        <div className="w-[30%] pl-4">
{/*           <ScrollingText /> */}
        </div>
      </div>
    </div>
  )
}