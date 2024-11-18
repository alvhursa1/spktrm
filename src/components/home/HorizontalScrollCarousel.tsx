'use client';

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from 'next/image';

const Example = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <span className="font-semibold uppercase">
        </span>
      </div >
      {isClient && <HorizontalScrollCarousel/>}
      <div className="flex items-center justify-center">
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalWidth = cards.reduce((acc, card, index) => {
    const aspectRatio = card.width / card.height;
    let containerWidth = aspectRatio > 1 ? Math.min(700, windowWidth * 0.8) : windowHeight * 0.92 * aspectRatio;
    if (index === cards.length - 1) {
      containerWidth = 1200;
    }
    return acc + containerWidth + 16;
  }, 0) + (windowWidth * 0.06);

  // Aplicamos una función de suavizado al scrollYProgress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  //`stiffness`: Controla la rigidez del resorte. Valores más altos hacen que el movimiento sea más rápido pero también más brusco.`damping`: Controla la amortiguación. Valores más altos reducen las oscilaciones pero pueden hacer el movimiento más lento.`restDelta`: Define la diferencia mínima del valor objetivo para considerar que el resorte está en reposo.

  // Usamos smoothProgress en lugar de scrollYProgress
  const x = useTransform(smoothProgress, [0, 1], ["0px", `-${totalWidth - windowWidth}px`]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 pt-[3vh] pb-[5vh] px-[3%]">
          {cards.map((card, index) => (
            <Card 
              card={card} 
              key={card.id} 
              windowHeight={windowHeight} 
              windowWidth={windowWidth}
              isLastCard={index === cards.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    url: string;
    title: string;
    id: number;
    width: number;
    height: number;
  };
  windowHeight: number;
  windowWidth: number;
  isLastCard: boolean;
}

const Card = ({ card, windowHeight, windowWidth, isLastCard }: CardProps) => {
  const aspectRatio = card.width / card.height;
  const cardHeight = windowHeight * 0.92;
  let containerWidth, containerHeight;

  if (isLastCard) {
    containerWidth = 1200;
    containerHeight = 1200 / aspectRatio;
  } else if (aspectRatio > 1) {
    containerWidth = Math.min(700, windowWidth * 0.8);
    containerHeight = containerWidth / aspectRatio;
  } else {
    containerHeight = cardHeight;
    containerWidth = cardHeight * aspectRatio;
  }

  return (
    <div
      key={card.id}
      className="group relative overflow-hidden bg-neutral-200 flex justify-center items-center"
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      }}
    >
      <Image
        src={card.url}
        alt={`Image ${card.id}`}
        width={card.width}
        height={card.height}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        quality={100}
        unoptimized
      />
    </div>
  );
};

export default Example;

const cards = [
  {
    "id": 1,
    "url": "/images/carrusel-home/H01.jpeg",
    "title": "Imagen 1",
    "link": "#",
    "width": 1332,
    "height": 2000
  },
  {
    "id": 2,
    "url": "/images/carrusel-home/H02.png",
    "title": "Imagen 2",
    "link": "#",
    "width": 1201,
    "height": 1500
  },
  {
    "id": 3,
    "url": "/images/carrusel-home/H03.jpg",
    "title": "Imagen 3",
    "link": "#",
    "width": 1058,
    "height": 1500
  },
  {
    "id": 4,
    "url": "/images/carrusel-home/H05.jpeg",
    "title": "Imagen 4",
    "link": "#",
    "width": 1594,
    "height": 2000
  },
  {
    "id": 5,
    "url": "/images/carrusel-home/H06.jpg",
    "title": "Imagen 5",
    "link": "#",
    "width": 1500,
    "height": 2000
  },
  {
    "id": 6,
    "url": "/images/carrusel-home/H07.png",
    "title": "Imagen 6",
    "link": "#",
    "width": 1600,
    "height": 2000
  },
  {
    "id": 7,
    "url": "/images/carrusel-home/H08.jpg",
    "title": "Imagen 7",
    "link": "#",
    "width": 1272,
    "height": 2000
  },
  {
    "id": 8,
    "url": "/images/carrusel-home/H09.jpg",
    "title": "Imagen 8",
    "link": "#",
    "width": 1429,
    "height": 2000
  },
  {
    "id": 9,
    "url": "/images/carrusel-home/H10.jpg",
    "title": "Imagen 9",
    "link": "#",
    "width": 1429,
    "height": 2000
  },
  {
    "id": 10,
    "url": "/images/carrusel-home/H11.jpg",
    "title": "Imagen 10",
    "link": "#",
    "width": 1324,
    "height": 2000
  },
  {
    "id": 11,
    "url": "/images/carrusel-home/H12.jpg",
    "title": "Imagen 11",
    "link": "#",
    "width": 1337,
    "height": 2000
  },
  {
    "id": 12,
    "url": "/images/carrusel-home/H13.png",
    "title": "Imagen 12",
    "link": "#",
    "width": 1546,
    "height": 2000
  },
  {
    "id": 13,
    "url": "/images/carrusel-home/H14.jpeg",
    "title": "Imagen 13",
    "link": "#",
    "width": 1429,
    "height": 2000
  },
  {
    "id": 14,
    "url": "/images/carrusel-home/H15.jpg",
    "title": "Imagen 14",
    "link": "#",
    "width": 2000,
    "height": 2000
  },
  {
    "id": 15,
    "url": "/images/carrusel-home/H16.jpg",
    "title": "Imagen 15",
    "link": "#",
    "width": 2000,
    "height": 1545
  },
  {
    "id": 16,
    "url": "/images/carrusel-home/H17.jpeg",
    "title": "Imagen 16",
    "link": "#",
    "width": 1579,
    "height": 2000
  },
  {
    "id": 17,
    "url": "/images/carrusel-home/H18.jpeg",
    "title": "Imagen 17",
    "link": "#",
    "width": 1600,
    "height": 2000
  },
  {
    "id": 18,
    "url": "/images/carrusel-home/H19.jpg",
    "title": "Imagen 18",
    "link": "#",
    "width": 2000,
    "height": 2000
  },
  {
    "id": 19,
    "url": "/images/carrusel-home/H20.jpg",
    "title": "Imagen 19",
    "link": "#",
    "width": 1429,
    "height": 2000
  },
  {
    "id": 20,
    "url": "/images/carrusel-home/H21.png",
    "title": "Imagen 20",
    "link": "#",
    "width": 1461,
    "height": 2000
  },
  {
    "id": 21,
    "url": "/images/carrusel-home/H22.png",
    "title": "Imagen 21",
    "link": "#",
    "width": 1349,
    "height": 2000
  },
  {
    "id": 22,
    "url": "/images/carrusel-home/H23.png",
    "title": "Imagen 22",
    "link": "#",
    "width": 2000,
    "height": 2000
  },
  {
    "id": 23,
    "url": "/images/carrusel-home/H24.jpg",
    "title": "Imagen 23",
    "link": "#",
    "width": 2000,
    "height": 2000
  },
  {
    "id": 24,
    "url": "/images/carrusel-home/H25.jpeg",
    "title": "Imagen 24",
    "link": "#",
    "width": 1990,
    "height": 2000
  },
  {
    "id": 25,
    "url": "/images/carrusel-home/H26.jpeg",
    "title": "Imagen 25",
    "link": "#",
    "width": 2000,
    "height": 2000
  },
  {
    "id": 26,
    "url": "/images/carrusel-home/H27.jpg",
    "title": "Imagen 26",
    "link": "#",
    "width": 1856,
    "height": 2000
  },
  {
    "id": 27,
    "url": "/images/carrusel-home/H28.JPG",
    "title": "Imagen 27",
    "link": "#",
    "width": 2000,
    "height": 2000
  },
  {
    "id": 28,
    "url": "/images/carrusel-home/H29.png",
    "title": "Imagen 28",
    "link": "#",
    "width": 1480,
    "height": 1850
  },
  {
    "id": 29,
    "url": "/images/carrusel-home/ULTIMA.png",
    "title": "Imagen 29",
    "link": "#",
    "width": 1400,
    "height": 577
  }
];