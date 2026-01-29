'use client'

import { ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { getTotalItems } = useCart()
  const cartCount = getTotalItems()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg' : 'glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-[0.35em] uppercase text-white">
              ZOURI&nbsp;MOTORS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              المنتجات
            </a>
            <a
              href="#features"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              المميزات
            </a>
            <a
              href="#about"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              من نحن
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              اتصل بنا
            </a>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link
              href="/checkout"
              className="relative p-2 text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-110"
              aria-label="عربة التسوق"
            >
              <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
