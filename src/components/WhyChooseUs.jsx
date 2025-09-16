// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";

const items = [
    { title: "ISO Certified", desc: "ISO 9001:2015 certified company", emoji: "✅" },
    { title: "Government Approved", desc: "Licensed & government approved", emoji: "🏛️" },
    { title: "24x7 Support", desc: "Emergency services available", emoji: "⏰" },
    { title: "Expert Team", desc: "Skilled technicians & safe processes", emoji: "👨‍🔧" },
];

export default function WhyChooseUs() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-8">Why Choose QuickProvide?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((it, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow-md text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <div className="text-4xl mb-3">{it.emoji}</div>
                            <h4 className="font-semibold mb-1">{it.title}</h4>
                            <p className="text-sm text-gray-600">{it.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
