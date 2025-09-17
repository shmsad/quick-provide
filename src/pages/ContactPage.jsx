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
            <HeroSection
                title="Contact Us"
                description="Get in touch with Quick Provide Flex Printing & Advertising for banners, flex, hoardings, and other print solutions."
            />

            {/* Contact form / details */}
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
                                <p className="text-red-600">❌ Something went wrong. Try again.</p>
                            )}
                        </form>

                        {/* Minimal Contact Info */}
                        <div className="mt-6 text-sm text-gray-600 space-y-1">
                            <p><strong>📞</strong> {contact.phones.join(" / ")}</p>
                            <p><strong>📧</strong> {contact.email}</p>
                            <p><strong>📍</strong> {contact.address}</p>
                        </div>
                    </div>

                    {/* Google Map */}
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
        </div>
    );
}
