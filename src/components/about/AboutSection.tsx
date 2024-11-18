'use client'

import React, { useRef } from 'react'
import ImageCarousel from './ImageCarousel'
import StackedTexts from './StackedTexts'

const images = [
  {
    id: 1,
    url: "/images/about/about1.png",
    title: "Imagen 1",
    link: "#",
    width: 612,
    height: 612
  },
  {
    id: 2,
    url: "/images/about/about2.png",
    title: "Imagen 2",
    link: "#",
    width: 611,
    height: 611
  },
  {
    id: 3,
    url: "/images/about/about3.png",
    title: "Imagen 3",
    link: "#",
    width: 611,
    height: 618
  },
  {
    id: 4,
    url: "/images/about/about4.png",
    title: "Imagen 4",
    link: "#",
    width: 609,
    height: 609
  },
  {
    id: 5,
    url: "/images/about/about5.png",
    title: "Imagen 5",
    link: "#",
    width: 604,
    height: 615
  },
  {
    id: 6,
    url: "/images/about/about6.png",
    title: "Imagen 6",
    link: "#",
    width: 611,
    height: 611
  }
]

const texts = [
  { id: 1, content: "Since 2021", className: " mt-[3%] pl-[50%] text-[1.125rem] font-broone " },
  { id: 2, content: "By pioneering new business models to rejuvenate and expand the artistic community, we are unlocking new opportunities for artists and art enthusiasts across the world. ", className: "-mt-[4%] text-[1rem] font-satoshi pl-[50%]" },
  { id: 3, content: "By pushing boundaries and redefining the norms, we are opening doors to a thriving and dynamic future for the art world.", className: "-mt-[4%] text-[1rem] font-satoshi pl-[50%]" },
  { id: 4, content: "Providing solid opportunities for talented illustrators and to bridge the gap between their creativity and an international market eager for fresh and authentic voices.", className: "-mt-[4%] text-[1rem] font-satoshi pl-[50%]" },
]

export default function AboutSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null)

  return (
    <div className="container mx-auto px-[3%] py-12">
      <div className="flex flex-col md:flex-row gap-8 min-h-[600vh]">
        <div ref={leftColumnRef} className="md:w-1/2">
          <ImageCarousel images={images} />
        </div>
        <div className="md:w-1/2">
          <StackedTexts texts={texts} />
        </div>
      </div>
    </div>
  )
}