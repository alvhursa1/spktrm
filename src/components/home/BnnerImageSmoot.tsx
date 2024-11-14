import Image from 'next/image'

interface BnnerImageSmootProps {
  mousePosition: { x: number; y: number }
}

export default function BnnerImageSmoot({ mousePosition }: BnnerImageSmootProps) {
  return (
    <div
      className="relative w-[90vw] h-[100vh] overflow-hidden"
      style={{
        transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
        transition: 'transform 0.4s ease-out',
      }}
    >
      <Image
        src="/images/figures/ImgHome.png"
        alt="Banner de Spektrum"
        fill
        quality={100}
        placeholder="blur"
        blurDataURL="/images/figures/ImgHome.png"
        style={{
          objectFit: 'contain',
          objectPosition: '70% center', // Mueve la imagen hacia la derecha
          transition: 'all 0.5s ease-in-out',
        }}
      />
    </div>
  )
}
