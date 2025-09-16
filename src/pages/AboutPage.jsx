// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials'
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection"



export default function AboutPage() {
    return (
        <div className="container mx-auto py-12">

            <HeroSection
                title="About Quick Provide Pest Control Service"
                description="QUICK PROVIDE PEST CONTROL SERVICE is an ISO 9001:2015 certified company providing professional pest control solutions in New Delhi, India. We are government-approved and licensed to ensure safe, reliable, and effective pest control."
            />

            {/* Company Info */}
            <section className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        To provide eco-friendly and effective pest control solutions ensuring a safe and healthy environment for homes and businesses across New Delhi.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-700">
                        To become the leading professional pest control service, trusted for quality, reliability, and customer satisfaction.
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
                <h2 className="text-2xl font-bold mb-4">Need Pest Control Services?</h2>
                <p className="text-gray-700 mb-6">Contact Quick Provide Pest Control Service today for a free consultation and quote.</p>
                <a href="/contact" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 transition">
                    Get in Touch
                </a>
            </section>

        </div>
    );
}
