// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import VisionMission from "../components/VisionMission";
import Stats from "../components/Stats";
import GalleryPreview from "../components/GalleryPreview";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";
import Team from "../components/Team.jsx"; // ✅ Import Team
import { useAppContext } from "../context/AppContext";

export default function Home() {
    const { services, galleryImages, teamMembers } = useAppContext(); // ✅ Include teamMembers

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <Hero />

            {/* About Preview */}
            <AboutPreview />

            {/* Service Section */}
            <ServiceSection services={services} limit={3} />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Vision & Mission */}
            <VisionMission />

            {/* Stats */}
            <Stats />

            {/* Team Section */}
            <Team members={teamMembers} /> {/* ✅ Team added */}

            {/* Gallery Preview */}
            <GalleryPreview images={galleryImages} limit={6} />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* Call To Action */}
            <CallToAction />
        </div>
    );
}
