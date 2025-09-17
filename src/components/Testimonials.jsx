// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Amit Kumar",
        text: "Quick Provide delivered amazing flex banners for our product launch. The print quality was outstanding and on-time delivery was a big plus!",
        stars: 5
    },
    {
        name: "Priya S.",
        text: "Very professional team! They helped us design and print posters for our campaign. The colors were vibrant and customer support was excellent.",
        stars: 5
    },
    {
        name: "Rahul M.",
        text: "Got my shop hoarding printed here. The material quality was durable and finishing was perfect. Highly recommended for businesses.",
        stars: 4
    },
];

export default function Testimonials() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white p-6 rounded-xl shadow"
                        >
                            <div className="text-yellow-500 mb-2">
                                {Array.from({ length: r.stars }).map((_, k) => "★").join("")}
                            </div>
                            <p className="text-gray-700 mb-4">“{r.text}”</p>
                            <div className="font-semibold">{r.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
