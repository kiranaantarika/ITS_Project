import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/js_components/header.js";
import Footer from "./components/js_components/Footer.js";
import Features from "./components/js_components/Features.js";
import Founders from "./components/js_components/Founders.js";
import AboutUs from "./components/js_components/About.js";
import ContactUs from "./components/js_components/contactUs.js";
import Services from "./components/js_components/services.js";
import WhyChooseUs from "./components/js_components/whyChooseUs.js";
import BrandingSection from "./components/js_components/Brand.js";
import HeroSection from "./components/js_components/heroSection.js"

// Array of images for hero section
const heroImages = [
  "./images/employees/IMG-20250405-WA0038.jpg",
  "./images/employees/IMG-20250405-WA0015.jpg",
  "./images/employees/IMG-20250405-WA0050.jpg",
  "./images/employees/IMG-20250405-WA0056.jpg",
  "./images/employees/IMG-20250405-WA0006.jpg",
  "./images/employees/IMG-20250405-WA0033.jpg",
  "./images/employees/IMG-20250405-WA0004.jpg",
];

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const [index, setIndex] = useState(0); // Track current slide index

  useEffect(() => {
    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div ref={homeRef} id="home" className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="hero">
                    {/* Image Slider */}
                    <div className="image-slider">
                      <div
                        className="image-track"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                      >
                        {heroImages.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Slide ${i + 1}`}
                            className="slider-img"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Hero Text Overlay */}
                    <div className="hero-overlay">
                      <div className="hero-content">
                        <h1 className="animated-title">FACILITY MANAGEMENT</h1>
                        <p className="animated-description">
                          We offer Integrated Facility Management Services
                          designed to ensure the functionality, comfort, safety,
                          and efficiency of your spaces — whether it's an
                          enclosed facility or an open environment.
                        </p>
                        <button className="cta-button" onClick={scrollToAbout}>
                          Know about us
                        </button>
                      </div>
                    </div>
                  </section>

                  <WhyChooseUs />
                  <div ref={aboutRef}>
                    <AboutUs />
                  </div>
                  <Features />
                  <Services />
                  <Founders />
                  <BrandingSection />
                  <HeroSection/>
                  <ContactUs />
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
