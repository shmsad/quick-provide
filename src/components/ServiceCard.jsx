// src/components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, image, onLearnMore }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-lg rounded-3xl p-6 text-center hover:shadow-2xl transition-all"
        >
            <div className="flex justify-center mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl mx-auto border-2 border-indigo-500"
                />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLearnMore}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-500 transition cursor-pointer"
            >
                Learn More
            </motion.button>
        </motion.div>
    );
}
