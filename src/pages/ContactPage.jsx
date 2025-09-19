// ContactPage.jsx
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import HeroSection from "../components/HeroSection";

export default function ContactPage() {
    const { contact } = useAppContext();
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const res = await fetch("https://formspree.io/f/mvgbnwwe", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (res.ok) {
            setStatus("SUCCESS");
            e.target.reset();
        } else {
            setStatus("ERROR");
        }
    };

    return (
        <div className="container mx-auto py-12">
            {/* Hero Section */}
            <HeroSection
                title="Contact Us"
                description="Get in touch with Quick Provide Flex Printing & Advertising for banners, flex, hoardings, and other print solutions."
            />

            {/* Contact Form + Google Map */}
            <section className="container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="p-3 border rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="p-3 border rounded"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                className="p-3 border rounded h-32 resize-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>

                            {status === "SUCCESS" && (
                                <p className="text-green-600">✅ Message sent successfully!</p>
                            )}
                            {status === "ERROR" && (
                                <p className="text-red-600">
                                    ❌ Something went wrong. Try again.
                                </p>
                            )}
                        </form>

                        {/* Contact Info */}
                        <div className="mt-6 text-sm text-gray-600 space-y-1">
                            <p>
                                <strong>📞</strong> {contact.phones.join(" / ")}
                            </p>
                            <p>
                                <strong>📧</strong> {contact.email}
                            </p>
                            <p>
                                <strong>📍</strong> {contact.address}
                            </p>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="w-full h-80 md:h-full">
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.9368258284!2d77.242506!3d28.552038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb8b3fbdc0e7%3A0x52a3d4cfa66e021!2sOkhla%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded shadow"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    <div className="p-5 border rounded-lg shadow-md">
                        <h3 className="font-semibold">Q1: How can I place an order?</h3>
                        <p className="text-gray-600 mt-2">
                            You can place an order through our website or contact us directly.
                        </p>
                    </div>
                    <div className="p-5 border rounded-lg shadow-md">
                        <h3 className="font-semibold">Q2: Do you provide home delivery?</h3>
                        <p className="text-gray-600 mt-2">
                            Yes, we provide delivery across India with fast turnaround time.
                        </p>
                    </div>
                    <div className="p-5 border rounded-lg shadow-md">
                        <h3 className="font-semibold">Q3: Can I customize my order?</h3>
                        <p className="text-gray-600 mt-2">
                            Absolutely! We specialize in custom printing and advertising
                            solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-yellow-50 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Vision & Mission</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-6 border rounded-lg shadow-md bg-white">
                            <h3 className="text-2xl font-semibold mb-4">🌟 Vision</h3>
                            <p className="text-gray-700">
                                To be the leading provider of innovative and reliable printing
                                and advertising solutions, making every brand stand out with
                                creativity and quality.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-md bg-white">
                            <h3 className="text-2xl font-semibold mb-4">🎯 Mission</h3>
                            <p className="text-gray-700">
                                Our mission is to deliver exceptional printing services with
                                modern technology, customer-centric approach, and sustainable
                                practices to empower businesses and individuals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
