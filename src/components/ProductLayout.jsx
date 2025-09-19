import React from "react";
import CallToAction from "./CallToAction";
import GalleryPreview from "./GalleryPreview";

export default function ProductLayout({
    title,
    subtitle,
    description,
    heroImage,
    gradient,
    features,
    accentColor = "indigo"
}) {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-120 flex items-center justify-center text-white">
                <img
                    src={heroImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient}`}
                ></div>
                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        {title}
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-200">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    {description}
                </p>

                {/* Features Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:scale-105 transition transform"
                        >
                            <div className="mb-3">{item.icon}</div>
                            <h3
                                className={`text-xl font-semibold text-${accentColor}-600 mb-2`}
                            >
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Gallery */}
                <GalleryPreview />

                {/* CTA */}
                <CallToAction />
            </div>
        </div>
    );
}
