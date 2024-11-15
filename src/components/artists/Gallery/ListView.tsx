'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Artist } from '@/data/artists'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

interface ListViewProps {
  artists: Artist[]
}

export default function ListView({ artists }: ListViewProps) {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null)
  const [isHoveredEnquire, setIsHoveredEnquire] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastArtistRef = useRef<HTMLDivElement>(null)
  const enquireButtonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const lastArtist = lastArtistRef.current
    const enquireButton = enquireButtonRef.current

    if (container && lastArtist && enquireButton) {
      gsap.set(enquireButton, { autoAlpha: 0, y: 20 })

      ScrollTrigger.create({
        trigger: container,
        start: 'top top+=100',
        end: () => `bottom-=${lastArtist.offsetHeight} top`,
        onEnter: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            position: 'fixed',
            top: '10px',
          })
        },
        onLeave: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 0,
            y: 20,
            duration: 0.3
          })
        },
        onEnterBack: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            position: 'fixed',
            top: '10px',
          })
        },
        onLeaveBack: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 0,
            y: 20,
            duration: 0.3
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full min-h-screen px-[3%] relative">
      <div className="flex items-center py-4 border-b border-white text-lg">
        <div className="w-1/2 text-left font-broone text-[1.125rem]">#</div>
        <div className="w-1/2 text-right font-broone text-[1.125rem]">NAME</div>
      </div>
      {artists.map((artist, index) => (
        <div 
          key={artist.id}
          ref={index === artists.length - 1 ? lastArtistRef : null}
          className={`flex items-center py-4 border-b border-white transition-colors duration-300 ${
            hoveredArtist === artist.id ? 'text-white' : hoveredArtist ? 'opacity-20' : ''
          }`}
          onMouseEnter={() => setHoveredArtist(artist.id)}
          onMouseLeave={() => setHoveredArtist(null)}
        >
          <div className="w-1/2 text-left font-satoshi-light text-[1rem] relative">
            <span className={`transition-all duration-300 ${hoveredArtist === artist.id ? 'text-[6rem]' : ''}`}>
              {artist.id}
            </span>
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <span className={`font-satoshi-light text-right transition-all duration-300 ${
              hoveredArtist === artist.id ? 'text-[6rem]' : 'text-[1rem]'
            }`}>
              {artist.name}
            </span>
          </div>
          {hoveredArtist === artist.id && (
            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="h-[80vh] w-[80vh] relative">
                <Image
                  src={`/images/galery/${artist.images[0]}`}
                  alt={`${artist.name}'s work`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="60vh"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      ))}
      <Link
        ref={enquireButtonRef}
        href="/enquire"
        className="fixed top-[10px] right-[3%] flex items-center justify-center bg-black rounded-full px-4 py-2 cursor-pointer transition-all duration-500 ease-in-out z-50"
        onMouseEnter={() => setIsHoveredEnquire(true)}
        onMouseLeave={() => setIsHoveredEnquire(false)}
      >
        <span className="relative font-satoshi text-base font-extralight text-white uppercase group">
          ENQUIRE TO PURCHASE
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </span>
      </Link>
    </div>
  )
}