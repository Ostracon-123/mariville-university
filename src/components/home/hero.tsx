import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-[420px] md:h-[350px] bg-blue-900">
        <div className="flex flex-col gap-5 items-center pt-16 md:pt-20">
          <h4 className="text-sm md:text-xl  font-semibold text-neutral-200">
            Embrace the path to prestige at
          </h4>
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            Mariville <br className="md:hidden" />
            University
          </h1>

          <div className="md:pt-7 pt-5 grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {button.map((b, index) => (
              <Link key={index} href={b.link}>
                <Button
                  className={
                    b.text === "Get Started"
                      ? `bg-white text-[#761214] px-10 rounded-full w-64 md:w-full hover:bg-white hover:-translate-y-1 transition-all duration-500`
                      : "bg-transparent border border-white text-white w-64 md:w-full px-10 rounded-full  hover:bg-transparent hover:-translate-y-1 transition-all duration-500"
                  }
                >
                  {b.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const button = [
  {
    text: "Get Started",
    link: "/home/signup",
  },
  {
    text: "Explore",
    link: "",
  },
];
