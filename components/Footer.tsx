import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-[0.35em] uppercase text-white mb-4">
              ZOURI MOTORS
            </h2>
            <p className="text-neutral-400 text-sm max-w-md">
              مشاريع شعارات أبواب السيارات المميزة التي تحول سيارتك إلى بيان من الفخامة والأناقة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  المنتجات
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  المميزات
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-neutral-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="إنستغرام"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="تويتر"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="فيسبوك"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} زوري. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
