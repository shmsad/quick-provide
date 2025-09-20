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
import IndoorFlexPrinting from "./pages/products/IndoorFlexPrinting";
import OutdoorFlexPage from "./pages/products/OutdoorFlexPage";
import CustomizedProducts from "./pages/products/CustomizedProducts";
import MaterialFinishing from "./pages/products/MaterialFinishing";
import RollupBanners from "./pages/products/RollupBanners";
import BacklitFlexPrinting from "./pages/products/BacklitFlexPrinting";
// import ProductDetailPage from "./pages/ProductDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import VideoPage from "./pages/VideoPage";


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
        <Route path="/products/indoor" element={<PageWrapper><IndoorFlexPrinting /></PageWrapper>} />
        {/* Indoor Flex */}
        {/* <Route path="/products/indoor/:product" element={<ProductDetailPage />} /> */}
        <Route path="/products/outdoor" element={<PageWrapper><OutdoorFlexPage /></PageWrapper>} />
        {/* /* Outdoor Flex */}
        {/* <Route path="/products/outdoor/:product" element={<ProductDetailPage />} /> */}
        <Route path="/products/customize" element={<PageWrapper><CustomizedProducts /></PageWrapper>} />
        {/* Customized Products */}
        {/* <Route path="/products/customize/:product" element={<ProductDetailPage />} /> */}
        <Route path="/products/material_finishing" element={<PageWrapper><MaterialFinishing /></PageWrapper>} />
        {/* Material & Finishing */}
        {/* <Route path="/products/material_finishing/:product" element={<ProductDetailPage />} /> */}
        <Route path="/products/rollup_banners" element={<PageWrapper><RollupBanners /></PageWrapper>} />
        <Route path="/products/backlit_flex" element={<PageWrapper><BacklitFlexPrinting /></PageWrapper>} />

        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
        <Route path="/video" element={<PageWrapper><VideoPage /></PageWrapper>} />
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
