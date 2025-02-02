import { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import CaseStudies from "../components/CaseStudies";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Products />
      <CaseStudies />
      <About />
      <Contact />
    </div>
  );
};

export default Index;