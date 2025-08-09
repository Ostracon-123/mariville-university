"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { BookOpen, House, LayoutDashboard, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  className?: string;
}

export function StudMenu({ className }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Sheet>
      <SheetTrigger asChild className={cn(className)}>
        <Button className="bg-transparent p-0">
          <Menu color="#761214" height={70} width={70} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-64">
        <SheetHeader>
          <SheetTitle className="text-[#761214] font-semibold">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col px-6 pt-10 gap-6">
          {links.map((l, index) => {
            const isActive = activeIndex === index;
            return (
              <Link
                key={l.id}
                href={l.url}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-[#761214]/40 text-[#761214] font-medium"
                    : "hover:bg-gray-100"
                )}
              >
                {l.icon}
                {l.title}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}

const links = [
  {
    id: 1,
    icon: <LayoutDashboard color="#761214" height={20} width={20} />,
    title: "Dashboard",
    url: "/studentDashboard/dashboard",
  },
  {
    id: 2,
    icon: <BookOpen color="#761214" height={20} width={20} />,
    title: "Results",
    url: "/studentDashboard/results",
  },
  {
    id: 3,
    icon: <House color="#761214" height={20} width={20} />,
    title: "Accomodation",
    url: "/studentDashboard/accomodation",
  },
  {
    id: 4,
    icon: <LogOut color="#761214" height={20} width={20} />,
    title: "Logout",
    url: "/home/login",
  },
];
