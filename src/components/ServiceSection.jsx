// src/components/ServiceSection.jsx
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

export default function ServiceSection({ services, title = "Our Services", limit }) {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleLearnMore = (service) => {
        setSelectedService(service);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
        setModalOpen(false);
    };

    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedServices.map(service => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        onLearnMore={() => handleLearnMore(service)}
                    />
                ))}
            </div>

            <ServiceModal
                open={modalOpen}
                item={selectedService}
                onClose={handleCloseModal}
            />
        </section>
    );
}
