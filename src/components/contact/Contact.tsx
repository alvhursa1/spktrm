'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BannerImageSmootContact from './BnnerImageSmootContact'
import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) - 0.5
    const y = (e.clientY / window.innerHeight) - 0.5
    setMousePosition({ x, y })
  }

  return (
    <div className="w-screen h-screen overflow-hidden p-[3%] flex flex-col justify-between" onMouseMove={handleMouseMove}>
      {/* Contenedor 1 */}
      <div className="flex mb-4 z-10">
        <div className="w-[30%]">
          <Link href="/">
            <Image
              src="/logo-spektrum.svg"
              alt="Spektrum Logo"
              width={200}
              height={100}
              className="w-auto h-[50px]"
            />
          </Link>
        </div>
        <div className="w-[70%] flex justify-end items-center">
          <Link href="/about-us" className="font-broone text-[1.25rem] hover:underline">
            ABOUT US
          </Link>
        </div>
      </div>

      {/* Contenedor 2 */}
      <div className="flex flex-grow">
        <div className="w-1/2 flex items-center justify-center">
          <BannerImageSmootContact mousePosition={mousePosition} />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <ContactForm />
        </div>
      </div>

      {/* Contenedor 3 */}
      <div className="bottom-0 -mt-[12%] z-50">
        <SocialLinks />
      </div>
    </div>
  )
}