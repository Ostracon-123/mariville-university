import React from "react";
import { Card } from "../ui/card";
import { Clock, GraduationCap, icons, Lightbulb } from "lucide-react";
import { div } from "framer-motion/client";
import { Button } from "../ui/button";
import Footer from "../home/footer";

const AdmissionCards = () => {
  return (
    <div className="pt-32 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-3">
        <h2 className="md:text-4xl text-2xl font-semibold">
          Admission Information
        </h2>
        <h3 className="md:text-lg text-center text-black/50 text-sm">
          Become a part of our community <br className="md:hidden" /> of
          prestigous scholars and innovators
        </h3>
      </div>
      <div className="md:px-14 p-4">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {carddesc.map((c) => (
            <Card key={c.id} className="">
              <div className="pt-4">
                <div className="flex flex-col gap-7 items-center">
                  <div className="h-14 w-14 flex items-center justify-center bg-[#761214]/30 rounded-full">
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
                        className="flex flex-col gap-1 px-5 py-1 border-l-4 border-l-[#761214]"
                      >
                        <h3 className="font-semibold md:text-lg">{s.title}</h3>
                        <h4 className="text-xs md:text-sm text-black/70">
                          {s.desc}
                        </h4>
                      </div>
                    ))}
                    <div className="pt-8">
                      <Button className="w-full bg-[#761214] hover:bg-[#761214]/80 rounded-full">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {<Footer />}
    </div>
  );
};

export default AdmissionCards;

const carddesc = [
  {
    id: 1,
    icon: <GraduationCap color="#761214" />,
    title: "Undergraduate Programmes",
  },
  {
    id: 2,
    icon: <Clock color="#761214" />,
    title: "Postgraduate Studies",
  },
  {
    id: 3,
    icon: <Lightbulb color="#761214" />,
    title: "Part-Time Studies",
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
