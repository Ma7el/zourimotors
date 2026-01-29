import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: 'زوري موتورز - بروجيكتر شعارات أبواب السيارات الفاخرة',
  description: 'أنظمة بروجيكتر سيارات مميزة للسائق العصري',
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
