import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

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
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
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

                {/* Contact Info */}
                <div className="space-y-4 text-gray-700">
                    <p><strong>Company:</strong> {contact.company}</p>
                    <p><strong>Phone:</strong> {contact.phones.join(", ")}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Address:</strong> {contact.address}</p>
                    <p><strong>License:</strong> {contact.license}</p>
                    <p><strong>ISO:</strong> {contact.iso}</p>
                </div>
            </div>
        </section>
    );
}
