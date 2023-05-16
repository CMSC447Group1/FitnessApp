import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExerciseSection from "../components/ExercisesSection";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <ExerciseSection />
      <Footer />
    </div>
  );
};

export default HomePage;
