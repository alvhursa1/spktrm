'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HderTxtHome() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up"
    if (direction === "down" && latest > 100 && !hidden) setHidden(true)
    if (direction === "up" && hidden) setHidden(false)
    setLastScrollY(latest)
  })

  useEffect(() => {
    setHidden(false)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white w-screen"
      initial={{ opacity: 0, y: -50 }}
      animate={hidden ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-[5%]">
        <div className="flex justify-between items-center h-16">
          <div className="w-1/3">
            <Link href="#" className="text-left font-broone text-[1.25rem] font-normal">
              STORE
            </Link>
          </div>
          <div className="w-1/3 text-center">
            <Link href="/menu" className="font-broone text-[1.25rem] font-normal">
              MENU
            </Link>
          </div>
          <div className="w-1/3 text-right">
            <Link href="/artists" className="font-broone text-[1.25rem] font-normal">
              ARTISTS
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}