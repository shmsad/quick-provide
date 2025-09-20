import React, { createContext, useContext } from "react";
import { FaPrint, FaFileAlt, FaStore, FaPhotoVideo, FaClipboard, FaDesktop } from "react-icons/fa";

const AppContext = createContext();

export function AppProvider({ children }) {
    const services = [
        {
            id: 1,
            title: "Flex Printing",
            description: "High-quality flex printing for indoor & outdoor branding.",
            image: "/images/services/flex-printing.jpg"
        },
        {
            id: 2,
            title: "Hoardings & Banners",
            description: "Large format hoardings, banners, and posters for impactful advertisement.",
            image: "/images/services/hoardings-banners.jpg"
        },
        {
            id: 3,
            title: "Glow Sign Boards",
            description: "Attractive glow sign boards with LED/Neon options for shops & offices.",
            image: "/images/services/glow-sign.jpg"
        },
        {
            id: 4,
            title: "Vinyl Printing",
            description: "Custom vinyl printing for walls, glass, and vehicles.",
            image: "/images/services/vinyl-printing.jpg"
        },
        {
            id: 5,
            title: "Canopy & Standee",
            description: "Promotional canopy and standee design & printing for events.",
            image: "/images/services/canopy-standee.jpg"
        },
        {
            id: 6,
            title: "Digital Printing",
            description: "High-resolution digital printing for brochures, flyers, and visiting cards.",
            image: "/images/services/digital-printing.jpg"
        },
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
    const teamMembers = [
        {
            name: "Mohd Shmsad",
            role: "Project Lead",
            image: "/images/s3.jpeg", // store images in public/images/team
        },
        {
            name: "Ayesha Khan",
            role: "Designer",
            image: "/images/s2.jpeg",
        },
        {
            name: "Rohit Singh",
            role: "Developer",
            image: "/images/s1.jpeg",
        },
        // Add more members as needed
    ];


    return (
        <AppContext.Provider value={{ services, gallery, certificates, contact, teamMembers }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
