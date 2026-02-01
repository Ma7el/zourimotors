"use client";

import React from "react";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, getCartSummary } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-white mb-10 transition self-start"
        >
          <ArrowLeft size={20} /> رجوع
        </Link>
        <h1 className="text-3xl font-bold mb-4">السلة فارغة</h1>
        <p className="text-gray-400 mb-8 text-center">
          لم تقم بإضافة أي منتجات إلى السلة بعد.
        </p>
        <Link
          href="/#products"
          className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition"
        >
          تصفح المنتجات
        </Link>
      </div>
    );
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const productDetails = cart
    .map(
      (item) =>
        `${item.name} (${item.brand}) - الكمية: ${item.quantity} - السعر: ${item.price}`
    )
    .join("\n");
  const cartSummary = getCartSummary();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto pt-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={20} /> رجوع
        </Link>

        <h1 className="text-2xl font-bold mb-1 uppercase tracking-tight italic">
          إتمام الطلب
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          زوري موتورز • الدفع عند الاستلام (COD)
        </p>

        {/* Cart summary */}
        <div className="mb-8 border border-neutral-800 rounded-lg p-5">
          <h2 className="text-sm font-semibold mb-3 text-neutral-300">
            المنتجات المختارة ({totalItems} منتج)
          </h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-white">
                  {item.name} × {item.quantity}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 border border-neutral-700 rounded">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-neutral-800"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-xs">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-neutral-800"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 hover:bg-neutral-800 rounded"
                    aria-label="إزالة"
                  >
                    <Trash2 className="w-3 h-3 text-neutral-400" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ DELIVERY FORM — now posts to backend */}
        <form
          action="/api/order"
          method="POST"
          className="border border-neutral-800 rounded-lg p-6"
        >
          <input type="hidden" name="payment_method" value="الدفع عند الاستلام (COD)" />
          <input type="hidden" name="total_items" value={totalItems.toString()} />
          <input type="hidden" name="products" value={productDetails} />
          <input type="hidden" name="cart_summary" value={cartSummary} />

          <div className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">
                الاسم الكامل
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-gray-800 focus:border-white outline-none py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">
                رقم الهاتف
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="091-XXXXXXX"
                required
                className="w-full bg-transparent border-b border-gray-800 focus:border-white outline-none py-2 text-white placeholder-gray-600"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">
                المدينة
              </label>
              <select
                name="city"
                required
                className="w-full bg-black border-b border-gray-800 focus:border-white outline-none py-2 text-white cursor-pointer"
              >
                <option value="">اختر المدينة</option>
                <option value="طرابلس">طرابلس</option>
                <option value="بنغازي">بنغازي</option>
                <option value="مصراتة">مصراتة</option>
                <option value="الزاوية">الزاوية</option>
                <option value="البيضاء">البيضاء</option>
                <option value="طبرق">طبرق</option>
                <option value="درنة">درنة</option>
                <option value="سرت">سرت</option>
                <option value="الخمس">الخمس</option>
                <option value="زليتن">زليتن</option>
                <option value="غريان">غريان</option>
                <option value="تاجوراء">تاجوراء</option>
                <option value="سبها">سبها</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">
                العنوان التفصيلي
              </label>
              <textarea
                name="address"
                rows={3}
                required
                placeholder="اسم الشارع، معلم بارز..."
                className="w-full bg-transparent border border-gray-800 focus:border-white outline-none p-3 text-white placeholder-gray-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-4 mt-6 rounded uppercase tracking-widest hover:bg-gray-200 transition"
          >
            تأكيد الطلب ({totalItems} منتج)
          </button>
        </form>
      </div>
    </div>
  );
}
