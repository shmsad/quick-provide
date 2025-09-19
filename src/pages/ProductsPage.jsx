// src/pages/ProductsPage.jsx
import React from "react";
import { FaPrint, FaFileAlt, FaStore } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";

export default function ProductsPage() {
    const productCategories = [
        {
            name: "Large Format Digital",
            description: "Perfect for banners, vinyl prints, vehicle wraps, and backlit flex.",
            icon: <FaPrint size={50} />,
            bg: "from-blue-500 to-indigo-600",
            link: "/products/flex-printing",
        },
        {
            name: "Banner Printing",
            description: "Indoor & outdoor banners, roll-ups, standees for advertising.",
            icon: <FaFileAlt size={50} />,
            bg: "from-pink-500 to-red-600",
            link: "/products/banners",
        },
        {
            name: "Point-of-Sale",
            description: "Display stands, promotional boards, branding solutions for stores.",
            icon: <FaStore size={50} />,
            bg: "from-green-500 to-teal-600",
            link: "/products/pos",
        },
        {
            name: "Signage",
            description: "LED boards, acrylic letters, and indoor/outdoor signages.",
            icon: <HiOutlinePhotograph size={50} />,
            bg: "from-purple-500 to-pink-600",
            link: "/products/glow-sign",
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
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    Our Products
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
                    Explore our wide range of printing and advertising solutions designed to meet all your business needs.
                </p>
                <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                    Get a Quote
                </Link>
            </section>

            {/* Product Categories */}
            <section className="py-16 px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Product Categories
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, type: "spring", stiffness: 150 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            whileTap={{ scale: 0.98 }}
                            className={`cursor-pointer bg-gradient-to-br ${cat.bg} text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl flex flex-col items-center text-center transition-all`}
                            onClick={() => window.location.href = cat.link}
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="mb-4"
                            >
                                {cat.icon}
                            </motion.div>
                            <h3 className="text-2xl font-semibold mb-2">{cat.name}</h3>
                            <p className="text-white/90">{cat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-6 bg-gray-100">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Why Choose Us
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {whyChooseUs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, type: "spring", stiffness: 150 }}
                            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl text-center transition-all"
                        >
                            <h3 className="font-semibold mb-2 text-xl">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-20 text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-6 text-xl">
                    Contact us today for a free consultation and quote.
                </p>
                <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                    Contact Us
                </Link>
            </section>

            {/* Optional: CallToAction Component */}
            <CallToAction />
        </div>
    );
}
