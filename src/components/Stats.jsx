import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "10+", label: "Years in Printing" },
    { value: "500+", label: "Projects Completed" },
    { value: "300+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" },
];

export default function Stats() {
    return (
        <section className="py-12 bg-gradient-to-r from-indigo-50 to-white">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-indigo-600">{s.value}</div>
                        <div className="text-gray-600 mt-2">{s.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
