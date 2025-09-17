import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Header from "./Header";

const active = ({ isActive }) =>
    isActive ? "text-indigo-600 font-semibold" : "text-gray-700";

const productsData = [
    {
        category: "Large Format Printing",
        subcategories: [
            { name: "Eco Solvent Printing", examples: ["Flex Banner", "Vinyl Sticker", "Backlit Flex"] },
            { name: "UV Printing", examples: ["Acrylic Sheet Print", "Glass Print", "MDF Board Print"] },
            { name: "HP Latex Printing", examples: ["Wallpaper Printing", "Fabric Printing", "Vehicle Wraps"] },
        ],
    },
    {
        category: "Banner Printing",
        subcategories: [
            { name: "Indoor Banner", examples: ["Roll-Up Banner", "Standee"] },
            { name: "Outdoor Banner", examples: ["Hoarding", "Flex Board"] },
        ],
    },
    {
        category: "Signage",
        subcategories: [
            { name: "Glow Sign Board", examples: ["LED Sign", "ACP Board"] },
            { name: "3D Letters", examples: ["Acrylic Letters", "Steel Letters"] },
        ],
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSub, setActiveSub] = useState(null);

    const [mobileCat, setMobileCat] = useState(null);
    const [mobileSub, setMobileSub] = useState(null);

    const menuPaths = ["/", "/products", "/about", "/services", "/gallery", "/certificates", "/contact"];

    return (
        <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
            <Header />
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
                <NavLink to="/">
                    <img
                        src="/images/main_logo.png"
                        alt="Quick Provide Logo"
                        className="h-14 w-14 rounded-full object-cover relative z-10"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 relative items-center">
                    {menuPaths.map((path, idx) =>
                        path !== "/products" ? (
                            <NavLink key={idx} to={path} className={active}>
                                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            </NavLink>
                        ) : (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => {
                                    setDropdownOpen(false);
                                    setActiveCategory(null);
                                    setActiveSub(null);
                                }}
                            >
                                {/* Products Clickable */}
                                <NavLink
                                    to="/products"
                                    className="flex items-center text-gray-700 hover:text-indigo-600 font-semibold"
                                >
                                    Products <ChevronDown size={16} className="ml-1" />
                                </NavLink>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 top-full mt-2 w-64 md:w-60 bg-white shadow-lg rounded-lg z-50"
                                        >
                                            {productsData.map((cat, idx) => (
                                                <li
                                                    key={idx}
                                                    className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    onMouseEnter={() => setActiveCategory(idx)}
                                                >
                                                    <div className="flex justify-between items-center">
                                                        {cat.category} <ChevronRight size={14} />
                                                    </div>

                                                    {activeCategory === idx && (
                                                        <ul className="absolute left-full top-0 ml-1 w-64 md:w-60 bg-white shadow-lg rounded-lg">
                                                            {cat.subcategories.map((sub, subIdx) => (
                                                                <li
                                                                    key={subIdx}
                                                                    className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                                    onMouseEnter={() => setActiveSub(subIdx)}
                                                                >
                                                                    <div className="flex justify-between items-center">
                                                                        {sub.name} <ChevronRight size={14} />
                                                                    </div>
                                                                    {activeSub === subIdx && (
                                                                        <ul className="absolute left-full top-0 ml-1 w-64 md:w-60 bg-white shadow-lg rounded-lg">
                                                                            {sub.examples.map((ex, exIdx) => (
                                                                                <li
                                                                                    key={exIdx}
                                                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                                                >
                                                                                    {ex}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    )}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden p-2 border rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto"
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="mb-4 p-2 rounded bg-gray-100 w-full text-left"
                            >
                                Close
                            </button>

                            <nav className="flex flex-col gap-4">
                                {menuPaths.map((path, idx) =>
                                    path !== "/products" ? (
                                        <NavLink
                                            key={idx}
                                            to={path}
                                            onClick={() => setOpen(false)}
                                            className={active}
                                        >
                                            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                        </NavLink>
                                    ) : (
                                        <div key={idx}>
                                            {/* Products Clickable */}
                                            <NavLink
                                                to="/products"
                                                onClick={() => setOpen(false)}
                                                className="font-semibold text-gray-700 flex items-center justify-between"
                                            >
                                                Products
                                            </NavLink>

                                            {/* Accordion */}
                                            <div className="ml-2">
                                                {productsData.map((cat, i) => (
                                                    <div key={i} className="mt-2">
                                                        <button
                                                            className="flex justify-between items-center w-full text-left font-medium"
                                                            onClick={() =>
                                                                setMobileCat(mobileCat === i ? null : i)
                                                            }
                                                        >
                                                            {cat.category}
                                                            <ChevronDown
                                                                size={14}
                                                                className={`transition-transform ${mobileCat === i ? "rotate-180" : ""}`}
                                                            />
                                                        </button>

                                                        <AnimatePresence>
                                                            {mobileCat === i && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="ml-4 mt-1"
                                                                >
                                                                    {cat.subcategories.map((sub, j) => (
                                                                        <div key={j} className="mt-1">
                                                                            <button
                                                                                className="flex justify-between items-center w-full text-left text-sm"
                                                                                onClick={() =>
                                                                                    setMobileSub(mobileSub === j ? null : j)
                                                                                }
                                                                            >
                                                                                {sub.name}
                                                                                <ChevronDown
                                                                                    size={12}
                                                                                    className={`transition-transform ${mobileSub === j ? "rotate-180" : ""}`}
                                                                                />
                                                                            </button>

                                                                            <AnimatePresence>
                                                                                {mobileSub === j && (
                                                                                    <motion.ul
                                                                                        initial={{ height: 0, opacity: 0 }}
                                                                                        animate={{ height: "auto", opacity: 1 }}
                                                                                        exit={{ height: 0, opacity: 0 }}
                                                                                        className="ml-4 mt-1 text-sm text-gray-600"
                                                                                    >
                                                                                        {sub.examples.map((ex, k) => (
                                                                                            <li key={k} className="py-1">
                                                                                                {ex}
                                                                                            </li>
                                                                                        ))}
                                                                                    </motion.ul>
                                                                                )}
                                                                            </AnimatePresence>
                                                                        </div>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                )}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
