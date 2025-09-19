// Footer.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
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
        <footer className="bg-gray-900 text-white py-14 mt-10 shadow-xl">
            <div className="container mx-auto grid md:grid-cols-4 gap-10 px-6">

                {/* About */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-indigo-400">About Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                        QUICK PROVIDE FLEX PRINTING & ADVERTISING is a trusted service provider in Delhi NCR,
                        offering premium flex printing, hoardings, banners, glow signs & corporate advertising solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-indigo-400">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/" className="hover:text-indigo-300 transition">🏠 Home</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-300 transition">ℹ️ About</Link></li>
                        <li><Link to="/services" className="hover:text-indigo-300 transition">🛠 Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-indigo-300 transition">🖼 Gallery</Link></li>
                        <li><Link to="/certificates" className="hover:text-indigo-300 transition">📜 Certificates</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-300 transition">📞 Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-indigo-400">Our Services</h3>
                    <ul className="flex flex-col gap-2 text-gray-300">
                        <li>
                            <Link to="/products/flex-printing" className="hover:text-indigo-300 transition">
                                ✅ Flex & Vinyl Printing
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/glow-sign" className="hover:text-indigo-300 transition">
                                ✅ Glow Sign Boards
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/pos" className="hover:text-indigo-300 transition">
                                ✅ Acrylic Signage
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/banners" className="hover:text-indigo-300 transition">
                                ✅ Hoardings & Banners
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/glow-sign" className="hover:text-indigo-300 transition">
                                ✅ LED Boards
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/flex-printing" className="hover:text-indigo-300 transition">
                                ✅ One-Way Vision & Branding
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-indigo-300 transition">
                                ✅ Corporate Advertising
                            </Link>
                        </li>
                    </ul>

                    {/* Stylish Web Link Button */}
                    <div className="mt-4 text-center">
                        <a
                            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX" // ← Apni website link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
                        >
                            🌐 Visit Our Website
                        </a>
                    </div>
                    {/* Stylish Visitor Counter */}
                    <p className="mt-4 text-sm flex items-center gap-2">
                        <span className="animate-pulse text-green-400 text-lg">👁</span>
                        <span className="font-semibold text-white">{visits}</span> Visitors
                    </p>
                </div>

                {/* Contact + Counter + Translator + Newsletter */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-indigo-400">Contact Us</h3>
                    <p className="text-gray-300">📍 Okhla Industrial Area, Phase-II, New Delhi - 110020</p>
                    <p className="text-gray-300 mt-2">📞 +91-9650403275, +91-9971001036</p>
                    <p className="text-gray-300">✉️ kpcontrol@gmail.com</p>

                    <p className="text-gray-400 mt-2 text-sm">
                        UDYAM-DL-08-0095527 | GSTIN: 07BDUPK7506B1ZH
                    </p>
                    <p className="text-gray-400 text-sm">Owner: Rajesh Kumar</p>

                    {/* Translator */}
                    <div className="mt-4">
                        <button
                            onClick={() => setShowTranslator(!showTranslator)}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition transform text-white px-4 py-2 rounded-lg shadow-md w-full"
                        >
                            🌍 Translate Website
                        </button>
                        {showTranslator && (
                            <div className="mt-3 p-3 bg-gray-800 rounded-lg shadow-md">
                                <Translator />
                            </div>
                        )}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-2xl justify-center">
                        <a href="#" className="hover:text-indigo-400"><FaFacebook /></a>
                        <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
                        <a href="#" className="hover:text-green-400"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Quick Provide Flex Printing & Advertising. All rights reserved.
            </div>
        </footer>
    );
}
