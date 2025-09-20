// src/pages/products/BacklitFlexPrinting.jsx
import React, { useState } from "react";
import { Brush, Layers, Image, DollarSign } from "lucide-react";
import CallToAction from "../../components/CallToAction";

const backlitProducts = [
    {
        title: "Indoor Backlit Panels",
        text: "Eye-catching illuminated panels for indoor advertising.",
        image: "/images/pc1.jpeg",
        images: ["/images/pc2.jpeg", "/images/pc3.jpeg"],
        details: "Perfect for malls, showrooms, and exhibition stands. High brightness and vivid colors."
    },
    {
        title: "Outdoor Backlit Flex",
        text: "Durable backlit flex for outdoor displays.",
        image: "/images/pc6.jpeg",
        images: ["/images/pc5.jpeg", "/images/pc4.jpeg"],
        details: "Weather-resistant material with high-impact illumination for night visibility."
    },
    {
        title: "LED Light Box Panels",
        text: "Slim panels with uniform LED illumination.",
        image: "/images/s6.jpeg",
        images: ["/images/pc5.jpeg", "/images/pc6.jpeg"],
        details: "Ideal for indoor branding, retail displays, and promotional graphics."
    },
    {
        title: "Double-Sided Backlit Display",
        text: "Visible from both sides for maximum exposure.",
        image: "/images/s6.jpeg",
        images: ["/images/s5.jpeg", "/images/s4.jpeg"],
        details: "Perfect for shopping malls, airports, and exhibition centers."
    },
    {
        title: "Outdoor LED Flex Frame",
        text: "Sturdy outdoor backlit flex with LED illumination.",
        image: "/images/s3.jpeg",
        images: ["/images/s2.jpeg", "/images/s1.jpeg"],
        details: "Weatherproof and bright, ideal for night-time promotions."
    },
    {
        title: "Slim Edge-Lit Panels",
        text: "Modern edge-lit design for sleek advertising displays.",
        image: "/images/flex-bg3.jpg",
        images: ["/images/flex-bg2.jpeg", "/images/flex-bg1.jpeg"],
        details: "Compact and stylish panels for premium indoor settings."
    },
];


export default function BacklitFlexPrinting() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        if (!selectedProduct) return;
        setCurrentImage((prev) => (prev + 1) % selectedProduct.images.length);
    };

    const prevImage = () => {
        if (!selectedProduct) return;
        setCurrentImage((prev) =>
            prev === 0 ? selectedProduct.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="pt-20">
            {/* Hero */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src="/images/flex-hero.jpeg"
                    alt="Backlit Flex Printing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/80 to-purple-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Backlit Flex Printing</h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        Illuminated • Vibrant • High Impact
                    </p>
                </div>
            </div>

            {/* Products */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
                    We offer premium <span className="font-semibold text-indigo-600">Backlit Flex Printing</span> solutions for indoor and outdoor displays, ensuring visibility day and night.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {backlitProducts.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition cursor-pointer text-center"
                            onClick={() => { setSelectedProduct(item); setCurrentImage(0); }}
                        >
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "High Brightness", text: "Illuminates even in bright environments.", icon: <Image className="text-indigo-600 w-8 h-8" /> },
                        { title: "Vibrant Colors", text: "Prints pop with LED backlighting.", icon: <Brush className="text-indigo-600 w-8 h-8" /> },
                        { title: "Durable Material", text: "Weather & wear-resistant flex.", icon: <Layers className="text-indigo-600 w-8 h-8" /> },
                        { title: "Cost-Effective", text: "Affordable premium illuminated prints.", icon: <DollarSign className="text-indigo-600 w-8 h-8" /> },
                    ].map((f, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl text-center">
                            <div className="mb-3">{f.icon}</div>
                            <h3 className="text-xl font-semibold text-indigo-600">{f.title}</h3>
                            <p className="text-gray-600">{f.text}</p>
                        </div>
                    ))}
                </div>

                <CallToAction />
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-6 max-w-lg w-full relative">
                        <button
                            className="absolute top-4 right-4 z-50 text-3xl font-bold text-white hover:text-red-500 bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>


                        <div className="relative mb-4">
                            <img src={selectedProduct.images[currentImage]} alt={selectedProduct.title} className="w-full h-48 object-cover rounded-xl" />
                            {selectedProduct.images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full">&#10094;</button>
                                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full">&#10095;</button>
                                </>
                            )}
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-600">{selectedProduct.title}</h3>
                        <p className="text-gray-700 mb-2">{selectedProduct.text}</p>
                        <p className="text-gray-600">{selectedProduct.details}</p>
                    </div>
                </div>
            )}

        </div>
    );
}
