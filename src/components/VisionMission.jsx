import React from "react";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";

export default function VisionMission() {
    const items = [
        {
            icon: <FaEye />,
            title: "Our Vision",
            desc: "To become the most trusted flex printing & advertising partner in Delhi NCR, known for innovation, quality, and customer satisfaction. We aim to set new standards in creativity and durability, delivering solutions that help businesses grow and stand out. Our vision extends to adopting eco-friendly materials and sustainable practices, ensuring a positive impact on the environment while providing premium advertising solutions.",
            points: [
                "Innovative and creative advertising solutions",
                "Eco-friendly and sustainable practices",
                "Help businesses stand out and grow",
                "Set benchmarks in quality and durability"
            ]
        },
        {
            icon: <FaBullseye />,
            title: "Our Mission",
            desc: "Deliver top-notch flex, banners, hoardings, glow signs, and corporate branding at affordable prices, while maintaining exceptional quality and timely service. We strive to combine cutting-edge technology with skilled craftsmanship to meet every client's unique requirements. Our mission is to empower businesses with impactful branding solutions, create long-term relationships, and foster innovation in every project we undertake.",
            points: [
                "Exceptional quality at affordable prices",
                "Timely delivery and reliable service",
                "Empower businesses with impactful branding",
                "Foster innovation in every project"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12">
                Our <span className="text-indigo-600">Vision & Mission</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {items.map((item, i) => (
                    <div key={i} className="bg-indigo-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-indigo-500 text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-700 text-justify mb-4">{item.desc}</p>
                        <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
                            {item.points.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-indigo-500" /> {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
