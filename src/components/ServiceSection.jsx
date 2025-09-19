import React from "react";

export default function ServiceSection({ services, title = "Our Services", limit }) {
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedServices.map(service => (
                    <div
                        key={service.id}
                        className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 cursor-pointer flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
