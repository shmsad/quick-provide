// Header.jsx
import React from "react";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-[13px] font-medium overflow-hidden">
            <motion.div
                className="flex items-center gap-12 whitespace-nowrap py-2"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 15, // speed (kam karna hai to value badhao)
                    ease: "linear",
                }}
            >
                {/* Left Info */}
                <div className="flex items-center gap-6">
                    <div className="font-semibold">
                        Thank you for visiting Quick Provider Pest Service
                    </div>
                    <span className="flex items-center gap-1">
                        <Phone size={13} /> +91-8178290067
                    </span>
                    <span className="flex items-center gap-1">
                        <Mail size={13} /> info@quickprovide.co.in
                    </span>
                </div>

                {/* Right Info */}
                <div className="font-semibold">
                    Lic. No.: 10688 | ISO 9001:2015 Certified
                </div>
            </motion.div>
        </div>
    );
}
