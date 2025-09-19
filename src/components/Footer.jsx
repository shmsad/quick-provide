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
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-14 mt-10 shadow-lg">
            <div className="container mx-auto grid md:grid-cols-4 gap-10 px-6">

                {/* About */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-400">About Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                        QUICK PROVIDE FLEX PRINTING & ADVERTISING is a trusted
                        service provider in Delhi NCR offering premium flex printing,
                        hoardings, banners, glow signs & corporate advertising solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-400">Quick Links</h3>
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
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-400">Our Services</h3>
                    <ul className="flex flex-col gap-2 text-gray-300">
                        <li>✅ Flex & Vinyl Printing</li>
                        <li>✅ Glow Sign Boards</li>
                        <li>✅ Acrylic Signage</li>
                        <li>✅ Hoardings & Banners</li>
                        <li>✅ LED Boards</li>
                        <li>✅ One-Way Vision & Branding</li>
                        <li>✅ Corporate Advertising</li>
                    </ul>
                </div>

                {/* Contact + Counter + Translator + Newsletter */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-400">Contact Us</h3>
                    <p className="text-gray-300">📍 Okhla Industrial Area, Phase-II, New Delhi - 110020</p>
                    <p className="text-gray-300 mt-2">📞 +91-9650403275, +91-9971001036</p>
                    <p className="text-gray-300">✉️ kpcontrol@gmail.com</p>

                    <p className="text-gray-400 mt-2 text-sm">
                        UDYAM-DL-08-0095527 | GSTIN: 07BDUPK7506B1ZH
                    </p>
                    <p className="text-gray-400 text-sm">Owner: Rajesh Kumar</p>

                    {/* Stylish Visitor Counter */}
                    <p className="mt-4 text-sm flex items-center gap-2">
                        <span className="animate-pulse text-green-400 text-lg">👁</span>
                        <span className="font-semibold text-white">{visits}</span> Visitors
                    </p>

                    {/* Translator */}
                    <div className="mt-6">
                        <button
                            onClick={() => setShowTranslator(!showTranslator)}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition transform text-white px-4 py-2 rounded-lg shadow-md"
                        >
                            🌍 Translate Website
                        </button>
                        {showTranslator && (
                            <div className="mt-4 p-3 bg-gray-800 rounded-lg shadow-md">
                                <Translator />
                            </div>
                        )}
                    </div>

                    {/* Newsletter */}
                    <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-3 text-indigo-400">Subscribe to Newsletter</h4>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 rounded-lg w-full text-black"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-xl">
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
