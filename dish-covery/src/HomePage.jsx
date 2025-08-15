// src/pages/HomePage.jsx
import Navbar from "../components/header/Navbar";
// import Hero from "../components/homepage/Hero-Section";
import About from "../components/homepage/About";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
