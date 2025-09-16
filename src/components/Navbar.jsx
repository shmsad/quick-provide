import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';

// ✅ Active class helper
const active = ({ isActive }) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // ✅ Updated path order
    const menuPaths = ["/", "/about", "/services", "/gallery", "/certificates", "/contact"];

    return (
        <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
            <Header/>
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">

                {/* Logo */}
                <NavLink to="/">
                    <img
                        src="https://cdn.dotpe.in/longtail/store-logo/8388661/bfQIQhHb.webp"
                        alt="Quick Provide Logo"
                        className="h-10 w-auto"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6">
                    {menuPaths.map((path, idx) => (
                        <NavLink key={idx} to={path} className={active}>
                            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <button onClick={() => setOpen(true)} className="md:hidden p-2 border rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 p-4"
                        >
                            <button onClick={() => setOpen(false)} className="mb-4 p-2 rounded bg-gray-100">Close</button>
                            <nav className="flex flex-col gap-4">
                                {menuPaths.map((path, idx) => (
                                    <NavLink key={idx} to={path} onClick={() => setOpen(false)} className={active}>
                                        {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                    </NavLink>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
