// src/components/CallToAction.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="py-12 bg-indigo-600 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Need a Pest-Free Home?</h2>
                <p className="mb-6 max-w-xl mx-auto">
                    Contact QuickProvide today for safe, effective, and guaranteed pest control services across Delhi NCR.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                    Book a Free Inspection
                </Link>
            </div>
        </section>
    );
}
