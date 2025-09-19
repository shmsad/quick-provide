// src/pages/products/BannersPage.jsx
import React from "react";
import { CheckCircle, Layers, Image, DollarSign } from "lucide-react";
import CallToAction from "../../components/CallToAction";
import GalleryPreview from "../../components/GalleryPreview";

export default function BannersPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src="/images/banners-hero.jpg"
                    alt="Banner Printing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-700/80 to-red-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Banner Printing
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        Indoor & Outdoor • High Resolution • Custom Sizes
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    Our <span className="font-semibold text-pink-600">banner printing</span> services
                    include indoor, outdoor, roll-ups, and standees for promotional advertising.
                    We ensure <span className="font-semibold">vibrant colors</span> and <span className="font-semibold">durable prints</span>.
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "Indoor & Outdoor", text: "Print banners suitable for any environment.", icon: <Image className="text-pink-600 w-8 h-8" /> },
                        { title: "Custom Sizes", text: "From small posters to giant outdoor banners.", icon: <Layers className="text-pink-600 w-8 h-8" /> },
                        { title: "High Quality", text: "Crisp, sharp prints with long-lasting colors.", icon: <CheckCircle className="text-pink-600 w-8 h-8" /> },
                        { title: "Affordable", text: "Best value without compromising quality.", icon: <DollarSign className="text-pink-600 w-8 h-8" /> },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:scale-105 transition transform text-center">
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-pink-600 mb-2">{item.title}</h3>
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
