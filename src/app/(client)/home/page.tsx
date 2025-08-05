import OtherSections from "@/components/home/otherSections";
import CardLinks from "@/components/home/otherSections";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import React from "react";
import Footer from "@/components/home/footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Hero />
      </div>
      <div className="pb-20">
        <OtherSections />
      </div>
      <Footer />
    </div>
  );
};

export default page;
