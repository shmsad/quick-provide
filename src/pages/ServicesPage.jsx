// src/pages/ServicesPage.jsx
import React from "react";
import ServicesSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";

export default function ServicesPage() {
    return (
        <div className="pt-12">
            <HeroSection
                title="Our Services"
                description="We provide professional printing and promotional solutions for banners, flex, vinyl, glow signs, digital prints, and more."
            />
            <ServicesSection />
        </div>
    );
}
