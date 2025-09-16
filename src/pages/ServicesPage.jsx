import React from "react";
import { useAppContext } from "../context/AppContext";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
export default function ServicesPage() {
    const { services } = useAppContext();

    return (
        <div className="container mx-auto py-12">
            <HeroSection
                title="Our Services"
                description="We provide professional pest control solutions including termite treatment, bedbug control, cockroach treatment, rat control, and more."
            />

            {/* Services content here */}
            <ServiceSection services={services} title="All Our Services" />
        </div>

    );
}
