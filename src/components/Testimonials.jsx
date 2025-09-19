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
        <section className="py-16 bg-indigo-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                    What Our <span className="text-indigo-600">Clients Say</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
                            className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2"
                        >
                            <div className="text-yellow-400 mb-2">
                                {Array.from({ length: r.stars }).map((_, k) => "★").join("")}
                            </div>
                            <p className="mb-4 italic">“{r.text}”</p>
                            <div className="font-semibold">{r.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
