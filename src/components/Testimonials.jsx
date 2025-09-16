// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const reviews = [
    { name: "Amit Kumar", text: "Very professional team, solved our termite issue completely.", stars: 5 },
    { name: "Priya S.", text: "Quick response and excellent service. Highly recommended.", stars: 5 },
    { name: "Rahul M.", text: "Safe herbal treatment was effective and odorless.", stars: 4 },
];

export default function Testimonials() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-8">What Clients Say</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white p-6 rounded-xl shadow">
                            <div className="text-yellow-500 mb-2">{Array.from({ length: r.stars }).map((_, k) => "★").join("")}</div>
                            <p className="text-gray-700 mb-4">“{r.text}”</p>
                            <div className="font-semibold">{r.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
