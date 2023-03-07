import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Gallery from "./pages/Gallery";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <Navbar className="yay" />
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
