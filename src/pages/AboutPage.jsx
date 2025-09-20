// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";

export default function AboutPage() {
    return (
        <div className="container mx-auto pt-12">

            <HeroSection
                title="About Quick Provide Flex Printing And Advertising"
                description="Quick Provide Flex Printing And Advertising, based in Okhla, New Delhi, delivers creative branding, flex printing, and advertising solutions. Registered under UDYAM-DL-08-0095527 and GSTIN 07BDUPK7506B1ZH, we specialize in helping businesses stand out with impactful and reliable designs."
            />

            {/* Company Info */}
            <section className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        To provide high-quality, affordable, and innovative printing and advertising
                        solutions that empower businesses to grow their visibility and brand identity.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-700">
                        To become a trusted leader in flex printing and advertising,
                        known for creativity, reliability, and customer satisfaction across India.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <Stats />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* Call to Action */}
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-4">Looking for Printing & Advertising Solutions?</h2>
                <p className="text-gray-700 mb-6">
                    Contact <strong>Quick Provide Flex Printing And Advertising</strong> today for creative designs,
                    professional printing, and impactful advertising services.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 transition"
                >
                    Get in Touch
                </a>
            </section>

        </div>
    );
}
