import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function VisionMission() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                    Our <span className="text-indigo-600">Vision & Mission</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
                        <div className="flex justify-center mb-4 text-indigo-600 text-5xl">
                            <FaEye />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To become the most trusted and innovative <b>flex printing &
                                advertising partner</b> in Delhi NCR, known for high-quality
                            prints, timely delivery, and creative branding solutions that
                            empower businesses to stand out.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
                        <div className="flex justify-center mb-4 text-yellow-500 text-5xl">
                            <FaBullseye />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to deliver <b>top-notch flex, banners, hoardings,
                                glow signs, and corporate branding</b> at affordable prices with
                            exceptional customer service — helping businesses maximize their
                            visibility and impact through smart advertising.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
