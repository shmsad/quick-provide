// src/components/Team.jsx
import React from "react";

export default function Team({ members }) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
