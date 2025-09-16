// src/components/Stats.jsx
import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "1000+", label: "Happy Clients" },
    { value: "500+", label: "Projects Completed" },
    { value: "ISO 9001:2015", label: "Certified" },
];

export default function Stats() {
    return (
        <section className="py-8 bg-gradient-to-r from-indigo-50 to-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white rounded-xl p-6 shadow">
                            <div className="text-2xl font-bold">{s.value}</div>
                            <div className="text-sm text-gray-600">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
