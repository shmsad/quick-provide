import React from "react";
import { useAppContext } from "../context/AppContext";

export default function CertificatesPage() {
    const { certificates } = useAppContext();

    return (
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map(cert => (
                    <div key={cert.id} className="bg-white shadow-md rounded-xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">{cert.title}</h3>
                        <div className="flex justify-center gap-4">
                            <a href={cert.file} target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                                View
                            </a>
                            <a href={cert.file} download
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
