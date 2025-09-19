import React from "react";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutPreview from "../components/AboutPreview";
import CallToAction from "../components/CallToAction";
import { useAppContext } from "../context/AppContext";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import VisionMission from "../components/VisionMission";
import GalleryPreview from "../components/GalleryPreview";


export default function Home() {
    const { services } = useAppContext();

    return (
        <div>
            <Hero />
            <AboutPreview />
            <ServiceSection services={services} limit={3} />
            <WhyChooseUs />
            <VisionMission/>
            <Stats/>
            <GalleryPreview/>
            <Testimonials/>
            <FAQ/>
            <CallToAction />
        </div>
    );
}
