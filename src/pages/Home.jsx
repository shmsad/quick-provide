import React from "react";
import Hero from "../components/Hero";
import { useAppContext } from "../context/AppContext";
import ServiceSection from "../components/ServiceSection";

export default function Home() {
    const { services } = useAppContext();

    return (
        <div>
            <Hero />

            {/* Show only 3 services on Home */}
            <ServiceSection services={services} limit={3} />

        </div>
    );
}
