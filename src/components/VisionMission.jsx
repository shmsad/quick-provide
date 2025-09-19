import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function VisionMission() {
    return (
        <section className="py-16 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12">
                Our <span className="text-indigo-600">Vision & Mission</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {[{
                    icon: <FaEye />,
                    title: "Our Vision",
                    desc: "To become the most trusted flex printing & advertising partner in Delhi NCR."
                }, {
                    icon: <FaBullseye />,
                    title: "Our Mission",
                    desc: "Deliver top-notch flex, banners, hoardings, glow signs, and corporate branding at affordable prices."
                }].map((item, i) => (
                    <div key={i} className="bg-indigo-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
                        <div className="text-indigo-500 text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
