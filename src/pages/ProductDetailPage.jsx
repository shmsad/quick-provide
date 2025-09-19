// src/pages/ProductDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function ProductDetailPage() {
    const { category, subcategory } = useParams();
    const { services } = useAppContext();

    const catData = services.find(s => s.title === decodeURIComponent(category));
    const subData = catData?.subcategories?.find(s => s.name === decodeURIComponent(subcategory));

    if (!catData) return <div className="p-6">Category not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">{catData.title}</h1>

            {subcategory && subData ? (
                <div className="bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2">{subData.name}</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {subData.examples.map((ex, idx) => <li key={idx}>{ex}</li>)}
                    </ul>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(catData.subcategories || []).map((sub, idx) => (
                        <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                            <h3 className="font-semibold mb-2">{sub.name}</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {sub.examples.map((ex, exIdx) => <li key={exIdx}>{ex}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
