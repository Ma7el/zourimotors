"use client";
import React from "react";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartSummary } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-2xl mx-auto pt-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-white mb-10 transition"
          >
            <ArrowLeft size={20} /> رجوع
          </Link>

          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">السلة فارغة</h1>
            <p className="text-gray-400 mb-8">
              لم تقم بإضافة أي منتجات إلى السلة بعد.
            </p>
            <Link
              href="/#products"
              className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition"
            >
              تصفح المنتجات
            </Link>
          </div>
        </div>
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
      <div className="max-w-4xl mx-auto pt-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-white mb-10 transition"
        >
          <ArrowLeft size={20} /> رجوع
        </Link>

        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tighter italic">
          معلومات التوصيل
        </h1>
        <p className="text-gray-500 mb-10 text-sm uppercase tracking-widest">
          زوري موتورز ليبيا • الدفع عند الاستلام
        </p>

        {/* Cart Items */}
        <div className="mb-8 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            المنتجات المختارة ({totalItems} منتج)
          </h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-neutral-800 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400">{item.brand}</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 border border-neutral-700 rounded">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1.5 hover:bg-neutral-800 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1.5 hover:bg-neutral-800 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-neutral-800 rounded transition-colors"
                    aria-label="إزالة"
                  >
                    <Trash2 className="w-4 h-4 text-neutral-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GETFORM CHECKOUT */}
        <form
          action="https://khazouri8.getform.com/d0o83"
          method="POST"
          className="space-y-6"
          onSubmit={() => clearCart()}
        >
          {/* Hidden order data */}
          <input
            type="hidden"
            name="payment_method"
            value="الدفع عند الاستلام (COD)"
          />
          <input
            type="hidden"
            name="total_items"
            value={totalItems.toString()}
          />
          <input type="hidden" name="cart_summary" value={cartSummary} />
          <input type="hidden" name="products" value={productDetails} />

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              الاسم الكامل
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-b border-gray-800 focus:border-white outline-none py-2 transition"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-transparent border-b border-gray-800 focus:border-white outline-none py-2 transition"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              المدينة
            </label>
            <select
              name="city"
              required
              className="w-full bg-black border-b border-gray-800 focus:border-white outline-none py-2 transition cursor-pointer"
            >
              <option value="">اختر المدينة</option>
              <option value="طرابلس">طرابلس</option>
              <option value="بنغازي">بنغازي</option>
              <option value="مصراتة">مصراتة</option>
              <option value="الزاوية">الزاوية</option>
              <option value="سبها">سبها</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              العنوان التفصيلي
            </label>
            <textarea
              name="address"
              rows={3}
              required
              className="w-full bg-transparent border border-gray-800 focus:border-white outline-none p-3 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-4 mt-10 hover:bg-gray-200 transition uppercase tracking-widest"
          >
            تأكيد الطلب ({totalItems} منتج)
          </button>
        </form>
      </div>
    </div>
  );
}

