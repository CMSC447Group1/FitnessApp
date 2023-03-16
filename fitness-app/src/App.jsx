import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseSection from "./components/ExercisesSection";
import HeroSection from "./components/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ExerciseSection />
      <Footer />
    </div>
  );
}

export default App;
