// src/components/ServicesSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

const services = [
    {
        id: 1,
        title: "Flex Printing",
        description: "High-quality flex printing for indoor & outdoor branding.",
        image: "/images/s1.jpeg",
    },
    {
        id: 2,
        title: "Hoardings & Banners",
        description: "Large format hoardings, banners, and posters for impactful advertisement.",
        image: "/images/s2.jpeg",
    },
    {
        id: 3,
        title: "Glow Sign Boards",
        description: "Attractive glow sign boards with LED/Neon options for shops & offices.",
        image: "/images/s3.jpeg",
    },
    {
        id: 4,
        title: "Vinyl Printing",
        description: "Custom vinyl printing for walls, glass, and vehicles.",
        image: "/images/s4.jpeg",
    },
    {
        id: 5,
        title: "Canopy & Standee",
        description: "Promotional canopy and standee design & printing for events.",
        image: "/images/s5.jpeg",
    },
    {
        id: 6,
        title: "Digital Printing",
        description: "High-resolution digital printing for brochures, flyers, and visiting cards.",
        image: "/images/s6.jpeg",
    },
];

export default function ServicesSection() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section className="py-20 px-6 bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
                Our Services
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15, type: "spring", stiffness: 150 }}
                    >
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            onLearnMore={() => setSelectedService(service)}
                        />
                    </motion.div>
                ))}
            </div>

            <ServiceModal
                open={!!selectedService}
                item={selectedService}
                onClose={() => setSelectedService(null)}
            />
        </section>
    );
}
