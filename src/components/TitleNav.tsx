import React from "react";

const TitleNav = ({ num, title }: { num: string; title: string }) => {
  return (
    <div className="flex gap-3 items-center lg:py-14 py-28  text-2xl uppercase">
      <span className="font-barlowCondensedBold text-white/25">{num}</span>
      <p className="font-barlowCondensedReg text-white">{title}</p>
    </div>
  );
};

export default TitleNav;
