"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-neutral-900/50 p-10 rounded-2xl border border-neutral-800 max-w-md w-full shadow-2xl backdrop-blur-sm">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">شكراً لك!</h1>
                <p className="text-gray-400 text-lg mb-2">تم استلام طلبك بنجاح</p>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    جاري الآن معالجة طلبك وتجهيزه للشحن.<br />
                    سيتم التواصل معك قريباً لتأكيد التسليم.
                </p>

                <Link
                    href="/"
                    className="group flex items-center justify-center gap-2 bg-white text-black font-bold py-3.5 px-6 rounded-lg uppercase tracking-wider hover:bg-gray-200 transition-all w-full"
                >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    العودة للرئيسية
                </Link>
            </div>
        </div>
    );
}
