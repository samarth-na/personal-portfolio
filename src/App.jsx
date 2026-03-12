import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Certificates = lazy(() => import("./components/Certificates"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)]">
      <Navbar />
      <main className="relative">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Certificates />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
