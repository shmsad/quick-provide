import React, { createContext, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const services = [
        { id: 1, title: "Flex Printing", description: "High-quality flex printing services for indoor and outdoor branding.", icon: "flex" },
        { id: 2, title: "Hoardings & Banners", description: "Large format hoardings, banners, and posters for impactful advertisement.", icon: "banner" },
        { id: 3, title: "Glow Sign Boards", description: "Attractive glow sign boards with LED/Neon options for shops & offices.", icon: "glow" },
        { id: 4, title: "Vinyl Printing", description: "Custom vinyl printing for walls, glass, and vehicles.", icon: "vinyl" },
        { id: 5, title: "Canopy & Standee", description: "Promotional canopy and standee design & printing for events.", icon: "canopy" },
        { id: 6, title: "Digital Printing", description: "High-resolution digital printing for brochures, flyers, and visiting cards.", icon: "digital" },
    ];

    const gallery = [
        "/images/flex1.jpeg", "/images/flex2.jpeg", "/images/flex3.jpeg",
        "/images/banner1.jpeg", "/images/banner2.jpg", "/images/banner3.jpeg",
        "/images/board1.jpg", "/images/board2.jpg"
    ];

    const certificates = [
        { id: 1, title: "UDYAM Registration Certificate", file: "/certificates/udyam.pdf" },
        { id: 2, title: "GSTIN Certificate", file: "/certificates/gstin.pdf" },
    ];

    const contact = {
        company: "Quick Provide Flex Printing & Advertising",
        phones: ["8178290067", "9650403275"],
        email: "kpflexprint@gmail.com",
        address: "Okhla Industrial Area, New Delhi - 110025, India",
        gstin: "07BDUPK7506B1ZH",
        udyam: "UDYAM-DL-08-0095527",
        owner: "Rajesh Kumar",
    };


    return (
        <AppContext.Provider value={{ services, gallery, certificates, contact }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
