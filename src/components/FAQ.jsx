// src/components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    {
        question: "What types of printing services do you offer?",
        answer:
            "We specialize in flex printing, banners, posters, hoardings, branding materials, and custom advertising solutions tailored to your business needs."
    },
    {
        question: "Do you provide design support along with printing?",
        answer:
            "Yes, our creative team assists with graphic design, layout, and customization to ensure your brand message is impactful and professional."
    },
    {
        question: "What is the usual turnaround time for printing orders?",
        answer:
            "Most orders are completed within 2-5 business days, depending on the size and complexity of the project. Urgent services are also available on request."
    },
    {
        question: "Do you offer bulk order discounts?",
        answer:
            "Yes, we provide competitive pricing and special discounts on bulk and recurring orders for businesses and organizations."
    },
    {
        question: "Where are you located and do you deliver?",
        answer:
            "We are based in Okhla, New Delhi. Delivery services are available across Delhi NCR for your convenience."
    }
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
