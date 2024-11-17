import Image from 'next/image'

interface BnnerImageSmootProps {
  mousePosition: { x: number; y: number }
}

export default function BnnerImageSmootContact({ mousePosition }: BnnerImageSmootProps) {
  return (
    <div
      className="relative w-[90vw] h-auto overflow-hidden -mt-[10%]"
      style={{
        transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
        transition: 'transform 0.4s ease-out',
      }}
    >
      <Image
        src="/images/figures/01-figura-contact.png"
        alt="Banner Contact"
        width={2000} // Adjust this to match your image's actual width
        height={2000} // Adjust this to match your image's actual height
        quality={100}
        unoptimized
        style={{
          objectFit: 'contain',
          objectPosition: '60% center',
          transition: 'all 0.5s ease-in-out',
          width: '90%',
          height: '90%',
        }}
      />
    </div>
  )
}