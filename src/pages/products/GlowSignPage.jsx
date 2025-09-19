// src/pages/products/GlowSignPage.jsx
import React from "react";
import { CheckCircle, Layers, Image, DollarSign } from "lucide-react";
import CallToAction from "../../components/CallToAction";
import GalleryPreview from "../../components/GalleryPreview";

export default function GlowSignPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src="/images/glowsign-hero.jpg"
                    alt="Glow Sign"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700/80 to-pink-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Glow Sign
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        LED • Acrylic • Indoor & Outdoor Branding
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    Our <span className="font-semibold text-purple-600">glow signboards</span> help
                    businesses stand out with <span className="font-semibold">bright, durable, and custom designs</span>.
                    Perfect for indoor or outdoor branding.
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "LED Signs", text: "Bright, eye-catching illuminated signs.", icon: <Image className="text-purple-600 w-8 h-8" /> },
                        { title: "Custom Design", text: "Tailored to your brand and location.", icon: <Layers className="text-purple-600 w-8 h-8" /> },
                        { title: "Indoor & Outdoor", text: "Durable signs for any environment.", icon: <CheckCircle className="text-purple-600 w-8 h-8" /> },
                        { title: "Affordable", text: "Premium quality at competitive rates.", icon: <DollarSign className="text-purple-600 w-8 h-8" /> },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:scale-105 transition transform text-center">
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-purple-600 mb-2">{item.title}</h3>
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
