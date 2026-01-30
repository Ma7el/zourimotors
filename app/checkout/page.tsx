"use client";
<<<<<<< HEAD
import React from "react";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartSummary } =
    useCart();
=======
import React, { useState } from 'react';
import { CheckCircle, ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartSummary } = useCart();
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Prepare product details for email
    const productDetails = cart
      .map((item) => `${item.name} (${item.brand}) - الكمية: ${item.quantity} - السعر: ${item.price}`)
      .join('\n');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Create form data
    const formData = new FormData(event.currentTarget);
    formData.append('products', productDetails);
    formData.append('cart_summary', getCartSummary());
    formData.append('total_items', totalItems.toString());
    formData.append('total_products', cart.length.toString());
    
    // Create a temporary form to submit with FormSubmit
    const tempForm = document.createElement('form');
    tempForm.action = 'https://formsubmit.co/khazouri8@gmail.com';
    tempForm.method = 'POST';
    tempForm.style.display = 'none';
    
    // Add all form fields
    Array.from(formData.entries()).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      tempForm.appendChild(input);
    });
    
    // Add FormSubmit configuration
    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = '_subject';
    subjectInput.value = `طلب جديد من زوري موتورز - ${totalItems} منتج`;
    tempForm.appendChild(subjectInput);
    
    const captchaInput = document.createElement('input');
    captchaInput.type = 'hidden';
    captchaInput.name = '_captcha';
    captchaInput.value = 'false';
    tempForm.appendChild(captchaInput);
    
    const templateInput = document.createElement('input');
    templateInput.type = 'hidden';
    templateInput.name = '_template';
    templateInput.value = 'table';
    tempForm.appendChild(templateInput);
    
    document.body.appendChild(tempForm);
    tempForm.submit();
    
    // Show success and clear cart
    setTimeout(() => {
      setSubmitted(true);
      clearCart();
    }, 500);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle size={80} className="text-white mb-6" />
        <h1 className="text-4xl font-bold mb-4 italic">تم استلام الطلب</h1>
        <p className="text-gray-400 max-w-md text-lg">
          شكراً لك. سيتصل بك فريق زوري موتورز قريباً على هاتفك لتأكيد تفاصيل التوصيل.
        </p>
        <Link href="/" className="mt-10 border border-white px-8 py-3 hover:bg-white hover:text-black transition">
          العودة للمتجر
        </Link>
      </div>
    );
  }
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-2xl mx-auto pt-10">
<<<<<<< HEAD
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
=======
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white mb-10 transition">
            <ArrowLeft size={20} /> رجوع
          </Link>
          
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">السلة فارغة</h1>
            <p className="text-gray-400 mb-8">لم تقم بإضافة أي منتجات إلى السلة بعد.</p>
            <Link 
              href="/#products" 
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
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

<<<<<<< HEAD
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
=======
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto pt-10">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white mb-10 transition">
          <ArrowLeft size={20} /> رجوع
        </Link>
        
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tighter italic">معلومات التوصيل</h1>
        <p className="text-gray-500 mb-10 text-sm uppercase tracking-widest">زوري موتورز ليبيا • الدفع عند الاستلام</p>

        {/* Cart Items */}
        <div className="mb-8 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">المنتجات المختارة ({totalItems} منتج)</h2>
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-neutral-800 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex-1">
<<<<<<< HEAD
                  <h3 className="text-sm font-medium text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400">{item.brand}</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {item.price} × {item.quantity}
                  </p>
=======
                  <h3 className="text-sm font-medium text-white">{item.name}</h3>
                  <p className="text-xs text-neutral-400">{item.brand}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.price} × {item.quantity}</p>
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 border border-neutral-700 rounded">
                    <button
                      type="button"
<<<<<<< HEAD
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
=======
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
                      className="p-1.5 hover:bg-neutral-800 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button
                      type="button"
<<<<<<< HEAD
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
=======
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
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

<<<<<<< HEAD
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
=======
        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">الاسم الكامل</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full bg-transparent border-b border-gray-800 focus:border-white outline-none py-2 transition" 
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
            />
          </div>

          <div>
<<<<<<< HEAD
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-transparent border-b border-gray-800 focus:border-white outline-none py-2 transition"
=======
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">رقم الهاتف</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="091-XXXXXXX" 
              required 
              className="w-full bg-transparent border-b border-gray-800 focus:border-white outline-none py-2 transition" 
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
            />
          </div>

          <div>
<<<<<<< HEAD
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              المدينة
            </label>
            <select
              name="city"
              required
=======
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">المدينة (ليبيا)</label>
            <select 
              name="city" 
              required 
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
              className="w-full bg-black border-b border-gray-800 focus:border-white outline-none py-2 transition cursor-pointer"
            >
              <option value="">اختر المدينة</option>
              <option value="طرابلس">طرابلس</option>
              <option value="بنغازي">بنغازي</option>
              <option value="مصراتة">مصراتة</option>
              <option value="الزاوية">الزاوية</option>
<<<<<<< HEAD
              <option value="سبها">سبها</option>
=======
              <option value="البيضاء">البيضاء</option>
              <option value="طبرق">طبرق</option>
              <option value="درنة">درنة</option>
              <option value="توبرق">توبرق</option>
              <option value="سرت">سرت</option>
              <option value="الخمس">الخمس</option>
              <option value="زليتن">زليتن</option>
              <option value="غريان">غريان</option>
              <option value="تاجوراء">تاجوراء</option>
              <option value="الجفرة">الجفرة</option>
              <option value="سبها">سبها</option>
              <option value="قات">قات</option>
              <option value="أوباري">أوباري</option>
              <option value="أوجلة">أوجلة</option>
              <option value="الكفرة">الكفرة</option>
              <option value="الجغبوب">الجغبوب</option>
              <option value="الكويفية">الكويفية</option>
              <option value="بني وليد">بني وليد</option>
              <option value="المرج">المرج</option>
              <option value="درج">درج</option>
              <option value="قنطرة">قنطرة</option>
              <option value="سيدي إبراهيم">سيدي إبراهيم</option>
              <option value="ورفلة">ورفلة</option>
              <option value="أم الرزم">أم الرزم</option>
              <option value="قبر الأخيار">قبر الأخيار</option>
              <option value="البريقة">البريقة</option>
              <option value="الحيرة">الحيرة</option>
              <option value="إجدابيا">إجدابيا</option>
              <option value="العقيلة">العقيلة</option>
              <option value="السلوم">السلوم</option>
              <option value="جالو">جالو</option>
              <option value="سلنطة">سلنطة</option>
              <option value="الواحات">الواحات</option>
              <option value="الكومة">الكومة</option>
              <option value="الحدادة">الحدادة</option>
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
            </select>
          </div>

          <div>
<<<<<<< HEAD
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
=======
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">العنوان التفصيلي</label>
            <textarea 
              name="address" 
              rows={3} 
              required 
              className="w-full bg-transparent border border-gray-800 focus:border-white outline-none p-3 transition" 
              placeholder="اسم الشارع، معلم بارز..."
            ></textarea>
          </div>

          <button 
            type="submit" 
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
            className="w-full bg-white text-black font-bold py-4 mt-10 hover:bg-gray-200 transition uppercase tracking-widest"
          >
            تأكيد الطلب ({totalItems} منتج)
          </button>
        </form>
      </div>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> f0aa9696f2350905f8064abcbb5ad1793779faf5
