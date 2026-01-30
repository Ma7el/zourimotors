'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Shield, Truck, Award, Star, ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
<<<<<<< HEAD
import Image from 'next/image'
=======
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5

const PRODUCTS = [
  {
    id: 1,
    name: 'مرسيدس بنز',
    brand: 'Mercedes-Benz',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/mercedes-benz.png',
=======
    image: '/zourimotors/products/mercedes-benz.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 2,
    name: 'بي إم دبليو',
    brand: 'BMW',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/bmw.png',
=======
    image: '/zourimotors/products/bmw.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 3,
    name: 'أودي',
    brand: 'Audi',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/audi.png',
=======
    image: '/zourimotors/products/audi.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 4,
    name: 'تويوتا',
    brand: 'Toyota',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/toyota.png',
=======
    image: '/zourimotors/products/toyota.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 5,
    name: 'فولكسفاغن',
    brand: 'Volkswagen',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/volkswagen.png',
=======
    image: '/zourimotors/products/volkswagen.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 6,
    name: 'كيا 2',
    brand: 'Kia 2',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/kia2.png',
=======
    image: '/zourimotors/products/kia2.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 7,
    name: 'مرسيدس بنز 2',
    brand: 'Mercedes-Benz 2',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/merceds-benz2.png',
=======
    image: '/zourimotors/products/merceds-benz2.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 8,
    name: 'شيفروليه',
    brand: 'Chevrolet',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/cheverolet.png',
=======
    image: '/zourimotors/products/cheverolet.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 9,
    name: 'ميني كوبر',
    brand: 'Mini Cooper',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/mini-cooper.png',
=======
    image: '/zourimotors/products/mini-cooper.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 10,
    name: 'جينيسيس',
    brand: 'Genesis',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/genisis.png',
=======
    image: '/zourimotors/products/genisis.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 11,
    name: 'دودج',
    brand: 'Dodge',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/dodge.png',
=======
    image: '/zourimotors/products/dodge.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 12,
    name: 'سامسونج',
    brand: 'Samsung',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/samsung.png',
=======
    image: '/zourimotors/products/samsung.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 13,
    name: 'هنداي',
<<<<<<< HEAD
    brand: 'Hundai',
    price: '99 دينار',
    image: '/products/hundai.png',
=======
    brand: 'Hyundai',
    price: '99 دينار',
    image: '/zourimotors/products/hyundai.png',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
  },
  {
    id: 14,
    name: 'كيا',
    brand: 'Kia',
    price: '99 دينار',
<<<<<<< HEAD
    image: '/products/kia.png',
  },
  {
    id: 15,
=======
    image: '/zourimotors/products/kia.png',
  },
  {
    id: 15,
    name: 'لكسوس',
    brand: 'Lexus',
    price: '99 دينار',
    image: '/zourimotors/products/lexus.png',
  },
  {
    id: 16,
    name: 'هنداي',
    brand: 'Hundai',
    price: '99 دينار',
    image: '/zourimotors/products/hundai.png',
  },
  {
    id: 17,
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
    name: 'شعار القيادة العامة',
    brand: 'القيادة العامة',
    price: '99 دينار',
    image: '/zourimotors/products/haftar.png',
  },
]

export default function Home() {
  const { addToCart, cart } = useCart()

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
    })
  }

  const isInCart = (productId: number) => {
    return cart.some((item) => item.id === productId)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Brand Logo Section */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
<<<<<<< HEAD
              <Image
                src="/zourilogo.png"
                alt="ZOURI MOTORS Logo"
                fill
                className="object-contain"
                priority
=======
              <img
                src="/zourimotors/zourilogo.png"
                alt="ZOURI MOTORS Logo"
                className="w-full h-full object-contain"
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
              />
            </div>
          </div>

          <header className="mb-12 text-center">
            <p className="text-xs tracking-[0.35em] text-neutral-500 uppercase mb-4">
              السيارات الفاخرة
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase leading-tight">
              ZOURI MOTORS
            </h1>
            <p className="mt-5 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
           بسيط ودقيق ومصمم للليل. بروجيكتر شعارات أبواب السيارات المميزة .
            </p>
          </header>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-16">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-white">
                <Shield className="h-4 w-4 text-white" />
                <span>ضمان 6 اشهر</span>
              </div>
              <p className="text-xs text-neutral-500">مغطى ومحمي</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-white">
                <Truck className="h-4 w-4 text-white" />
                <span>توصيل سريع</span>
              </div>
              <p className="text-xs text-neutral-500">في جميع أنحاء ليبيا</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-white">
                <Award className="h-4 w-4 text-white" />
                <span>بناء مميز</span>
              </div>
              <p className="text-xs text-neutral-500">تشطيب هندسي دقيق</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-white">
                <Star className="h-4 w-4 text-white" />
                <span>4.9 / 5</span>
              </div>
              <p className="text-xs text-neutral-500">تقييم العملاء</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section
        id="products"
        className="pb-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                المتجر
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                {PRODUCTS.length} منتج مختار بعناية لسيارتك
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((product) => {
              const inCart = isInCart(product.id)
              return (
                <article
                  key={product.id}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-900 bg-black/40 overflow-hidden"
                >
                  {/* Product Image Container */}
<<<<<<< HEAD
                  <div className="relative w-full h-48 bg-neutral-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      onError={(e) => {
                        // Fallback if image fails to load
=======
                  <div className="relative w-full h-48 bg-neutral-900 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain max-w-full max-h-full"
                      onError={(e) => {
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `
<<<<<<< HEAD
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="text-center p-4">
                                <div class="w-24 h-24 mx-auto mb-3 border-2 border-dashed border-neutral-700 rounded-lg flex items-center justify-center">
                                  <span class="text-neutral-600 text-xs text-center px-2">${product.brand}</span>
                                </div>
                                <p class="text-xs text-neutral-500">صورة المنتج</p>
                              </div>
=======
                            <div class="text-center p-4">
                              <div class="w-24 h-24 mx-auto mb-3 border-2 border-dashed border-neutral-700 rounded-lg flex items-center justify-center">
                                <span class="text-neutral-600 text-xs text-center px-2">${product.brand}</span>
                              </div>
                              <p class="text-xs text-neutral-500">صورة المنتج</p>
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
                            </div>
                          `
                        }
                      }}
                    />
                  </div>

                  <div className="px-4 py-5 sm:px-5 sm:py-6">
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-white">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400 mb-2">
                        {product.brand}
                      </p>
                      <p className="mt-2 text-xs text-neutral-500">
                        بروجيكتر شعار عالي الوضوح للأبواب.
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-white">
                        {product.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={inCart}
                        className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                          inCart
                            ? 'bg-neutral-700 text-neutral-400 border-neutral-700 cursor-not-allowed'
                            : 'text-black bg-white hover:bg-black hover:text-white'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <ShoppingCart className="w-3 h-3" />
                            في السلة
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3 h-3" />
                            أضف للسلة
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
