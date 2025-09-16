import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Lightbox from "../components/Lightbox";
import HeroSection from "../components/HeroSection";

export default function GalleryPage() {
    const { gallery } = useAppContext(); // Array of image URLs
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLightbox = (actionOrIndex) => {
        if (actionOrIndex === "next") {
            setCurrentIndex((prev) => (prev + 1) % gallery.length);
        } else if (actionOrIndex === "prev") {
            setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
        } else {
            setCurrentIndex(actionOrIndex);
            setLightboxOpen(true);
        }
    };

    return (
        <div className="container mx-auto py-12">
            <HeroSection
                title="Gallery"
                description="Take a look at our pest control projects and treatments in action."
            />

            {/* Gallery images here */}
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {gallery.map((img, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg transform hover:scale-105 transition-all duration-300 group"
                            onClick={() => handleLightbox(index)}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                                Image {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {lightboxOpen && (
                    <Lightbox
                        images={gallery}
                        currentIndex={currentIndex}
                        onClose={(action) => {
                            if (!action) setLightboxOpen(false); // close
                            else handleLightbox(action);       // next/prev
                        }}
                    />
                )}
            </div>
        </div>

    );
}
