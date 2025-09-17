import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Translator from "./Translator";

export default function Footer() {
    const [visits, setVisits] = useState(0);
    const [showTranslator, setShowTranslator] = useState(false);
    const hasIncremented = useRef(false);

    useEffect(() => {
        if (hasIncremented.current) return;
        hasIncremented.current = true;

        let totalVisits = parseInt(localStorage.getItem("total_visits") || "0");
        totalVisits += 1;
        localStorage.setItem("total_visits", totalVisits);
        setVisits(totalVisits);
    }, []);

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto grid md:grid-cols-4 gap-8">

                {/* About */}
                <div>
                    <h3 className="text-xl font-bold mb-4">About</h3>
                    <p className="text-gray-400">
                        QUICK PROVIDE FLEX PRINTING & ADVERTISING is a trusted
                        service provider in Delhi NCR offering high-quality
                        flex printing, hoardings, banners, glow signs and
                        advertising solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
                        <li><Link to="/services" className="hover:text-indigo-400">Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-indigo-400">Gallery</Link></li>
                        <li><Link to="/certificates" className="hover:text-indigo-400">Certificates</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li>Flex & Vinyl Printing</li>
                        <li>Glow Sign Boards</li>
                        <li>Acrylic Signage</li>
                        <li>Hoardings & Banners</li>
                        <li>LED Boards</li>
                        <li>One-Way Vision & Branding</li>
                        <li>Corporate Advertising</li>
                    </ul>
                </div>

                {/* Contact + Visitor Counter + Translator */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-400">
                        Okhla Industrial Area, Phase-II, New Delhi - 110020
                    </p>
                    <p className="text-gray-400 mt-2">
                        Phone: +91-9650403275, +91-9971001036
                    </p>
                    <p className="text-gray-400">Email: kpcontrol@gmail.com</p>

                    <p className="text-gray-400 mt-2 text-sm">
                        UDYAM-DL-08-0095527 | GSTIN: 07BDUPK7506B1ZH
                    </p>
                    <p className="text-gray-400 text-sm">Owner: Rajesh Kumar</p>

                    {/* Visit Counter */}
                    <p className="text-gray-400 mt-4 text-sm">
                        🔁 Total Page Visits: <span className="font-semibold">{visits}</span>
                    </p>

                    {/* Translator */}
                    <div className="mt-6">
                        <button
                            onClick={() => setShowTranslator(!showTranslator)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                        >
                            🌍 Translate Website
                        </button>
                        {showTranslator && <Translator />}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Quick Provide Flex Printing & Advertising. All rights reserved.
            </div>
        </footer>
    );
}
