"use client";
import React from "react";
import { motion } from "framer-motion";
import About from "./about";

const OtherSections = () => {
  return (
    <motion.div
      whileInView={{ y: 50 }}
      initial={{ y: 150 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // animation starts when that % of the section is in view
      className="relative z-10 -mt-60 md:-mt-40"
    >
      <div className="h-[400px] md:h-[650px] md:pt-0 pt-20">
        <img
          src="/young-adults-meeting-up-study (1.jpg"
          alt=""
          className="h-full object-cover rounded-xl  w-full"
        />
      </div>

      <div>
        <About />
      </div>
    </motion.div>
  );
};

export default OtherSections;
