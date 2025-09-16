// src/components/ServiceCard.jsx
import React from "react";
import { ShieldCheck, Bug, BedDouble, SprayCan, Leaf, Rat, Droplets } from "lucide-react";

const iconMap = {
    termite: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
    termite2: <Bug className="w-10 h-10 text-indigo-600" />,
    bedbug: <BedDouble className="w-10 h-10 text-indigo-600" />,
    cockroach: <SprayCan className="w-10 h-10 text-indigo-600" />,
    herbal: <Leaf className="w-10 h-10 text-indigo-600" />,
    rat: <Rat className="w-10 h-10 text-indigo-600" />,
    water: <Droplets className="w-10 h-10 text-indigo-600" />,
};

export default function ServiceCard({ title, description, icon, onLearnMore }) {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition">
            <div className="flex justify-center mb-4">{iconMap[icon]}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4">
                <button
                    onClick={onLearnMore}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
}
