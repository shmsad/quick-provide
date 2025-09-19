import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <motion.section
            className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Need High-Quality Printing & Advertising?
                </h2>
                <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl">
                    Partner with <strong>Quick Provide Flex Printing And Advertising</strong> in Okhla,
                    New Delhi for impactful designs, reliable printing, and creative advertising solutions
                    that help your business stand out.
                </p>
                <Link
                    to="/contact"
                    className="inline-block px-8 py-4 rounded-xl bg-white text-indigo-600 font-bold shadow-2xl hover:scale-105 transform transition duration-300"
                >
                    Get a Free Quote
                </Link>
            </div>
        </motion.section>
    );
}
