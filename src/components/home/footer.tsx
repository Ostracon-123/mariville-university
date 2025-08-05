import { div } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-24 md:pt-32">
      <div className="bg-[#290c0c] pt-5">
        <div className="md:px-10 p-4 md:py-5 ">
          <div className="flex md:flex-row flex-col gap-8 justify-between">
            <div className="flex md:flex-row flex-col md:items-center gap-10 md:gap-20  pb-6 md:pb-8 pt-5">
              <div className="flex items-center gap-4">
                <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                  <h4 className="text-lg font-semibold text-[#761214]">BFU</h4>
                </div>
                <div className="">
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Brookford University
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-semibold">Quick Links</h2>
                {quickLinks.map((q) => (
                  <Link
                    key={q.id}
                    href={"#"}
                    className="text-white/50 text-sm hover:text-white"
                  >
                    {q.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-20 pb-4">
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-semibold">Contact Info</h2>
                {contactInf.map((c) => (
                  <div key={c.id} className="text-sm flex flex-col gap-3">
                    <p className="text-white/50">{c.address}</p>
                    <p className="text-white/50">{c.num}</p>
                    <p className="text-white/50"> {c.email}</p>
                    <p className="text-white/50 hidden md:block"> </p>
                    <p className="text-white/50 hidden md:block"> </p>
                    <p className="text-white/50 hidden md:block"> </p>
                    <p className="text-white/50 hidden md:block"> </p>
                    <p className="text-white/50 hidden md:block"> </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pb-4 md:pb-0 flex flex-col gap-3">
              <h2 className="text-white font-semibold">Follow Us</h2>
              <div className="flex items-center gap-3">
                {follow.map((f, index) => (
                  <div
                    key={index}
                    className="h-10 w-10 rounded-full bg-[#761214]/50 flex items-center justify-center"
                  >
                    <h2 className="text-sm md:text-lg text-white"> {f.text}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-t-red-50 flex items-center justify-center pt-9 md:pb-12">
            <h3 className="text-white/50 text-sm">
              © 2024 Brookford University. All rights reserved.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const quickLinks = [
  {
    id: 1,
    title: "Home",
    url: "",
  },
  {
    id: 2,
    title: "About Us",
    url: "",
  },
  {
    id: 3,
    title: "Admissions",
    url: "",
  },

  {
    id: 4,
    title: "Programmes",
    url: "",
  },
  {
    id: 5,
    title: "Student Results",
    url: "",
  },
];

const contactInf = [
  {
    id: 1,
    address: `1234 Brookford Avenue`,
    num: "+1 (555) 123-4567",
    email: "info@meridianuniversity.edu",
  },
];

const follow = [
  {
    text: "f",
  },
  {
    text: "x",
  },
  {
    text: "in",
  },
];
