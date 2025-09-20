// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuPaths = ["/", "/products", "/about", "/services", "/gallery","/video", "/contact"];
    const active = ({ isActive }) =>
        isActive ? "text-indigo-600 font-semibold" : "text-gray-700";

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08 }
        },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -5, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300 } },
    };

    const productItems = [
        { to: "/products/flex-printing", label: "Flex Printing" },
        { to: "/products/banners", label: "Banners" },
        { to: "/products/glow-sign", label: "Glow Sign" },
        { to: "/products/pos", label: "Point of Sale" },
    ];

    return (
        <header className="fixed w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
                <NavLink to="/" className="flex items-center gap-3">
                    <motion.img
                        src="/images/main_logo.png"
                        alt="Logo"
                        className="h-20 w-20 rounded-full border-2 border-indigo-600 shadow-md"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Brand Name - hidden on mobile */}
                    <motion.span
                        className="hidden md:inline text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Quick Provide Flex Printing Service
                    </motion.span>
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 items-center relative">
                    {menuPaths.map((path, idx) =>
                        path !== "/products" ? (
                            <NavLink key={idx} to={path} className={active}>
                                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            </NavLink>
                        ) : (
                            <div
                                key={idx}
                                className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <NavLink
                                    to="/products"
                                    className="flex items-center gap-1 text-gray-700 font-semibold cursor-pointer"
                                >
                                    Products <ChevronDown size={16} className={`${dropdownOpen ? "rotate-180 transition-transform" : ""}`} />
                                </NavLink>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl rounded-lg p-2 z-50"
                                        >
                                            {productItems.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    variants={itemVariants}
                                                    whileHover={{ scale: 1.05, backgroundColor: "#eef2ff" }}
                                                >
                                                    <NavLink
                                                        to={item.to}
                                                        className="block px-4 py-2 rounded cursor-pointer"
                                                    >
                                                        {item.label}
                                                    </NavLink>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    )}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white shadow-lg"
                    >
                        <ul className="flex flex-col gap-2 px-4 py-4">
                            {menuPaths.map((path, idx) =>
                                path !== "/products" ? (
                                    <li key={idx}>
                                        <NavLink
                                            to={path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={active}
                                        >
                                            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li key={idx}>
                                        {/* Products mobile toggle */}
                                        <div>
                                            <div
                                                className="flex justify-between items-center text-gray-700 font-semibold cursor-pointer px-2 py-2"
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                            >
                                                Products
                                                <ChevronDown
                                                    size={16}
                                                    className={`${dropdownOpen ? "rotate-180 transition-transform" : ""}`}
                                                />
                                            </div>
                                            <AnimatePresence>
                                                {dropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="pl-4 flex flex-col gap-1 overflow-hidden"
                                                    >
                                                        {productItems.map((item, i) => (
                                                            <motion.div
                                                                key={i}
                                                                variants={itemVariants}
                                                                whileHover={{ scale: 1.03, backgroundColor: "#eef2ff" }}
                                                                className="rounded"
                                                            >
                                                                <NavLink
                                                                    to={item.to}
                                                                    onClick={() => {
                                                                        setMobileMenuOpen(false);
                                                                        setDropdownOpen(false);
                                                                    }}
                                                                    className="block px-2 py-1 cursor-pointer rounded"
                                                                >
                                                                    {item.label}
                                                                </NavLink>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
