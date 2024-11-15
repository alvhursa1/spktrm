'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Work {
  src: string
  title: string
  description: string
}

const works: Work[] = [
  { src: '/images/Advertising.png', title: 'Advertising', description: 'Tailored illustrations for media campaigns, helping brands stand out through creative and impactful visuals.' },
  { src: '/images/Books.png', title: 'Books', description: 'Illustration services for books and other reading materials, bringing stories and content to life with unique artwork.' },
  { src: '/images/Clothes.png', title: 'Clothes', description: 'Custom designs for clothing, turning garments into wearable art with illustrations that reflect personal style and creativity.' },
  { src: '/images/Creative-Objects.png', title: 'Creative Objects', description: 'One-of-a-kind products crafted by our artists, available by commission or in stock at our Artifact store, each piece designed to inspire and captivate.' },
  { src: '/images/Editable-Files.png', title: 'Editable Files', description: 'Digital illustrations available in our store, ready to be licensed and used in various products, offering flexibility and creativity to your projects.' },
  { src: '/images/Murals.png', title: 'Murals', description: 'Commission an artist to create a custom mural, transforming spaces with large-scale, immersive art that tells a story.' },
  { src: '/images/Music-Album.png', title: 'Music Album', description: 'Artistic support for musicians, with custom illustrations for album covers that visually represent their sound and vision.' },
  { src: '/images/Packaging.png', title: 'Packaging', description: 'Customized packaging illustrations, ensuring your product stands out on shelves with creative, professional designs that leave a lasting impression.' },
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
                <div className="relative w-[90%] aspect-square mb-12">
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