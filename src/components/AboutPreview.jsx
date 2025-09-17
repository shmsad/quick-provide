// src/components/AboutPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">About Quick Provide</h2>
                <p className="text-gray-700 mb-4 max-w-3xl mx-auto md:mx-0">
                    <strong>Quick Provide Flex Printing And Advertising</strong>, based in Okhla, New Delhi,
                    specializes in high-quality flex printing, branding, and advertising solutions.
                    Owned and managed by <strong>Rajesh Kumar</strong>, the company is registered under
                    <strong> UDYAM-DL-08-0095527</strong> and holds GSTIN <strong>07BDUPK7506B1ZH</strong>.
                    With a commitment to creativity and reliability, we deliver impactful advertising
                    solutions that help businesses stand out in today’s competitive market.
                </p>
                <div className="text-gray-700 mb-4">
                    <p>Email: <a href="mailto:kpcontrol@gmail.com" className="text-indigo-600 hover:underline">kpcontrol@gmail.com</a></p>
                    <p>Phone: <a href="tel:+919650403275" className="text-indigo-600 hover:underline">+91 96504 03275</a></p>
                </div>
                <Link to="/about" className="text-indigo-600 hover:underline font-semibold">
                    Read More →
                </Link>
            </div>
        </section>
    );
}
