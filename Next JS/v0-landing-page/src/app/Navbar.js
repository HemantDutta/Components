'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/30 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <NavLink href="/about">FEATURES</NavLink>
                        <BlueDot />
                        <NavLink href="/services">PRICING</NavLink>
                    </div>
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white text-2xl font-bold">XORA</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NavLink href="/portfolio">FAQ</NavLink>
                        <BlueDot />
                        <NavLink href="/contact">DOWNLOAD</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function NavLink({ href, children }) {
    return (
        <Link href={href} className="text-gray-100 hover:text-white transition-colors duration-300">
            {children}
        </Link>
    )
}

function BlueDot() {
    return (
        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
    )
}