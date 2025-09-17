// src/pages/ProductsPage.jsx
import React from "react";
import { FaPrint, FaFileAlt, FaStore } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi"; // For signage icon'
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";


export default function ProductsPage() {
    const productCategories = [
        {
            name: "Large Format Digital",
            description: "Perfect for banners, vinyl prints, vehicle wraps, and backlit flex.",
            icon: <FaPrint size={40} className="text-blue-600 mb-3" />,
        },
        {
            name: "Banner Printing",
            description: "Indoor & outdoor banners, roll-ups, standees for advertising.",
            icon: <FaFileAlt size={40} className="text-blue-600 mb-3" />,
        },
        {
            name: "Point-of-Sale",
            description: "Display stands, promotional boards, branding solutions for stores.",
            icon: <FaStore size={40} className="text-blue-600 mb-3" />,
        },
        {
            name: "Signage",
            description: "LED boards, acrylic letters, and indoor/outdoor signages.",
            icon: <HiOutlinePhotograph size={40} className="text-blue-600 mb-3" />,
        },
    ];

    const whyChooseUs = [
        {
            title: "Expert Team",
            description: "Professional designers and printing experts to deliver quality.",
        },
        {
            title: "High-Quality Prints",
            description: "We use premium materials for sharp and vibrant prints.",
        },
        {
            title: "Quick Turnaround",
            description: "Fast delivery without compromising quality.",
        },
        {
            title: "Custom Solutions",
            description: "Tailored printing solutions for businesses of all sizes.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Our Products
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
                    Explore our wide range of printing and advertising solutions designed to meet all your business needs.
                </p>
                <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    Get a Quote
                </Link>
            </section>

            {/* Product Categories */}
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
                    Product Categories
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productCategories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 text-center"
                        >
                            {cat.icon}
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {cat.name}
                            </h3>
                            <p className="text-gray-500">{cat.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 px-6 bg-gray-100">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
                    Why Choose Us
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {whyChooseUs.map((item, idx) => (
                        <div key={idx} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-6 text-lg md:text-xl">
                    Contact us today for a free consultation and quote.
                </p>
                <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    Contact Us
                </Link>
            </section>
        </div>
    );
}
