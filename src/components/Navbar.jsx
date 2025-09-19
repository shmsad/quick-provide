// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { FaPrint, FaFileAlt, FaStore } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Navbar() {
    const { services } = useAppContext();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const navigate = useNavigate();
    const menuPaths = ["/", "/products", "/about", "/services", "/gallery", "/contact"];
    const active = ({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "text-gray-700");

    const getIcon = (title) => {
        if (title.includes("Flex")) return <FaPrint size={24} className="text-indigo-600" />;
        if (title.includes("Banner")) return <FaFileAlt size={24} className="text-indigo-600" />;
        if (title.includes("Point") || title.includes("POS")) return <FaStore size={24} className="text-indigo-600" />;
        if (title.includes("Glow") || title.includes("Sign")) return <HiOutlinePhotograph size={24} className="text-indigo-600" />;
        return <FaPrint size={24} className="text-indigo-600" />;
    };

    return (
        <header className="fixed w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
                <NavLink to="/">
                    <img src="/images/main_logo.png" alt="Logo" className="h-12 w-12 rounded-full" />
                </NavLink>

                <nav className="hidden md:flex gap-6 items-center relative">
                    {menuPaths.map((path, idx) =>
                        path !== "/products" ? (
                            <NavLink key={idx} to={path} className={active}>
                                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            </NavLink>
                        ) : (
                            <div key={idx} className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => { setDropdownOpen(false); setActiveCategory(null); }}
                            >
                                <NavLink to="/products" className="flex items-center gap-1 text-gray-700 font-semibold">
                                    Products <ChevronDown size={16} />
                                </NavLink>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full left-0 mt-2 w-[700px] bg-white shadow-xl rounded-xl p-4 flex gap-4 z-50"
                                        >
                                            <div className="w-1/3 flex flex-col gap-2">
                                                {services.map((cat, idx) => (
                                                    <div key={idx} className={`flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-indigo-50 ${activeCategory === idx ? "bg-indigo-100 font-semibold" : ""}`}
                                                        onMouseEnter={() => setActiveCategory(idx)}
                                                        onClick={() => navigate(`/products/${encodeURIComponent(cat.title)}`)}
                                                    >
                                                        {getIcon(cat.title)} <span>{cat.title}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {activeCategory !== null &&
                                                    (services[activeCategory].subcategories || []).map((sub, i) => (
                                                        <div key={i} className="bg-blue-50 p-3 rounded shadow hover:shadow-md cursor-pointer"
                                                            onClick={() => navigate(`/products/${encodeURIComponent(services[activeCategory].title)}/${encodeURIComponent(sub.name)}`)}
                                                        >
                                                            <h5 className="font-semibold text-indigo-700 mb-1">{sub.name}</h5>
                                                            <ul className="list-disc list-inside text-gray-600 text-sm">
                                                                {sub.examples.map((ex, idx) => <li key={idx}>{ex}</li>)}
                                                            </ul>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    )}
                </nav>
            </div>
        </header>
    );
}
