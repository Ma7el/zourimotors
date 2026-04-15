'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Shield, Truck, Award, Star, ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const PRODUCTS = [
  { id: 1, name: 'مرسيدس بنز', brand: 'Mercedes-Benz', price: '90 دينار', image: '/products/mercedes-benz.png' },
  { id: 2, name: 'بي إم دبليو', brand: 'BMW', price: '90 دينار', image: '/products/bmw.png' },
  { id: 3, name: 'أودي', brand: 'Audi', price: '90 دينار', image: '/products/audi.png' },
  { id: 4, name: 'تويوتا', brand: 'Toyota', price: '90 دينار', image: '/products/toyota.png' },
  { id: 5, name: 'فولكسفاغن', brand: 'Volkswagen', price: '90 دينار', image: '/products/volkswagen.png' },
  { id: 6, name: 'كيا 2', brand: 'Kia 2', price: '90 دينار', image: '/products/kia2.png' },
  { id: 7, name: 'مرسيدس بنز 2', brand: 'Mercedes-Benz 2', price: '90 دينار', image: '/products/merceds-benz2.png' },
  { id: 8, name: 'شيفروليه', brand: 'Chevrolet', price: '90 دينار', image: '/products/cheverolet.png' },
  { id: 9, name: 'ميني كوبر', brand: 'Mini Cooper', price: '90 دينار', image: '/products/mini-cooper.png' },
  { id: 10, name: 'جينيسيس', brand: 'Genesis', price: '90 دينار', image: '/products/genisis.png' },
  { id: 11, name: 'دودج', brand: 'Dodge', price: '90 دينار', image: '/products/dodge.png' },
  { id: 12, name: 'سامسونج', brand: 'Samsung', price: '90 دينار', image: '/products/samsung.png' },
  { id: 13, name: 'هيونداي', brand: 'Hyundai', price: '90 دينار', image: '/products/hyundai.png' },
  { id: 14, name: 'كيا', brand: 'Kia', price: '90 دينار', image: '/products/kia.png' },
  { id: 15, name: 'لكزس', brand: 'Lexus', price: '90 دينار', image: '/products/lexus.png' },
  { id: 16, name: 'شعار القيادة العامة', brand: 'القيادة العامة', price: '90 دينار', image: '/products/haftar.png' },
  { id: 17, name: 'نيسان', brand: 'Nissan', price: '90 دينار', image: '/products/nissan.png' },
  { id: 18, name: 'ميتسوبيشي', brand: 'Mitsubishi', price: '90 دينار', image: '/products/mitsubishi.png' },
  { id: 19, name: 'كاديلاك', brand: 'Cadillac', price: '90 دينار', image: '/products/cadillac.png' },
  { id: 20, name: 'بورش', brand: 'Porsche', price: '90 دينار', image: '/products/porsche.png' },
  { id: 21, name: 'إم جي', brand: 'MG', price: '90 دينار', image: '/products/mg.png' },
  { id: 22, name: 'جيب', brand: 'Jeep', price: '90 دينار', image: '/products/jeep.png' },
  { id: 23, name: 'فورد', brand: 'Ford', price: '90 دينار', image: '/products/ford.png' },
]

export default function Home() {
  const { addToCart, cart, clearCart } = useCart()
  const router = useRouter()

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
    })
  }

  const handleBuyNow = (product: typeof PRODUCTS[0]) => {
    clearCart()
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
    })
    router.push('/checkout')
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
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <Image
                src="/zourilogo.png"
                alt="ZOURI MOTORS Logo"
                fill
                className="object-contain"
                priority
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
              بسيط ودقيق ومصمم للليل. بروجيكتر شعارات أبواب السيارات المميزة.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-16">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-white">
                <Shield className="h-4 w-4 text-white" />
                <span>ضمان 6 أشهر</span>
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
      <section id="products" className="pb-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 mt-12 flex justify-center">
            <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-[500px]">
              <Image
                src="/projectors.png"
                alt="Projectors Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              المتجر
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-500">
              {PRODUCTS.length} منتج مختار بعناية لسيارتك
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((product) => {
              const inCart = isInCart(product.id)
              return (
                <article
                  key={product.id}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-900 bg-black/40 overflow-hidden"
                >
                  <div className="relative w-full h-48 bg-neutral-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  <div className="px-4 py-5 sm:px-5 sm:py-6">
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-white">{product.name}</h3>
                      <p className="mt-1 text-xs text-neutral-400 mb-2">{product.brand}</p>
                      <p className="mt-2 text-xs text-neutral-500">
                        بروجيكتر شعار عالي الوضوح للأبواب.
                      </p>
                    </div>
                    <div className="mt-auto flex flex-col gap-3">
                      <span className="text-sm font-medium text-white">{product.price}</span>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleBuyNow(product)}
                          className="w-full inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2.5 text-sm font-bold transition-colors hover:bg-gray-200"
                        >
                          اشتري الآن
                        </button>
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={inCart}
                          className={`w-full inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${inCart
                            ? 'bg-neutral-800 text-neutral-500 border-neutral-800 cursor-not-allowed'
                            : 'border-white text-white hover:bg-white hover:text-black'
                            }`}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          {inCart ? 'في السلة' : 'أضف للسلة'}
                        </button>
                      </div>
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
