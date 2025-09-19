// src/pages/products/POSPage.jsx
import React from "react";
import { CheckCircle, Layers, Image, DollarSign } from "lucide-react";
import CallToAction from "../../components/CallToAction";
import GalleryPreview from "../../components/GalleryPreview";

export default function POSPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src="/images/pos-hero.jpg"
                    alt="Point of Sale"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 to-teal-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Point of Sale
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        Display Stands • Branding • Promotional Materials
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    Our <span className="font-semibold text-green-600">POS solutions</span> include
                    promotional displays, branding boards, and store marketing materials
                    that attract customers and increase sales.
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "Custom Displays", text: "Tailored stands & boards for stores.", icon: <Layers className="text-green-600 w-8 h-8" /> },
                        { title: "Durable Material", text: "Long-lasting, premium quality prints.", icon: <CheckCircle className="text-green-600 w-8 h-8" /> },
                        { title: "High Visibility", text: "Attract more customers effectively.", icon: <Image className="text-green-600 w-8 h-8" /> },
                        { title: "Cost Effective", text: "Affordable solutions for all businesses.", icon: <DollarSign className="text-green-600 w-8 h-8" /> },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:scale-105 transition transform text-center">
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Gallery */}
                <GalleryPreview />

                {/* CTA */}
                <CallToAction />
            </div>
        </div>
    );
}
