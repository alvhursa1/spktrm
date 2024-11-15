'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function MenuPage() {
    // Estado para controlar qué elemento del menú está siendo hover
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        // Función para manejar la tecla Escape y volver a la página principal
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                router.push('/')
            }
        }

        // Agregar el event listener cuando el componente se monta
        document.addEventListener('keydown', handleEscapeKey)

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [router])

    // Función para renderizar cada elemento del menú
    const renderMenuItem = (title: string, number: string, href: string, imageKey: string, className: string) => (
        <div className={`${className} relative`}>
            <div
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredItem(imageKey)}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <Link href={href} className="text-[1.5rem] font-broone font-normal">
                    {title}
                </Link>
                {number && <p className="text-[1rem] font-marcellus font-light mt-1.5 text-center">{number}</p>}
                <AnimatePresence>
                    {hoveredItem === imageKey && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="absolute z-50"
                            style={{
                                // Posicionamiento de la imagen según el elemento del menú
                                left: imageKey === 'home' ? '120%' : (imageKey === 'artifact' || imageKey === 'artists' ? 'auto' : '120%'),
                                right: imageKey === 'artifact' || imageKey === 'artists' ? '120%' : 'auto',
                                top: imageKey === 'home' ? '-200%' : (imageKey === 'contact' || imageKey === 'artifact' ? '-200%' : '50%'),
                                transform: imageKey === 'home' ? 'translateY(150%)' : (imageKey === 'contact' || imageKey === 'artifact' ? 'translateX(100%)' : 'translateX(200%)'),
                            }}
                        >
                            <div className="relative w-[150px] h-[200px]">
                                <Image 
                                    src={`/images/menu-${imageKey}.png`} 
                                    alt={title} 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    quality={100}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )

    return (
        // Contenedor principal del menú
        <div className="h-screen w-screen bg-black text-white p-[3%] overflow-hidden">
            {/* Grid para organizar los elementos del menú */}
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full w-full relative">
                {/* Elementos del menú */}
                {renderMenuItem("ABOUT US", "01", "/about-us", "about", "flex flex-col items-start justify-start")}
                {renderMenuItem("WORK", "02", "/work", "work", "flex flex-col items-center justify-start")}
                {renderMenuItem("ARTISTS", "03", "/artists", "artists", "flex flex-col items-end justify-start")}
                
                {/* Botón de regreso */}
                <div className="flex items-center justify-start">
                    <Link href="/" className="text-[1.5rem] font-broone font-light">
                BACK
                    </Link>
                </div>
                
                {/* Elemento HOME */}
                {renderMenuItem("HOME", "", "/", "home", "flex items-center justify-center")}
                
                {/* Espacios vacíos en el grid */}
                <div></div>
                <div></div>
                
                {/* Elementos finales del menú */}
                {renderMenuItem("CONTACT", "05", "/contact", "contact", "flex flex-col items-center justify-end")}
                {renderMenuItem("ARTIFACT", "06", "#", "artifact", "flex flex-col items-end justify-end")}
            </div>
        </div>
    )
}