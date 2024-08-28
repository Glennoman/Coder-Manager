import React from "react";
import HeroSection from "../components/HeroSection/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import ForCoders from "../components/ForCoders/ForCoders";
import ForManagers from "../components/ForManagers/ForManagers";

const Home = () => (
  <>
    <HeroSection />
    <ForCoders />
    <ForManagers />
    <Testimonials />
    <Footer />
  </>
);

export default Home;
