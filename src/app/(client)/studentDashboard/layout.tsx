import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { useRouter } from "next/router";
import React from "react";

const Dashboardlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
