import React from "react";
import { useAppContext } from "../context/AppContext";
import ServiceSection from "../components/ServiceSection";

export default function ServicesPage() {
    const { services } = useAppContext();

    return (
        <ServiceSection services={services} title="All Our Services" />
    );
}
