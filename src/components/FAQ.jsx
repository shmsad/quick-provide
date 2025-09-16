// src/components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    {
        question: "How long does a typical pest control treatment take?",
        answer:
            "Most treatments are completed within 1-3 hours depending on the property size and type of pests. We provide a detailed report after the service."
    },
    {
        question: "Are the chemicals safe for children and pets?",
        answer:
            "Yes, we use eco-friendly and government-approved products that are safe when applied correctly."
    },
    {
        question: "How often should I schedule pest control?",
        answer:
            "For preventive care, we recommend quarterly visits. For active infestations, we tailor a schedule based on the situation."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-indigo-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </div>
                            {openIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
