import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-[13px] font-medium overflow-hidden">
            <motion.div
                className="flex items-center gap-12 whitespace-nowrap py-2"
                animate={isPaused ? { x: 0 } : { x: ["100%", "-100%"] }}
                transition={{
                    repeat: isPaused ? 0 : Infinity,
                    duration: 18,
                    ease: "linear",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex items-center gap-6">
                    <div className="font-semibold">
                        Welcome to Quick Provide Flex Printing & Advertising
                    </div>
                    <span className="flex items-center gap-1"><Phone size={13} /> +91-9650403275</span>
                    <span className="flex items-center gap-1"><Mail size={13} /> kpcontrol@gmail.com</span>
                </div>
                <div className="font-semibold">
                    UDYAM-DL-08-0095527 | GSTIN: 07BDUPK7506B1ZH
                </div>
            </motion.div>
        </div>
    );
}
