// src/pages/VideoPage.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";

const videoData = [
    {
        id: 1,
        category: "Flex Printing",
        title: "Flex Printing Process",
        description: "Step-by-step guide to high-quality flex printing for banners and hoardings.",
        src: "https://www.youtube.com/embed/ScMzIvxBSi4",
        tips: ["Always use high-quality vinyl.", "Ensure proper alignment before printing."],
    },
    {
        id: 2,
        category: "Glow Signs",
        title: "Glow Sign Installation",
        description: "Learn how to install glow signs professionally and safely.",
        src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tips: ["Check wiring and power supply.", "Use level and measurements for perfect alignment."],
    },
    {
        id: 3,
        category: "POS",
        title: "Point of Sale Displays",
        description: "Creative POS signage ideas for retail branding and promotions.",
        src: "https://www.youtube.com/embed/ysz5S6PUM-U",
        tips: ["Highlight promotional products prominently.", "Maintain consistent brand colors."],
    },
    {
        id: 4,
        category: "Corporate",
        title: "Corporate Advertising Tips",
        description: "How to make your brand stand out using banners, flex, and vinyl printing.",
        src: "https://www.youtube.com/embed/3fumBcKC6RE",
        tips: ["Design for readability from distance.", "Use bold visuals to attract attention."],
    },
];

const categories = ["All", "Flex Printing", "Glow Signs", "POS", "Corporate"];

export default function VideoPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxVideo, setLightboxVideo] = useState(null);
    const carouselRef = useRef(null);

    const filteredVideos =
        selectedCategory === "All"
            ? videoData
            : videoData.filter((v) => v.category === selectedCategory);

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const width = carouselRef.current.clientWidth;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -width : width,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="container mx-auto py-12 px-4 md:px-0">
            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
                    Flex Printing & Advertising Videos
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our collection of videos to learn about high-quality flex printing, glow signs,
                    banners, and creative corporate advertising solutions.
                </p>
            </div>

            {/* Category Filters */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${selectedCategory === cat
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-indigo-400 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Carousel Container */}
            <div className="relative">
                {/* Left Arrow */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-indigo-500 hover:text-white z-10"
                    onClick={() => scrollCarousel("left")}
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Right Arrow */}
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-indigo-500 hover:text-white z-10"
                    onClick={() => scrollCarousel("right")}
                >
                    <ChevronRight size={28} />
                </button>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4"
                >
                    {filteredVideos.map((video) => (
                        <motion.div
                            key={video.id}
                            className="min-w-[320px] snap-start rounded-xl overflow-hidden border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setLightboxVideo(video)}
                        >
                            <div className="bg-white rounded-xl overflow-hidden h-full">
                                <div className="aspect-video">
                                    <iframe
                                        className="w-full h-full"
                                        src={video.src}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
                                        {video.title}
                                    </h2>
                                    <p className="text-gray-600 mt-2">{video.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Popup */}
            <AnimatePresence>
                {lightboxVideo && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxVideo(null)}
                    >
                        <motion.div
                            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src={lightboxVideo.src}
                                    title={lightboxVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-indigo-600">{lightboxVideo.title}</h2>
                                <p className="text-gray-600 mt-2">{lightboxVideo.description}</p>
                                <ul className="mt-2 list-disc list-inside text-gray-500">
                                    {lightboxVideo.tips.map((tip, idx) => (
                                        <li key={idx}>{tip}</li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setLightboxVideo(null)}
                                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Testimonials / Success Stories */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />

            {/* Call to Action */}
            <CallToAction />
        </div>
    );
}
