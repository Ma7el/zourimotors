import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'زوري موتورز - بروجيكتر شعارات أبواب السيارات الفاخرة',
  description: 'أنظمة بروجيكتر سيارات مميزة للسائق العصري',
=======
  title: 'زوري موتورز - مشاريع شعارات أبواب السيارات الفاخرة',
  description: 'أنظمة إسقاط سيارات مميزة للسائق العصري',
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
