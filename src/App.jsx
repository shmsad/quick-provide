import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import CertificatesPage from "./pages/CertificatesPage";
import ContactPage from "./pages/ContactPage";
import PageWrapper from "./components/PageWrapper";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import BannersPage from "./pages/products/BannersPage";
import FlexPrintingPage from "./pages/products/FlexPrintingPage";
import GlowSignPage from "./pages/products/GlowSignPage";
import POSPage from "./pages/products/POSPage";
import ScrollToTop from "./components/ScrollToTop";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        {/* ✅ New Products Page */}
        <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        {/* /* Product Static Pages */}
        <Route path="/products/flex-printing" element={<PageWrapper><FlexPrintingPage /></PageWrapper>} />
        <Route path="/products/banners" element={<PageWrapper><BannersPage /></PageWrapper>} />
        <Route path="/products/glow-sign" element={<PageWrapper><GlowSignPage /></PageWrapper>} />
        <Route path="/products/pos" element={<PageWrapper><POSPage /></PageWrapper>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
        <Route path="/certificates" element={<PageWrapper><CertificatesPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
