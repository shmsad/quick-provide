// src/components/CertificatesCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function CertificatesCard({ cert }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between"
        >
            <h3 className="font-semibold text-xl mb-4">{cert.title}</h3>
            <div className="flex justify-center gap-4 mt-auto">
                <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                    View
                </a>
                <a
                    href={cert.file}
                    download
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Download
                </a>
            </div>
        </motion.div>
    );
}
