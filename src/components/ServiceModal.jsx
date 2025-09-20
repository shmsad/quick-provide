// src/components/ServiceModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceModal({ open, item, onClose }) {
    if (!open || !item) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            >
                <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    className="bg-white rounded-xl max-w-xl w-full p-6"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                        </div>
                        <button onClick={onClose} className="text-gray-500 text-2xl font-bold">✕</button>
                    </div>

                    <div className="mt-4 text-gray-700">
                        <h4 className="font-semibold">Our Process</h4>
                        <ol className="list-decimal ml-5 mt-2 text-sm">
                            <li>Design & consultation</li>
                            <li>Printing & material selection</li>
                            <li>Quality check & finishing</li>
                            <li>Delivery & installation</li>
                        </ol>
                    </div>

                    <div className="mt-4 text-right">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
