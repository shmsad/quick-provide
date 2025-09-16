import React from "react";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutPreview from "../components/AboutPreview";
import CallToAction from "../components/CallToAction";
import { useAppContext } from "../context/AppContext";

export default function Home() {
    const { services } = useAppContext();

    return (
        <div>
            <Hero />
            <AboutPreview />
            <ServiceSection services={services} limit={3} />
            <WhyChooseUs />
            <CallToAction />
        </div>
    );
}
