'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const socialLinks = [
  { name: 'LinkedIn/company/spektrumagency/', text: 'LN', url: 'https://www.linkedin.com/company/spektrumagency/' },
  { name: 'Instagram/spektrum.agency', text: 'IN', url: 'https://www.instagram.com/spektrum.agency/' },
  { name: 'facebook.com/spektrum.agency', text: 'FB', url: 'https://www.facebook.com/share/1DCdU5RNuZ/?mibextid=LQQJ4d' },
  { name: 'andymoraw@spektrumagency.com', text: '@', url: 'andymoraw@spektrumagency.com' },
]

export default function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="w-full">
      <div className="flex w-full ">
        <div className="w-1/4 flex items-center"></div>
        <div className="w-1/2"></div>
        <div className="w-1/4 flex items-end justify-end pr-[3%] h-8 overflow-x-auto">
          {hoveredLink && (
            <span className="text-white text-sm whitespace-nowrap">
              {hoveredLink}
            </span>
          )}
        </div>
      </div>

      <div className="flex w-full my-[5%] justify-between px-[5%]">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            className="transition-colors duration-300 text-gray-600 hover:text-white"
            aria-label={`${link.name} link`}
          >
            <span className="font-marcellus text-[3rem] leading-none">
              {link.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}