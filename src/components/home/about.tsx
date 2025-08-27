"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { BookOpenCheck, CircleCheck, Hotel, MapPin } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="md:px-14 pt-16 md:pt-20 p-4 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl font-semibold">About Us</h2>
        <p className="text-xs md:text-sm text-neutral-600 md:w-96">
          Mariville University is more than a center of learning; it is a
          dynamic environment where curiosity intersects with innovative
          thinking, and students are encouraged to extend their knowledge beyond
          textbooks into practical, real-world applications. With a campus that
          thrives on energy and ideas, we cultivate a culture of collaboration,
          creativity, and continuous personal and academic growth.
        </p>
        <div className="md:pt-8 flex-col gap-4 pt-8 flex">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Our Mission Statement
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 md:w-96">
            Mariville University is a place where curiosity meets innovative
            thinking, and students are encouraged to move beyond textbooks into
            real-world applications. We cultivate a culture of collaboration,
            creativity, and growth, empowering students to realize their
            potential and prepare for a future full of possibilities.
          </p>
        </div>

        <div className="pt-5 hidden md:block ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-blue-900 w-36 text-white rounded-full flex items-center justify-center py-1"
          >
            Learn More
          </motion.div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-0 pt-8">
          {cardObj.map((c) => (
            <Card
              key={c.id}
              className={
                "bg-white shadow-xl md:h-60 h-56 p-6 hover:-translate-y-2 hover:transition-all hover:duration-500"
              }
            >
              <Link href={c.url} className="flex flex-col gap-4">
                <div className="bg-blue-900/20 h-12 w-12 flex items-center justify-center rounded-md ">
                  {c.icon}
                </div>
                <h2 className="text-xl font-semibold">{c.title}</h2>
                <h3 className="text-sm md:text-base text-neutral-500">
                  {c.text}
                </h3>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

const cardObj = [
  {
    id: 1,
    icon: <BookOpenCheck color="#1d398f" />,
    title: "Admissions",
    text: "Apply for undergraduate, postgraduate, and part-time programmes",
    url: "/home/admissions",
  },
  {
    id: 2,
    icon: <CircleCheck color="#1d398f" />,
    title: "Student Results",
    text: "Access your academic results and transcripts",
    url: "/studentDashboard/results",
  },
  {
    id: 3,
    icon: <Hotel color="#1d398f" />,
    title: "Programmes",
    text: "Explore our unique and comprehensive academic offerings",
    url: "/home/programmes",
  },
  {
    id: 4,
    icon: <MapPin color="#1d398f" />,
    title: "Campus & Location",
    text: "Find us and explore our exquisite facilities, specially tailored for you",
    url: "/home/campus",
  },
];
