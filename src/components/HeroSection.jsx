// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection({ title, description }) {
  return (
    <section className="bg-indigo-600 text-white rounded-xl p-12 pt-32 mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
    </section>
  );
}
