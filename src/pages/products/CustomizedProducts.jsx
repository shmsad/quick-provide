// src/pages/products/CustomizedProducts.jsx
import React, { useState } from "react";
import { Gift, Shirt, Camera, CupSoda } from "lucide-react"; // ✅ Correct imports
import CallToAction from "../../components/CallToAction";

const customProducts = [
    {
        title: "Custom T-Shirts",
        text: "Personalized t-shirts with logos, designs & text.",
        image: "/images/s1.jpeg",
        images: ["/images/s2.jpeg", "/images/s3.jpeg"],
        details: "High-quality fabric with screen printing & sublimation options.",
    },
    {
        title: "Photo Mugs",
        text: "Printed mugs for gifts, branding & events.",
        image: "/images/s4.jpeg",
        images: ["/images/s5.jpeg", "/images/s6.jpeg"],
        details: "Durable ceramic mugs with HD photo printing.",
    },
    {
        title: "Custom Caps",
        text: "Branded caps with embroidery or printing.",
        image: "/images/pc1.jpeg",
        images: ["/images/pc2.jpeg", "/images/pc3.jpeg"],
        details: "Perfect for corporate giveaways, events & promotions.",
    },
    {
        title: "Photo Frames",
        text: "Beautiful frames with customized prints.",
        image: "/images/pc4.jpeg",
        images: ["/images/pc5.jpeg", "/images/pc6.jpeg"],
        details: "Ideal for gifts, home décor & memories.",
    },
];

export default function CustomizedProducts() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () =>
        setCurrentImage((prev) => (prev + 1) % selectedProduct.images.length);

    const prevImage = () =>
        setCurrentImage((prev) =>
            prev === 0 ? selectedProduct.images.length - 1 : prev - 1
        );

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src="/images/custom-hero.jpg"
                    alt="Customized Products"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-red-600/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Customized Products</h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        Personal • Unique • Memorable Gifts & Branding
                    </p>
                </div>
            </div>

            {/* Products */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
                    Create <span className="font-semibold text-pink-600">personalized gifts</span> and
                    <span className="font-semibold"> custom promotional items</span> like T-shirts,
                    mugs, caps, and photo frames for events, branding, and special occasions.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {customProducts.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition cursor-pointer text-center"
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
                            <h3 className="text-xl font-semibold text-pink-600 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            title: "Unique Gifts",
                            text: "Perfect for birthdays, weddings & corporate events.",
                            icon: <Gift className="text-pink-600 w-8 h-8" />,
                        },
                        {
                            title: "Premium Quality",
                            text: "Durable printing & long-lasting colors.",
                            icon: <Shirt className="text-pink-600 w-8 h-8" />,
                        },
                        {
                            title: "Photo Printing",
                            text: "High-resolution printing for mugs & frames.",
                            icon: <Camera className="text-pink-600 w-8 h-8" />,
                        },
                        {
                            title: "Affordable",
                            text: "Customization at pocket-friendly prices.",
                            icon: <CupSoda className="text-pink-600 w-8 h-8" />,
                        },
                    ].map((f, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl text-center"
                        >
                            <div className="mb-3 flex justify-center">{f.icon}</div>
                            <h3 className="text-xl font-semibold text-pink-600">{f.title}</h3>
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
                            className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>
                        <div className="relative mb-4">
                            <img
                                src={selectedProduct.images[currentImage]}
                                alt={selectedProduct.title}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            {selectedProduct.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                    >
                                        &#10095;
                                    </button>
                                </>
                            )}
                        </div>
                        <h3 className="text-2xl font-bold text-pink-600">{selectedProduct.title}</h3>
                        <p className="text-gray-700 mb-2">{selectedProduct.text}</p>
                        <p className="text-gray-600">{selectedProduct.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
