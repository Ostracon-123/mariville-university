import { Card } from "@/components/ui/card";
import { div } from "framer-motion/client";
import {
  BookOpen,
  Clock,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";
import React from "react";
import Footer from "../footer";
import { Button } from "@/components/ui/button";

const ProgSlot = () => {
  return (
    <div className="md:pt-36 pt-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-3">
        <h2 className="md:text-4xl text-2xl font-semibold">
          Academic Programmes
        </h2>
        <h3 className="md:text-lg text-center text-black/60 text-sm">
          Explore our academic programmes and discover your path to success
        </h3>
      </div>
      <div className="md:px-14 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
          {details.map((d) => (
            <div
              key={d.id}
              className="flex flex-col  items-center gap-4 md:px-5 md:py-10"
            >
              <div className="h-14 w-14 flex items-center justify-center bg-blue-900/50 rounded-full">
                {d.icon}
              </div>
              <h2 className="text-xl font-semibold">{d.name}</h2>
              <p className="text-sm md:text-base text-neutral-600 text-center">
                {d.text}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {carddesc.map((c) => (
              <Card key={c.id} className="md:pb-8">
                <div className="pt-4">
                  <div className="flex flex-col gap-7 items-center">
                    <div className="h-14 w-14 flex items-center justify-center bg-blue-900/30 rounded-full">
                      {c.icon}
                    </div>
                    <h3 className="md:text-2xl text-xl font-semibold md:w-44 w-32 text-center">
                      {c.title}
                    </h3>
                  </div>
                  <div>
                    <div className="px-6 pt-7 md:px-7 flex flex-col gap-4">
                      {slugs.map((s) => (
                        <div
                          key={s.id}
                          className="flex flex-col gap-1 px-5 py-1 border-l-4 border-l-blue-900bg-blue-900"
                        >
                          <h3 className="font-semibold md:text-lg">
                            {s.title}
                          </h3>
                          <h4 className="text-xs md:text-sm text-black/70">
                            {s.desc}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgSlot;

const details = [
  {
    id: 1,
    icon: <BookOpen color="white" />,
    name: "Research Excellence",
    text: "State-of-the-art research facilities and opportunities",
  },
  {
    id: 2,
    icon: <Users color="white" />,
    name: "Expert Faculty",
    text: "Learn from industry leaders and renowned academics",
  },
  {
    id: 3,
    icon: <HeartHandshake color="white" />,
    name: "Career Support",
    text: "Comprehensive career services and industry connections",
  },
];

const carddesc = [
  {
    id: 1,
    icon: <GraduationCap color="#1d398f" />,
    title: "Undergraduate Programmes",
  },
  {
    id: 2,
    icon: <Clock color="#1d398f" />,
    title: "Postgraduate Studies",
  },
];

const slugs = [
  {
    id: 1,
    title: "Application Period",
    desc: "August 15 - September 30, 2025",
  },
  {
    id: 2,
    title: "Semester Start",
    desc: "November 2025",
  },
  {
    id: 3,
    title: "Requirements",
    desc: "High School Diploma, SAT/ACT scores, Essays",
  },
  {
    id: 4,
    title: "Duration",
    desc: "4 years full-time",
  },
];
