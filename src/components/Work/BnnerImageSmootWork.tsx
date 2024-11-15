import Image from 'next/image'

interface BnnerImageSmootProps {
  mousePosition: { x: number; y: number }
}

export default function BnnerImageSmootWork({ mousePosition }: BnnerImageSmootProps) {
  return (
    <div
      className="relative w-[90vw] h-[100vh] overflow-hidden mt-[10%]"
      style={{
        transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
        transition: 'transform 0.4s ease-out',
      }}
    >
      <Image
        src="/images/figures/work.png"
        alt="Banner de Spektrum"
        width={1920} // Adjust this to match your image's actual width
        height={1080} // Adjust this to match your image's actual height
        quality={100}
        unoptimized
        style={{
          objectFit: 'contain',
          objectPosition: '10% center',
          transition: 'all 0.5s ease-in-out',
          width: '80%',
          height: '80%',
        }}
      />
    </div>
  )
}