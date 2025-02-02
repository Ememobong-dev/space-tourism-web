import React from "react";

const TitleNav = ({ num, title }: { num: string; title: string }) => {
  return (
    <div className="flex gap-3 items-center justify-center  md:justify-start py-8 tracking-[0.2rem] text-base md:text-2xl uppercase">
      <span className="font-barlowCondensedBold text-center md:text-left  text-white/25">{num}</span>
      <p className="font-barlowRegtext-white text-center md:text-left ">{title}</p>
    </div>
  );
};

export default TitleNav;
