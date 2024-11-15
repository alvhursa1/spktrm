'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Work {
  src: string
  title: string
  description: string
}

const works: Work[] = [
  { src: '/images/work1.png', title: 'Flyer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida feugiat leo, quis luctus velit suscipit nec. Vestibulum sem nisl, rhoncus sit amet neque et, malesuada mollis nisl. Maecenas vel maximus urna.' },
  { src: '/images/work2.png', title: 'Illustration', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Illustration description.' },
  { src: '/images/work3.png', title: 'Poster', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Poster description.' },
  { src: '/images/work4.png', title: 'Packaging illustration', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Packaging illustration description.' },
  { src: '/images/work5.png', title: 'Clothing illustration', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Clothing illustration description.' },
  { src: '/images/work6.png', title: 'Banner', description: 'Sed malesuada placerat augue sit amet commodo. Cras a ex et neque lobortis placerat. Aenean sit amet commodo lacus. Fusce aliquam sagittis nunc at commodo. Nullam vitae rhoncus diam. Praesent nec blandit est, ut posuere purus. Nunc turpis turpis, hendrerit sit amet tortor ut, consectetur volutpat elit. Nulla rhoncus ornare tempor.' },
  { src: '/images/work7.png', title: 'Album Cover', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Album Cover description.' },
  { src: '/images/work8.png', title: 'Book cover', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Book cover description.' },
  { src: '/images/work9.png', title: 'Infographic', description: 'Proin metus erat, pretium vel hendrerit eget, cursus eget libero. Phasellus non ipsum lacus. Vivamus dapibus volutpat enim. Cras rhoncus lobortis congue. Mauris nec arcu sit amet arcu vulputate maximus. Sed ut congue justo, in facilisis nisl. In in mi quis ipsum dignissim ullamcorper.' },
  { src: '/images/work10.png', title: 'Type setting design', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Type setting design description.' },
]

export default function WorkGallery() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)

  return (
    <div className="relative w-full mt-[5%]">
      <div className="flex w-full">
        {/* Column 1 */}
        <div className="w-[70%] flex flex-wrap">
          {works.map((work, index) => (
            <div
              key={index}
              className={`w-1/3 aspect-square relative ${
                selectedWork && selectedWork.src !== work.src ? 'opacity-50' : 'opacity-100'
              }`}
              onMouseEnter={() => setSelectedWork(work)}
              onMouseLeave={() => setSelectedWork(null)}
            >
              <Image
                src={work.src}
                alt={work.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
              />
            </div>
          ))}
          <div className="w-full flex justify-center items-center mt-4">
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-[30%] p-8 flex flex-col items-center sticky top-0 h-screen">
          <div className="flex flex-col items-center justify-start h-full pt-[10%]">
            {selectedWork && (
              <>
                <div className="relative w-1/2 aspect-square mb-12">
                  <Image
                    src={selectedWork.src}
                    alt={selectedWork.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="pl-[10%]">
                  <h2 className="text-2xl font-bold mb-4 font-broone">{selectedWork.title}</h2>
                  <p className="text-[0.8rem] leading-tight font-satoshi-light">
                    {selectedWork.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}