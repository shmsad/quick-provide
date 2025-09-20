// src/pages/products/OutdoorFlexPrinting.jsx
import React, { useState } from "react";
import { CheckCircle, Layers, Image, DollarSign } from "lucide-react";
import CallToAction from "../../components/CallToAction";

// Outdoor Flex Printing Products Data
const outdoorProducts = [
    {
        title: "Billboards",
        text: "Large outdoor boards for maximum visibility.",
        image: "/images/flex1.jpeg",
        images: ["/images/flex2.jpeg", "/images/flex3.jpeg", "/images/flex-bg1.jpg"],
        details: "Ideal for highways and high-traffic areas. Weatherproof material ensures longevity.",
    },
    {
        title: "Hoardings",
        text: "Prominent hoardings for roadside branding.",
        image: "/images/flex-bg2.jpg",
        images: ["/images/flex-bg3.jpg", "/images/flex-hero.jpeg"],
        details: "Custom sizes available for maximum impact.",
    },
    {
        title: "Street Banners",
        text: "Eye-catching banners for streets and events.",
        image: "/images/banner1.jpeg",
        images: ["/images/banner2.jpg", "/images/banner3.jpeg"],
        details: "Durable and weather-resistant banners suitable for all outdoor locations.",
    },
    {
        title: "Event Backdrops",
        text: "Large format backdrops for outdoor events.",
        image: "/images/pc1.jpeg",
        images: ["/images/pc2.jpeg", "/images/pc3.jpeg"],
        details: "Perfect for exhibitions, concerts, and public events.",
    },
    {
        title: "Outdoor Flags",
        text: "Flexible flags for branding in open areas.",
        image: "/images/s1.jpeg",
        images: ["/images/s1.jpeg", "/images/s2.jpeg"],
        details: "Available in various sizes with sturdy poles for outdoor use.",
    },
    {
        title: "Vehicle Wraps",
        text: "Custom prints for cars, vans, and trucks.",
        image: "/images/pc5.jpeg",
        images: ["/images/pc6.jp6g", "/images/pc4.jpeg"],
        details: "Enhance visibility and brand awareness on the move.",
    },
];

export default function OutdoorFlexPrinting() {
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
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src="/images/glow-sign-hero.jpg"
                    alt="Outdoor Flex Printing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 to-teal-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Outdoor Flex Printing
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        Weatherproof • Large Format • Eye-Catching Branding
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    Our <span className="font-semibold text-green-600">Outdoor Flex Printing</span> products
                    include billboards, hoardings, street banners, event backdrops, flags, and vehicle wraps.
                    We ensure <span className="font-semibold">durable, weather-resistant</span> and <span className="font-semibold">high-visibility prints</span>.
                </p>

                {/* Product Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {outdoorProducts.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:scale-105 transition transform text-center cursor-pointer"
                            onClick={() => {
                                setSelectedProduct(item);
                                setCurrentImage(0);
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "Weatherproof", text: "Resistant to sun, rain, and wind for outdoor durability.", icon: <CheckCircle className="text-green-600 w-8 h-8" /> },
                        { title: "Large Format", text: "Ideal for billboards, hoardings, and event backdrops.", icon: <Layers className="text-green-600 w-8 h-8" /> },
                        { title: "High Visibility", text: "Vibrant colors and sharp graphics for attention-grabbing branding.", icon: <Image className="text-green-600 w-8 h-8" /> },
                        { title: "Affordable", text: "Cost-effective solutions without compromising quality.", icon: <DollarSign className="text-green-600 w-8 h-8" /> },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:scale-105 transition transform text-center">
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <CallToAction />
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-6 max-w-lg w-full relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>

                        {/* Carousel */}
                        <div className="relative mb-4">
                            <img
                                src={selectedProduct.images ? selectedProduct.images[currentImage] : selectedProduct.image}
                                alt={selectedProduct.title}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            {selectedProduct.images && selectedProduct.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
                                    >
                                        &#10095;
                                    </button>
                                </>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-green-600 mb-2">{selectedProduct.title}</h3>
                        <p className="text-gray-700 mb-4">{selectedProduct.text}</p>
                        <p className="text-gray-600">{selectedProduct.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
