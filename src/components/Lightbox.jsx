import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDrag } from '@use-gesture/react';

export default function Lightbox({ images, currentIndex, onClose }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onClose('next');
            if (e.key === "ArrowLeft") onClose('prev');
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    if (!images[currentIndex]) return null;

    // Swipe gesture
    const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (distance > 100) {
            if (xDir > 0) onClose('prev');
            else onClose('next');
            cancel(); // prevent further movement
        }
    });

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            >
                {/* Close Button */}
                <button
                    onClick={() => onClose()}
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition"
                >
                    ×
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-semibold">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Swipeable Image */}
                <motion.img
                    {...bind()}
                    src={images[currentIndex]}
                    alt={`Gallery ${currentIndex + 1}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg cursor-grab"
                />

                {/* Prev/Next Buttons */}
                <button
                    onClick={() => onClose('prev')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-2 hover:text-indigo-400 transition"
                >
                    ‹
                </button>
                <button
                    onClick={() => onClose('next')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-2 hover:text-indigo-400 transition"
                >
                    ›
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
