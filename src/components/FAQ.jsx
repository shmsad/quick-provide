import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    { question: "What types of printing services do you offer?", answer: "We specialize in flex printing, banners, posters, hoardings, branding materials, and custom advertising solutions tailored to your business needs." },
    { question: "Do you provide design support along with printing?", answer: "Yes, our creative team assists with graphic design, layout, and customization to ensure your brand message is impactful and professional." },
    { question: "What is the usual turnaround time for printing orders?", answer: "Most orders are completed within 2-5 business days, depending on the size and complexity of the project. Urgent services are also available on request." },
    { question: "Do you offer bulk order discounts?", answer: "Yes, we provide competitive pricing and special discounts on bulk and recurring orders for businesses and organizations." },
    { question: "Where are you located and do you deliver?", answer: "We are based in Okhla, New Delhi. Delivery services are available across Delhi NCR for your convenience." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Frequently Asked <span className="text-indigo-600">Questions</span>
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((faq, i) => (
                        <motion.div
                            key={i}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl shadow-2xl cursor-pointer overflow-hidden"
                            onClick={() => toggleFAQ(i)}
                        >
                            <div className="flex justify-between items-center p-6">
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                {openIndex === i ? <ChevronUp /> : <ChevronDown />}
                            </div>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-gray-600"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
