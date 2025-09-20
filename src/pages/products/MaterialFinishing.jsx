// src/pages/products/MaterialFinishing.jsx
import React, { useState } from "react";
import { Layers, Droplets, Sparkles, Scissors } from "lucide-react";
import CallToAction from "../../components/CallToAction";

const finishingOptions = [
    {
        title: "Glossy Lamination",
        text: "Shiny finish for vibrant colors & eye-catching appeal.",
        image: "/images/pc6.jpeg",
        images: ["/images/pc5.jpeg", "/images/pc4.jpeg"],
        details: "Best for flyers, brochures, and posters.",
    },
    {
        title: "Matte Lamination",
        text: "Soft, elegant, and professional look.",
        image: "/images/pc3.jpeg",
        images: ["/images/pc2.jpeg", "/images/pc1.jpeg"],
        details: "Perfect for business cards and premium catalogs.",
    },
    {
        title: "Vinyl Coating",
        text: "Durable and weather-resistant finish.",
        image: "/images/s6.jpeg",
        images: ["/images/s5.jpeg", "/images/s4.jpeg"],
        details: "Ideal for outdoor banners and signage.",
    },
    {
        title: "Die Cutting",
        text: "Custom shapes and cut-outs for creative designs.",
        image: "/images/s3.jpeg",
        images: ["/images/s1.jpeg", "/images/s2.jpeg"],
        details: "Unique finishing option for packaging & labels.",
    },
    {
        title: "Embossing",
        text: "Raised design effect for premium tactile feel.",
        image: "/images/flex1.jpeg",
        images: ["/images/flex3.jpeg", "/images/flex2.jpeg"],
        details: "Enhances luxury appeal on business cards, invitations, and packaging.",
    },
    {
        title: "Foil Stamping",
        text: "Metallic finish for a classy, shiny look.",
        image: "/images/flex-bg1.jpg",
        images: ["/images/flex-bg2.jpg", "/images/flex-bg3.jpeg"],
        details: "Perfect for logos, labels, and special print editions.",
    },
];


export default function MaterialFinishing() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () =>
        setCurrentImage((prev) => (prev + 1) % selectedOption.images.length);

    const prevImage = () =>
        setCurrentImage((prev) =>
            prev === 0 ? selectedOption.images.length - 1 : prev - 1
        );

    return (
        <div className="pt-20">
            {/* Hero */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src="/images/material-hero.jpg"
                    alt="Material & Finishing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 to-teal-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Material & Finishing Options</h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        Premium • Durable • Customized Finish
                    </p>
                </div>
            </div>

            {/* Options */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
                    Choose from a wide range of{" "}
                    <span className="font-semibold text-green-600">finishing options</span> to make your
                    prints more durable, attractive, and premium.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {finishingOptions.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition cursor-pointer text-center"
                            onClick={() => { setSelectedOption(item); setCurrentImage(0); }}
                        >
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                            <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "Durability", text: "Protects prints from damage & wear.", icon: <Layers className="text-green-600 w-8 h-8" /> },
                        { title: "Water Resistant", text: "Protects against spills & moisture.", icon: <Droplets className="text-green-600 w-8 h-8" /> },
                        { title: "Premium Look", text: "Glossy & matte finishes for elegance.", icon: <Sparkles className="text-green-600 w-8 h-8" /> },
                        { title: "Custom Shapes", text: "Die-cutting for unique creativity.", icon: <Scissors className="text-green-600 w-8 h-8" /> },
                    ].map((f, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl text-center">
                            <div className="mb-3">{f.icon}</div>
                            <h3 className="text-xl font-semibold text-green-600">{f.title}</h3>
                            <p className="text-gray-600">{f.text}</p>
                        </div>
                    ))}
                </div>

                <CallToAction />
            </div>

            {/* Modal */}
            {selectedOption && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-6 max-w-lg w-full relative">
                        <button
                            className="absolute top-4 right-4 z-50 text-3xl font-bold text-white hover:text-red-500 bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>
                        <div className="relative mb-4">
                            <img src={selectedOption.images[currentImage]} alt={selectedOption.title} className="w-full h-48 object-cover rounded-xl" />
                            {selectedOption.images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full">&#10094;</button>
                                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full">&#10095;</button>
                                </>
                            )}
                        </div>
                        <h3 className="text-2xl font-bold text-green-600">{selectedOption.title}</h3>
                        <p className="text-gray-700 mb-2">{selectedOption.text}</p>
                        <p className="text-gray-600">{selectedOption.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
