// src/pages/products/ProductDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { productExamples } from "../components/productExamples";

export default function ProductDetailPage() {
    const { product } = useParams();
    const data = productExamples[product];

    if (!data) {
        return <div className="pt-20 text-center text-xl text-red-600">Product not found</div>;
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-80 flex items-center justify-center text-white">
                <img
                    src={data.heroImage}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/80 to-purple-700/80"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{data.title}</h1>
                </div>
            </div>

            {/* Product Description */}
            <div className="max-w-6xl mx-auto p-6 text-center">
                <p className="text-gray-700 text-lg mb-12">{data.description}</p>

                {/* Example Gallery */}
                <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Examples</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.examples.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${data.title} example ${idx + 1}`}
                            className="w-full h-56 object-cover rounded-xl shadow-md"
                        />
                    ))}
                </div>
            </div>

            <CallToAction />
        </div>
    );
}
