// src/pages/ProductsPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const productCategories = [
        {
            name: "Large Format Digital",
            description: "Perfect for banners, vinyl prints, vehicle wraps, and backlit flex.",
            image: "/images/pc1.jpeg",
            details: "We specialize in high-resolution large format printing suitable for billboards, flex boards, vehicle wraps, and more.",
            examples: ["/images/s1.jpeg", "/images/s2.jpeg", "/images/s3.jpeg"],
            bg: "from-blue-500 to-indigo-600",
        },
        {
            name: "Banner Printing",
            description: "Indoor & outdoor banners, roll-ups, standees for advertising.",
            image: "/images/pc2.jpeg",
            details: "Get durable and vibrant banners for promotions, events, and branding. Available in multiple sizes and materials.",
            examples: ["/images/s4.jpeg", "/images/s5.jpeg"],
            bg: "from-pink-500 to-red-600",
        },
        {
            name: "Point-of-Sale",
            description: "Display stands, promotional boards, branding solutions for stores.",
            image: "/images/pc3.jpeg",
            details: "We create engaging POS displays that attract customers and enhance store visibility.",
            examples: ["/images/pc1.jpeg", "/images/pc2.jpeg"],
            bg: "from-green-500 to-teal-600",
        },
        {
            name: "Signage",
            description: "LED boards, acrylic letters, and indoor/outdoor signages.",
            image: "/images/pc4.jpeg",
            details: "High-quality signages including LED, acrylic, and glow signs for businesses.",
            examples: ["/images/pc3.jpeg", "/images/pc4.jpeg"],
            bg: "from-purple-500 to-pink-600",
        },
    ];

    const whyChooseUs = [
        { title: "Expert Team", description: "Professional designers and printing experts to deliver quality." },
        { title: "High-Quality Prints", description: "We use premium materials for sharp and vibrant prints." },
        { title: "Quick Turnaround", description: "Fast delivery without compromising quality." },
        { title: "Custom Solutions", description: "Tailored printing solutions for businesses of all sizes." },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-12">
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
                            onClick={() => setSelectedCategory(cat)}
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="mb-4"
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-xl object-cover"
                                />
                            </motion.div>
                            <h3 className="text-2xl font-semibold mb-2">{cat.name}</h3>
                            <p className="text-white/90 text-sm sm:text-base">{cat.description}</p>
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

            <CallToAction />

            {/* Modal for Product Details */}
            {selectedCategory && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-6 max-w-2xl w-full relative">
                        <button
                            className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedCategory(null)}
                        >
                            &times;
                        </button>

                        <h3 className="text-3xl font-bold text-blue-600 mb-4">
                            {selectedCategory.name}
                        </h3>
                        <p className="text-gray-700 mb-4">{selectedCategory.details}</p>

                        {/* Example Images */}
                        <div className="grid grid-cols-2 gap-4">
                            {selectedCategory.examples.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="example"
                                    className="w-full h-40 object-cover rounded-xl"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
