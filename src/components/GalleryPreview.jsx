import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPreview({ images = [], limit = 6 }) {
    const previewImages = images.slice(0, limit);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                    Our <span className="text-indigo-600">Portfolio</span>
                </h2>

                {/* Grid of Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {previewImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition group"
                        >
                            <img
                                src={img}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-10">
                    <Link
                        to="/gallery"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                    >
                        View Full Gallery →
                    </Link>
                </div>
            </div>
        </section>
    );
}
