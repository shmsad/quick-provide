// src/components/AboutPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">About QuickProvide</h2>
                <p className="text-gray-700 mb-4 max-w-3xl mx-auto md:mx-0">
                    QUICK PROVIDE PEST CONTROL SERVICE is an ISO 9001:2015 certified company, offering
                    expert pest control solutions across New Delhi. We provide reliable, safe, and eco-friendly
                    treatments tailored for homes and businesses.
                </p>
                <Link to="/about" className="text-indigo-600 hover:underline font-semibold">
                    Read More →
                </Link>
            </div>
        </section>
    );
}
