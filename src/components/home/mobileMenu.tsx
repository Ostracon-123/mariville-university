"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [isActiveIndex, setIsActiveIndex] = useState<number>(0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent">
          <Menu color="white" height={30} width={30} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="pt-10">Hello, Welcome👋</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col px-6 pt-10 gap-10 pr-10">
          {links.map((l, index) => (
            <Link
              key={index}
              className={isActiveIndex ? `bg-[#761214]/40` : "bg-none"}
              href={"#"}
            >
              {l.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "",
  },
  {
    title: "Admissions",
    url: "/home/admissions",
  },

  {
    title: "Programmes",
    url: "/home/programmes",
  },
  {
    title: "Student Results",
    url: "/studentDashboard/results",
  },
];
