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

// Array of images for hero section
const heroImages = [
  "./images/servant.jpg",
  "/images/bugsImage.jpg",
  "/images/servant2.jpg",
  "/images/servant3.jpg",
  "/images/servant4.jpg",
  "/images/servant5.jpg",
  "/images/servant6.jpg",
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
                        <h1 className="animated-title">
                          Get your home cleaned{" "}
                          <span className="brand-gradient">
                            just the way you like it
                          </span>
                        </h1>
                        <p className="animated-description">
                          Over{" "}
                          <span className="highlight">1 million people</span>{" "}
                          use Housekeeper.com for their cleaning needs.
                        </p>
                        <p className="animated-description">
                          <span className="highlight">
                            Look for jobs near you.
                          </span>{" "}
                          Look for cleaners near you.
                        </p>
                        <button className="cta-button" onClick={scrollToAbout}>
                          Find a Cleaner
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
