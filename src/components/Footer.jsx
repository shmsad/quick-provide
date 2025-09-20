import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaHome, FaInfoCircle, FaTools,
    FaImages, FaFileAlt, FaPhone, FaEye, FaMapMarkerAlt, FaEnvelope
} from "react-icons/fa";

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
        <footer className="bg-gray-900 bg-opacity-80 text-white py-14 backdrop-blur-md shadow-inner">
            <div className="container mx-auto grid md:grid-cols-4 gap-10 px-6">

                {/* About */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
                        About Us
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                        QUICK PROVIDE FLEX PRINTING & ADVERTISING is a trusted service provider in Delhi NCR,
                        offering premium flex printing, hoardings, banners, glow signs & corporate advertising solutions.
                    </p>
                    {/* Translator + Web Link Buttons */}
                    <div className="mt-4 flex flex-col md:flex-row gap-3">
                        <button
                            onClick={() => setShowTranslator(!showTranslator)}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition transform text-white px-4 py-2 rounded-lg shadow-md w-full md:w-auto flex-1 text-center font-semibold"
                        >
                            🌍 Translator
                        </button>
                        {showTranslator && (
                            <div className="mt-1 p-3 bg-gray-800 bg-opacity-70 rounded-lg shadow-md backdrop-blur-md md:absolute">
                                <Translator />
                            </div>
                        )}
                        <a
                            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition transform text-white px-4 py-2 rounded-lg shadow-md w-full md:w-auto flex-1 text-center font-semibold"
                        >
                            🌐 Web Link
                        </a>
                    </div>

                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
                        Quick Links
                    </h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/" className="hover:text-indigo-300 transition"><FaHome className="inline mr-2" />Home</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-300 transition"><FaInfoCircle className="inline mr-2" />About</Link></li>
                        <li><Link to="/services" className="hover:text-indigo-300 transition"><FaTools className="inline mr-2" />Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-indigo-300 transition"><FaImages className="inline mr-2" />Gallery</Link></li>
                        <li><Link to="/certificates" className="hover:text-indigo-300 transition"><FaFileAlt className="inline mr-2" />Certificates</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-300 transition"><FaPhone className="inline mr-2" />Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
                        Our Services
                    </h3>
                    <ul className="flex flex-col gap-2 text-gray-200">
                        <li><Link to="/products/flex-printing" className="hover:text-indigo-300 transition">Flex & Vinyl Printing</Link></li>
                        <li><Link to="/products/glow-sign" className="hover:text-indigo-300 transition">Glow Sign Boards</Link></li>
                        <li><Link to="/products/pos" className="hover:text-indigo-300 transition">Acrylic Signage</Link></li>
                        <li><Link to="/products/banners" className="hover:text-indigo-300 transition">Hoardings & Banners</Link></li>
                        <li><Link to="/products/glow-sign" className="hover:text-indigo-300 transition">LED Boards</Link></li>
                        <li><Link to="/products/flex-printing" className="hover:text-indigo-300 transition">One-Way Vision & Branding</Link></li>
                        <li><Link to="/services" className="hover:text-indigo-300 transition">Corporate Advertising</Link></li>
                    </ul>
                    {/* Visitor Counter */}
                    <p className="mt-4 text-sm flex items-center gap-2 justify-center md:justify-start">
                        <FaEye className="text-green-400 text-lg animate-pulse" />
                        <span className="font-semibold text-white">{visits}</span> Visitors
                    </p>
                </div>

                {/* Contact + Social */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
                        Contact Us
                    </h3>
                    <p className="text-gray-200"><FaMapMarkerAlt className="inline mr-2" />Okhla Industrial Area, Phase-II, New Delhi - 110020</p>
                    <p className="text-gray-200 mt-2"><FaPhone className="inline mr-2" />+91-9650403275, +91-9971001036</p>
                    <p className="text-gray-200"><FaEnvelope className="inline mr-2" />kpcontrol@gmail.com</p>
                    <p className="text-gray-400 mt-2 text-sm">UDYAM-DL-08-0095527 | GSTIN: 07BDUPK7506B1ZH</p>
                    <p className="text-gray-400 text-sm">Owner: Rajesh Kumar</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-2xl justify-center md:justify-start">
                        <a href="#" className="hover:text-indigo-400 transition"><FaFacebook /></a>
                        <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-400 transition"><FaLinkedin /></a>
                        <a href="#" className="hover:text-green-400 transition"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300 text-sm flex flex-col gap-1">
                <span>&copy; {new Date().getFullYear()} Quick Provide Flex Printing & Advertising. All rights reserved.</span>
                <span>
                    Developed & Designed by{" "}
                    <a
                        href="https://webworldhub.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-yellow-400 font-semibold transition-colors"
                    >
                        Web World Hub
                    </a>
                </span>
            </div>

        </footer>
    );
}
