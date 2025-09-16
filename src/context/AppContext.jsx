import React, { createContext, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const services = [
        { id: 1, title: "Pre & Post Construction Anti Termite Treatment", description: "Government approved preventive and post-construction anti termite solutions.", icon: "termite" },
        { id: 2, title: "Termite Treatment", description: "Effective termite treatment service under Lic. No.: 10688 and ISO 9001:2015 certification.", icon: "termite2" },
        { id: 3, title: "Bedbug Control", description: "Safe and fast bedbug elimination for homes, offices, and hotels.", icon: "bedbug" },
        { id: 4, title: "Cockroach Control", description: "Cockroach control using herbal and gel-based treatments for long-lasting relief.", icon: "cockroach" },
        { id: 5, title: "Herbal & Gel Treatment", description: "Eco-friendly herbal and gel pest control solutions.", icon: "herbal" },
        { id: 6, title: "Rat Control", description: "Professional rat control service to maintain hygiene and safety.", icon: "rat" },
    ];

    const gallery = [
        "/images/gallery15.jpg", "/images/gallery16.jpg", "/images/gallery17.jpg",
        "/images/gallery11.jpg", "/images/gallery13.jpg", "/images/gallery14.jpg",
        "/images/g1.jpg", "/images/g4.jpg", "/images/g3.jpg", "/images/g4.jpg",
        "/images/gallery5.jpg", "/images/gallery7.jpg"
    ];

    const certificates = [
        { id: 1, title: "ISO 9001:2015 Certification", file: "/certificates/iso-9001.pdf" },
        { id: 2, title: "Government Approval License", file: "/certificates/govt-approval.pdf" },
        { id: 3, title: "Pest Control License No. 10688", file: "/certificates/license.pdf" },
    ];

    const contact = {
        company: "QUICK PROVIDE PEST CONTROL SERVICE",
        phones: ["8178290067", "9650403275"],
        email: "info@quickprovide.co.in",
        address: "G-1, Anupam Plaza, Hauz Khas, Opp. Azad Aptts., Sri Aurobindo Marg, New Delhi-110016, India",
        license: "Lic. No. 10688",
        iso: "ISO 9001:2015",
    };

    return (
        <AppContext.Provider value={{ services, gallery, certificates, contact }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
