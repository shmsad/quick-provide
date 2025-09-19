import React from "react";
import { motion } from "framer-motion";

const items = [
    { title: "ISO Certified", desc: "ISO 9001:2015 certified printing services", emoji: "✅" },
    { title: "UDYAM & GSTIN Registered", desc: "Government recognized business", emoji: "🏛️" },
    { title: "Fast Delivery", desc: "Quick turnaround for all print orders", emoji: "⏰" },
    { title: "Expert Designers", desc: "Creative team for banners, flex & hoardings", emoji: "🎨" },
];

export default function WhyChooseUs() {
    return (
        <section className="py-16 bg-indigo-50">
            <h3 className="text-4xl font-bold text-center mb-12">Why Choose Quick Provide?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {items.map((it, i) => (
                    <motion.div
                        key={i}
                        className="p-6 rounded-3xl shadow-lg bg-gradient-to-br from-white to-indigo-100 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="text-5xl mb-4">{it.emoji}</div>
                        <h4 className="font-semibold mb-2">{it.title}</h4>
                        <p className="text-gray-700 text-sm">{it.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
