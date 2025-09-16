// src/components/Translator.jsx
import React, { useEffect } from "react";

export default function Translator() {
    useEffect(() => {
        // Agar script pehle se loaded nahi hai to load karo
        if (!document.querySelector("#google-translate-script")) {
            const addScript = document.createElement("script");
            addScript.id = "google-translate-script";
            addScript.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(addScript);
        }

        // Init function define karo
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "en" },
                "google_translate_element"
            );
        };
    }, []);

    return <div id="google_translate_element"></div>;
}
