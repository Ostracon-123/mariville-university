import Sidebar from "@/components/student/sidebar";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen md:flex">
        {/* Sidebar on the left */}
        <div className="w-[10rem] hidden md:block bg-white shadow-md z-10">
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-1 bg-gray-50 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default Dashboardlayout;
