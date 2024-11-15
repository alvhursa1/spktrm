'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

type LetterPaths = {
  [key: string]: string;
}

/* eslint-disable react-hooks/rules-of-hooks */
const useLetterProgresses = (scrollYProgress: MotionValue<number>, letters: string[]) => {
  return letters.map((_, index) => {
    const progress = useTransform(
      scrollYProgress,
      [index / letters.length, (index + 1) / letters.length],
      [0, 1]
    );
    const fill = useTransform(progress, [0.9, 1], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']);
    return { progress, fill };
  });
}
/* eslint-enable react-hooks/rules-of-hooks */

export default function AnimatedLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isComplete, setIsComplete] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const letters = ['A', 'R', 'T', 'I', 'F', 'A2', 'C', 'T2']
  const letterPaths: LetterPaths = {
    A: "M682.4,295.5c-2.1-6.8-5.4-9.4-12.7-9.2-25,.4-49.9.1-74.9.2-10.5,0-10.7.3-7.4,10.7,6.4,20.3,12.7,40.6,19.3,60.8,1.7,5.4,1.9,10.3.2,15.7,0,0-116.3,377-116.9,378.3l-1.4,2.4c-.4.6-1.2,1.4-1.9,2-.4.4-1,.6-1.4,1-1.2,1-4.3,1.7-6.3,1.7s-2,0-2,0c-.6,1,154.8-.3,148,0-6,.2-30.5-23.2-37.7-35.7-23.1-40.4-25.5-83.9-19.8-128.7.8-6.2,4.5-7.4,10.1-7.3,29.2.2,58.5,0,87.7,0s12.8,0,16.7,12.6c15.4,50.5,31.9,103.8,48,154l94-3s-121.8-391.2-141.6-455.5h0ZM660.9,562.5c-25.8-.4-51.5-.2-77.3-.1-5.4,0-8.9-.4-6.7-7.5,14.8-47,29.4-94,44.1-141,.2-.5.7-.9,2.1-2.8,4.7,15.2,9,29.2,13.4,43.2,10.3,33,20.4,66,30.9,98.9,2.2,6.8,1.8,9.5-6.4,9.4h0Z",
    R: "M838,763h67c8.1.2,10.7-2.5,10.6-10.7-.4-30.9-.2-61.9-.2-92.8s.1-46,0-69c0-5.7,1.7-8.1,7.7-8.2,15.6-.3,15.6-.6,18.7,15,.5,2.5,1,5,1.6,7.5,15.9,66,52.4,116.2,114,146.6,16.2,8,33.6,12.2,52.8,15.5h37.9v-17.5c0-2,0-50.2,0-72.4,0-11.7,0-11.7-11.5-12.3-7.1-.4-14.2-1-21.2-1.2-26.6-.8-52.5-5.4-77.3-15-31.1-12.1-57-30.4-70.7-62.4-2.5-5.7-2.3-8.9,4.6-11.3,29.3-10.3,51.3-29.7,66.9-56.2,2.5-4.2,5.4-5.6,10.1-6.1,57.7-6.8,94.9-46.6,97.8-104.9,0,0,1.3-22.6-5.9-46.4-5.4-17.7-19.2-33.8-22.2-37.2-19.7-22.5-44.8-36.1-74.3-36.6-71.2-1.3-142.5-.5-213.7-.6-6.1,0-8.1,2.7-7.9,8.2,0,2.6,0,423.1,0,443.1h-3.8c0,0,7,35.9,7,35.9l7,2s-1.3-4.5-2.2-8.4c-.5-2.4,1.2-4.6,3.7-4.6h3.6ZM1062.1,483.6c-7.6,4.2-15.9,6-24.5,6-18.7,0-37.4,0-56.1,0h0c-19.3,0-38.5-.1-57.8.1-6.3,0-8.4-2.2-8.3-8.4.2-31.7.2-63.5,0-95.2,0-6,2.1-7.9,8-7.9,34.6.2,69.1-.2,103.7.2,24.2.3,44.4,8.2,55.4,31.9,12.4,26.8,3.3,60.3-20.3,73.2h0Z",
    T: "M1478.6,400.2c-46-.6-85.1-33.5-92.5-78.6-1.3-8-4.6-10.2-12.2-10-22.4.7-19.1-2.6-19.1,18.9,0,139.3,0,278.7,0,418s-4.4,13-13.1,13c-22.7,0-45.4,0-68.1,0-11.8,0-11.8,0-11.8-11.8,0-95.9-.2-380.8.1-427.4,0-8.1-2.2-11-10.6-10.7-15.9.5-16,0-19.4,15.2-8.7,38.2-41.2,67.1-79.3,72.7-2.6.4-5.6,2.6-5.6,5.6l-.2,3.2s-18.3-53.9-18.5-71.7c-.1-11.3-.3-22.7-.3-34.5s1-15,12-15c84.3,0,337.5-1.1,337.5-1.1,13,0,13.2.9,13.2,14.1,0,29.5,0,71,0,100.5l-12.2-.3h0Z",
    I: "M1584,759h11-.8c-4.3,0-8.2-2.5-9.8-6.5-.3-.7-.4-2.3-.4-2.5v-450c0-11.9-.5-14-11-14h-90c4.6.8,7.9,4.8,7.9,9.4v452.6c.1-25.8.1,2,.1,2,0,.2-.1,1.8-.4,2.5-1.6,4-5.5,6.5-9.8,6.5h-.8,104M1490.9,583.4v-6.5,6.5Z",
    F: "M644.3,770.3c.1-8.4-2.4-11.6-10.3-11.3-6,.2-220.5.3-252,0-7.4,0-9.9,3.2-9.9,10.7.2,151.8.2,303.6,0,455.5,0,7.5,2.5,9.8,9.9,9.7,23.3-.4,46.5-.1,69.8-.1,13.1,0,13.1,0,13.1-13.2,0-82.3,0-164.6,0-246.9,0-10.6,1.3-11.7,11.9-10.5,19.1,2.1,34.9,11.1,49.5,22.9,19.7,15.9,37.5,33.8,55.5,51.6,1.5,1.5,3,4,5.5,3.2,2.8-.9,2-3.8,2-5.9,0-53.9,0-107.8,0-161.8,0-2.1.9-5-2-5.9-2.1-.6-3.4,1.6-4.8,3-10.9,10.8-21.8,21.6-32.6,32.5-21.2,21.3-45.1,36.1-76.7,34-6.2-.4-8.5-2.5-8.5-8.6.1-45.4.1-90.8,0-136.2,0-5.8,2.2-8,8.1-8,19.3.2,38.6.2,57.9,0,5.5,0,7.8,1.6,8.6,7.5,6.4,46.2,47.1,81,94,81.2,7.9,0,11-2.1,10.9-10.5v-92.8h0Z",
    A2: "M971.5,1221c-27.3-87.7-147.5-474-147.5-474h-96l25.4,78.3c2,6,1.9,11.4,0,17.3-39,125.7-78,251.4-116.9,377.1-3.3,10.8-3.1,11.2,7.8,11.2,37.5,0,74.9,0,112.4,0,2.9,0,7,1.6,8.3-2.2,1-2.9-2.6-4.8-4.5-6.6-13.5-12.8-25.5-26.5-33.1-43.8-16.1-36.8-18.4-75-13.1-114.2.8-6.2,3.6-8.6,10.1-8.5,29.2.3,58.5.1,87.7.1,8.7,0,14.4,4.1,16.9,12.3,15.8,51.2,31.7,102.4,47.3,153.7,2.1,6.8,5.2,9.6,12.5,9.5,25.2-.4,50.5-.1,75.8-.2,9.3,0,9.8-.8,7-9.9h0ZM810.6,1033.7c-26.6-.2-53.3,0-79.9,0-4.6,0-8-.6-6.2-6.7,15-48.1,29.9-96.2,44.8-144.4.5,0,1.1,0,1.7,0,15,48.1,29.9,96.2,45,144.2,1.8,5.6-.2,6.9-5.5,6.8Z",
    C: "M1109.3,767.5c-58.9,24.1-95.6,67.3-114.8,124.8-22.9,68.4-23.2,138-.6,206.6,18.8,57,53.4,102,110,126.4,36.8,15.9,74.9,22.1,114.3,8.7,29.8-10.2,52.3-28.1,62.1-59.2.9-2.9,2.7-4.9,5.1-6.5,39.8-26.9,60-66.1,70.1-111.7,1.6-7.2-.3-9.7-7.8-9.6-22.7.3-45.4,0-68.1.1-8.9,0-13.4,4.3-13.4,13,0,27.2,0,54.5-.2,81.7-.2,15.6-2.2,17.9-16.9,23.3-28,10.4-56,10.4-84,0-42-15.7-66.5-47.8-81.6-88.3-15.9-42.6-17.6-87.1-15.1-131.8,1.8-31.5,7.2-62.6,19.5-91.9,10.7-25.5,24.8-48.5,49.1-63.6,32.9-20.4,69-9.3,85.1,25.9,6.7,14.8,9.1,30.4,8.5,46.5-.3,8.1,2.8,10.8,10.9,10.7,28.1-.4,56.2,0,84.3-.2,21.4,0,22.5,2.8,11.2-19-35.1-67.8-106.1-105.6-181.9-96.7,0,0-6.9,1-9.2,1.3-14,2-22,4-25,5-2.8.9-11.3,4.4-11.3,4.4h0Z",
    T2:  "M1348,762c5.2,1,5.3,6.6,5.3,10.5-.4,30.4,0,60.7-.3,91.1,0,7.4,2.4,9.9,9.8,9.9,44,.3,83.8-30.8,93.6-73.7,3.4-15.1,3.5-14.7,19.4-15.2,8.3-.2,10.6,2.6,10.6,10.7-.3,46.5-.2,331.5-.1,427.4,0,11.8,0,11.8,11.8,11.8,22.7,0,45.4,0,68.1,0,8.7,0,13-4.3,13.1-13,0-139.3-.2-419.6,0-430.3,0-7.8,2.7-6.1,19.2-6.6,7.6-.2,10.9,2,12.2,10,7.5,45.1,46.6,78,92.5,78.6,11.6.2,12.1-.3,12.2-11.7,0-29.5,0-59,0-88.5,0-13.2-.2-14.1-13.2-14.1h-337.2c0,0-.6,0-.6,0h-.3s-.5,0-.5,0h-.4s-.4,0-.4,0h-.5c0,0-.4-.1-.4-.1h-.4c0,0-.3-.1-.3-.1h-.2c0,0-.4-.2-.4-.2h-.3c0-.1-.3-.2-.3-.2h0s0,0,0,0h0s0,0,0,0h0s-.2-.2-.2-.2h-.1c0,0-.2-.2-.2-.2h-.1c0,0,0-.1,0-.1h0s-.1-.1-.1-.1h-.1c0,0-.1-.2-.1-.2h-.2c0-.1-.2-.3-.2-.3l-.3-.3-.2-.3-.2-.2-.2-.2-.4-.8-.3-.7-.4-1.6v-.5c0,0-.2-.6-.2-.6v-.8c0,0-.1-.9-.1-.9h-27.3s0,12,0,12h20"
  }

  useEffect(() => {
    const unsubscribeScrollYProgress = scrollYProgress.onChange((latest) => {
      if (latest >= 0.99 && !isComplete) {
        setIsComplete(true)
      }
    })

    return () => {
      unsubscribeScrollYProgress()
    }
  }, [scrollYProgress, isComplete])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsComplete(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const letterProgresses = useLetterProgresses(scrollYProgress, letters);

  return (
    <div ref={containerRef} className="h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1956 1609"
          className="w-full max-w-[72rem] align-middle justify-center mt-10"
        >
          {letters.map((letter, index) => (
            <motion.path
              key={letter}
              d={letterPaths[letter as keyof typeof letterPaths]}
              fill="none"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0, fill: 'rgba(255, 255, 255, 0)' }}
              style={{ 
                pathLength: letterProgresses[index].progress,
                fill: letterProgresses[index].fill
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}