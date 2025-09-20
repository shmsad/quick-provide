// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";
import VisionMission from '../components/VisionMission';
import CallToAction from '../components/CallToAction';

export default function AboutPage() {
    return (
        <div className="container mx-auto pt-12">

            <HeroSection
                title="About Quick Provide Flex Printing And Advertising"
                description="Quick Provide Flex Printing And Advertising, based in Okhla, New Delhi, delivers creative branding, flex printing, and advertising solutions. Registered under UDYAM-DL-08-0095527 and GSTIN 07BDUPK7506B1ZH, we specialize in helping businesses stand out with impactful and reliable designs."
            />

            {/* Vision mission */}
            <VisionMission />

            {/* Stats Section */}
            <Stats />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* Call to Action */}
            <section className="text-center mb-12 mt-12 px-4 md:px-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Popular Printing Solutions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Roll-up Banners */}
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer">
                        <img src="/images/s12.jpeg" alt="Roll-up Banners" className="w-full h-40 object-cover rounded-md mb-3" />
                        <h3 className="font-semibold text-lg mb-1">Roll-up Banners</h3>
                        <p className="text-gray-600 text-sm">Portable, durable, and perfect for events or exhibitions.</p>
                    </div>

                    {/* Backlit Panels */}
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer">
                        <img src="/images/s11.jpeg" alt="Backlit Panels" className="w-full h-40 object-cover rounded-md mb-3" />
                        <h3 className="font-semibold text-lg mb-1">Backlit Panels</h3>
                        <p className="text-gray-600 text-sm">Bright and eye-catching indoor or outdoor illuminated displays.</p>
                    </div>

                    {/* Indoor Printing */}
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer">
                        <img src="/images/s8.jpeg" alt="Indoor Printing" className="w-full h-40 object-cover rounded-md mb-3" />
                        <h3 className="font-semibold text-lg mb-1">Indoor Printing</h3>
                        <p className="text-gray-600 text-sm">Posters, wall graphics, glass stickers, and banners for indoor spaces.</p>
                    </div>

                    {/* Custom Products */}
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer">
                        <img src="/images/s7.jpeg" alt="Custom Products" className="w-full h-40 object-cover rounded-md mb-3" />
                        <h3 className="font-semibold text-lg mb-1">Custom Products</h3>
                        <p className="text-gray-600 text-sm">Personalized t-shirts, mugs, caps, keychains, and more.</p>
                    </div>
                </div>

                <div className="mt-8">
                    <a
                        href="/services"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 transition"
                    >
                        Explore All Services
                    </a>
                </div>
            </section>


        </div>
    );
}
