import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import HouseboatsPage from "./pages/HouseboatsPage";
import AyurvedaPage from "./pages/AyurvedaPage";
import ContactPage from "./pages/ContactPage";
import ImageManager from "./pages/ImageManager";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destination/:id" element={<DestinationDetailPage />} />
            <Route path="/houseboats" element={<HouseboatsPage />} />
            <Route path="/ayurveda" element={<AyurvedaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/images" element={<ImageManager />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
