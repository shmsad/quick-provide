// src/pages/products/IndoorFlexPrinting.jsx
import React, { useState } from "react";
import { Brush, Layers, Image, DollarSign } from "lucide-react";
import CallToAction from "../../components/CallToAction";

const indoorProducts = [
    {
        title: "Posters",
        text: "Vibrant posters for indoor promotions.",
        image: "/images/s1.jpeg",
        images: ["/images/s2.jpeg", "/images/s3.jpeg"],
        details: "Posters are perfect for shops, cafes, and malls. We use premium indoor material.",
    },
    {
        title: "Wall Graphics",
        text: "Decorative vinyl prints for walls.",
        image: "/images/s4.jpeg",
        images: ["/images/s5.jpeg", "/images/s6.jpeg"],
        details: "Turn plain walls into vibrant storytelling canvases.",
    },
    {
        title: "Glass Stickers",
        text: "Custom stickers for glass doors & partitions.",
        image: "/images/pc1.jpeg",
        images: ["/images/pc2.jpeg", "/images/pc3.jpeg"],
        details: "Frosted or printed designs available for office & retail stores.",
    },
    {
        title: "Indoor Banners",
        text: "Stand banners for events, exhibitions, and offices.",
        image: "/images/pc4.jpeg",
        images: ["/images/pc5.jpeg", "/images/pc6.jpg"],
        details: "Easy to set up, portable, and eye-catching.",
    },
];

export default function IndoorFlexPrinting() {
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
                    src="/images/indoor-hero.jpg"
                    alt="Indoor Flex Printing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/80 to-purple-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Indoor Flex Printing</h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        Elegant • High Resolution • Premium Indoor Branding
                    </p>
                </div>
            </div>

            {/* Products */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
                    We provide premium <span className="font-semibold text-indigo-600">Indoor Printing</span> solutions like posters, wall graphics, stickers, and banners – perfect for retail, exhibitions, and corporate branding.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {indoorProducts.map((item, idx) => (
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
                        { title: "High Resolution", text: "Sharp details for indoor visibility.", icon: <Image className="text-indigo-600 w-8 h-8" /> },
                        { title: "Premium Finish", text: "Glossy & matte options available.", icon: <Brush className="text-indigo-600 w-8 h-8" /> },
                        { title: "Lightweight", text: "Easy to handle and install.", icon: <Layers className="text-indigo-600 w-8 h-8" /> },
                        { title: "Affordable", text: "Cost-effective printing without compromise.", icon: <DollarSign className="text-indigo-600 w-8 h-8" /> },
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
                        <button className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedProduct(null)}>&times;</button>
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
