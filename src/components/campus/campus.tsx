import {
  BookOpen,
  CardSim,
  FlaskConical,
  HeartHandshake,
  House,
  Users,
} from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

const Campus = () => {
  return (
    <div
      className="md:pt-36 pt-20 md:px-14 p-4 flex flex-col gap-5 md:gap-10
    "
    >
      <div className="flex flex-col items-center gap-3">
        <h2 className="md:text-4xl text-2xl font-semibold">
          Campus Facilities
        </h2>
        <h3 className="md:text-lg text-center text-black/60 text-sm">
          Explore our academic programmes and discover your path to success
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-5">
        {details.map((d) => (
          <Card
            key={d.id}
            className="flex flex-col  items-center gap-4 md:px-5 md:py-10"
          >
            <div className="h-14 w-14 flex items-center justify-center bg-[#761214]/50 rounded-full">
              {d.icon}
            </div>
            <h2 className="text-xl font-semibold">{d.name}</h2>
            <p className="text-sm md:text-base text-neutral-600 text-center">
              {d.text}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Campus;

const details = [
  {
    id: 1,
    icon: <BookOpen color="white" />,
    name: "Modern Library",
    text: "State-of-the-art research facilities and opportunities",
  },
  {
    id: 2,
    icon: <FlaskConical color="white" />,
    name: "Research Labs",
    text: "State-of-the-art laboratories for all disciplines",
  },
  {
    id: 3,
    icon: <House color="white" />,
    name: "Student Housing",
    text: "Modern dormitories and apartment-style living",
  },
  {
    id: 4,
    icon: <House color="white" />,
    name: "Sports Complex",
    text: "Olympic-size pool, gym, and athletic fields",
  },
];
