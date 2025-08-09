import { LogOut } from "lucide-react";
import React from "react";
import { SelectCat } from "./selectCat";
import { Button } from "../ui/button";
import { StudTable } from "./studTable";
import { StudChart } from "./studChart";
import Link from "next/link";

const Strip = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="px-4 py-2 shadow-md border rounded-md bg-white border-neutral-300 flex items-center justify-between">
        <div>
          <h4 className="text-neutral-600 text-xs md:text-sm">Live Results</h4>
        </div>
        <div className="flex items-center gap-3">
          <h4 className="text-neutral-600 text-xs md:text-sm">
            Endwell Heritage
          </h4>
          <div className="h-7 w-7 rounded-full bg-[#761214] flex items-center justify-center">
            <h2 className="text-white text-sm font-bold">H</h2>
          </div>
          <Link href={"/home/login"} className="md:block hidden">
            <LogOut height={20} width={20} />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 items-center gap-4 grid-cols-1">
        <div className="flex flex-col gap-3">
          <h4 className="text-neutral-600 text-xs md:text-sm">
            Select your desired year
          </h4>
          <SelectCat
            label={"Year"}
            placeholder={"Enter a year"}
            options={year}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-neutral-600 text-xs md:text-sm">
            Select your desired year
          </h4>
          <SelectCat
            label={"Semester"}
            placeholder={"Enter a Semester"}
            options={semester}
          />
        </div>
        <div className="md:mt-9 pb-4 md:pb-0 gap-3 grid grid-cols-2">
          {btn.map((b) => (
            <Button
              key={b.title}
              className="w-full bg-[#761214] hover:bg-[#761214]/80"
            >
              {b.title}
            </Button>
          ))}
        </div>
        <div className="md:col-span-2 md:pt-6">
          <StudTable />
        </div>
        <div>
          <StudChart />
        </div>
      </div>
    </div>
  );
};

export default Strip;

const btn = [
  {
    title: "Submit",
  },
  {
    title: "Print",
  },
];

const year = [
  {
    id: 1,
    label: "Year",
    value: "2020 / 2021",
  },
  {
    id: 2,
    label: "Year",
    value: "2020 / 2022",
  },
  {
    id: 3,
    label: "Year",
    value: "2020 / 2023",
  },
];
const semester = [
  {
    id: 1,
    label: "Semester",
    value: "First Semester",
  },
  {
    id: 2,
    label: "Semester",
    value: "Second Semester",
  },
];
