import { LogOut } from "lucide-react";
import React from "react";

const Strip = () => {
  return (
    <div>
      <div></div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-[#761214] flex items-center justify-center">
          <h2 className="text-white text-xl font-bold">H</h2>
        </div>
        <LogOut height={20} width={20} />
      </div>
    </div>
  );
};

export default Strip;
