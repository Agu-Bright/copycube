"use client";
import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";
import GoogleTranslateDropdown from "@components/GoogleTranslate";
import Footer from "@components/ui/Footer";
import Navbar from "@components/ui/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900">
        <Navbar />
        <Hero />
        <VisualFeatures />
        <Features />
        <CTA />
        <Testimonial />
        <Pricing />
        <FAQs />
        <Footer />

        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            margin: "30px",
            zIndex: "999",
            position: "fixed",
            bottom: 0,
            left: 0,
            color: "white",
          }}
        >
          <GoogleTranslateDropdown translate={true} />
        </div>
      </div>
    </>
  );
}
