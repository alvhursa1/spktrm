'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AboutUsButton() {
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isHovered) {
            timer = setTimeout(() => {
                setIsHovered(false)
            }, 2000)
        }
        return () => clearTimeout(timer)
    }, [isHovered])

    const handleStoreClick = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            console.log("Store button clicked in mobile view")
        }
    }

    return (
        <Link href="/about">
        <div className="flex flex-col justify-center items-center h-screen -mt-64 -mb-44">
            {/* Envolvemos todo el botón en Link para que funcione el redireccionamiento */}

                <div
                    className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleStoreClick}
                >
                    {/* Círculo pequeño que aparece al hacer hover */}
                    <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
                            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                    />
                </div>

            
            {/* Texto 'Our artists' siempre visible */}

                <span
                    className="block mt-2 text-center whitespace-nowrap text-[1.125rem] font-broone transition-all duration-500 ease-in-out opacity-100 translate-y-0"
                >
                    ABOUT US
                </span>

        </div>
        </Link>
    )
}
