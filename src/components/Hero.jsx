// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    const { contact } = useAppContext();
    const tel = contact.phones[0];

    // Multiple backgrounds for carousel
    const images = [
        "/images/hero-bg.jpg",
        "/images/hero-bg2.jpg",
        "/images/hero-bg3.jpg"
    ];

    const [index, setIndex] = useState(0);

    // Auto-slide every 5 sec
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden text-white">
            {/* Background Carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={images[index]}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[index]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="container mx-auto text-center relative z-10 px-4">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold leading-tight"
                >
                    {contact.company}
                </motion.h1>

                <p className="mt-4 text-sm md:text-lg">
                    {contact.iso} • {contact.license} • Government Approved
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow"
                    >
                        Get a Quote
                    </Link>

                    <a
                        href={`tel:${tel}`}
                        className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition"
                    >
                        📞 Call Now: {tel}
                    </a>
                </div>

                <p className="mt-6 text-xs text-gray-200">
                    Licensed: {contact.license} · {contact.iso}
                </p>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
