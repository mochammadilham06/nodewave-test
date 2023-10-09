import Navbar from "@nodewave/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import OurProduct from "./OurProduct";
import Testimoni from "./testimoni";
import OurWorks from "./ourwork";
import HowWeWork from "./howWeWork";
import AppWeMade from "./appwemade";
import StartCreating from "./startCreating";
import Footer from "@nodewave/component/Footer";
import "@nodewave/style/globals.css";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* End of Hero Section */}

      {/* Our Product */}
      <OurProduct />
      {/* End Our Product */}

      {/* Testimoni */}
      <Testimoni />
      {/* End of Testimoni */}

      {/* Our Work */}
      <OurWorks />
      {/* End Our Work */}

      {/* How We Work */}
      <HowWeWork />
      {/* End How We Work */}

      {/* App can we made */}
      <AppWeMade />
      {/* App can we made */}
      {/* Start Creating */}
      <StartCreating />
      {/* End Start Creating */}
      {/* Footer */}
      <Footer />
      {/* EndFooter */}
    </div>
  );
}
