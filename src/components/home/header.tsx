"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MobileMenu } from "./mobileMenu";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-[84px] fixed top-0 left-0 right-0 z-50 bg-[#761214] shadow-md">
      <div className="p-4 md:px-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
            <h4 className="text-lg font-semibold text-[#761214]">BFU</h4>
          </div>
          <div className="">
            <h4 className="text-lg md:text-xl font-bold text-white">
              Brookford University
            </h4>
            <p className="text-xs md:text-[12px] text-gray-100">
              Home of Prestige and Global Impact
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-10 ">
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.url}
              className="text-white font-semibold hover:-translate-y-1 hover:transition-all hover:duration-500"
            >
              {l.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "",
  },
  {
    id: 3,
    title: "Admissions",
    url: "/home/admissions",
  },

  {
    id: 4,
    title: "Programmes",
    url: "/home/programmes",
  },
  {
    id: 5,
    title: "Student Results",
    url: "/home/results",
  },
];
