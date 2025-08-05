import React from "react";

const Clientlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Clientlayout;
