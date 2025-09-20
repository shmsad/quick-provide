import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            {/* Fixed Top Block: Header + Navbar */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />   {/* Top Info Bar */}
                <Navbar />   {/* Main Navigation */}
            </div>

            {/* Main Content */}
            <main className="pt-[96px] md:pt-[112px]">
                {children}
            </main>

            <Footer />
        </>
    );
}
