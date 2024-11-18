'use client'

import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImageDisplay from './ImageDisplay'

gsap.registerPlugin(ScrollTrigger)

const textLines = [
  { text: 'SPEKTRUM', image: '/LogoSpkFter.svg'},
  { text: '(01) Andy Moraw - Cofounder / General Manager', image: '/images/about/about1.png' },
  { text: '(02) Monica Almonacid - Cofounder / Creative Director', image: '/images/about/about2.png' },
  { text: 'ARTIFACT', image: '/logo-artifact2.svg'},
  { text: '(03) Daniel Porras - Cofounder / Operation Director', image: '/images/about/about3.png' },
  { text: 'PLAYGROUND', image: '/images/about/about4.png' },
  { text: '(04) Hall Gillen - Enter Founder /Events Partner', image: '/images/about/about5.png' },
]

export default function TextAboutImage() {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (containerRef.current) {
      textRefs.current.forEach((textRef) => {
        if (textRef) {
          gsap.fromTo(
            textRef,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: textRef,
                start: 'top bottom-=100',
                end: 'bottom top+=100',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }
      })
    }
  }, [])

  return (
    <div className="w-full">
      <div className="pl-[3%] mb-16">
        <h2 className="pl-[3%] font-marcellus text-[3rem] leading-tight">Small team,</h2>
        <h1 className="font-broone text-[4rem] leading-tight">BIG VISION</h1>
      </div>
      <div ref={containerRef} className="flex w-full">
        <div className="w-[70%] p-8">
          {textLines.map((line, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  textRefs.current[index] = el;
                }
              }}
              className="font-marcellus text-[5.5rem] leading-tight text-gray-800 hover:text-white transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setActiveImage(line.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              {line.text}
            </div>
          ))}
        </div>
        <div className="w-[30%] relative">
          <ImageDisplay activeImage={activeImage} />
        </div>
      </div>
    </div>
  )
}