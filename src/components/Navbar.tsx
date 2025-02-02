"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/assets/shared/logo.svg";
import line from "../../public/assets/shared/line.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import hamburger from "../../public/assets/shared/icon-hamburger.svg";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      num: "00",
      name: "Home",
      link: "/",
    },
    {
      num: "01",
      name: "Destination",
      link: "/destination",
    },
    {
      num: "02",
      name: "Crew",
      link: "/crew",
    },
    {
      num: "03",
      name: "Technology",
      link: "/technology",
    }
  ];

  return (
    <div className="flex w-full fixed justify-between items-center gap-8 px-8 md:pr-0 md:pl-12 py-6 ">
      <span className="bg-white rounded-full flex justify-center items-center">
        <Image src={logo} alt="logo" />
      </span>
      <span className="absolute right-[46%] hidden md:block  z-50">
        <Image src={line} alt="logo" />
      </span>
      <div className="bg-white/5 hidden backdrop-blur-xl z-10 w-[50%] text-black md:flex  gap-10 justify-center items-center px-8">
        {navLinks.map((item) => (
          <Link href={item.link} className={`text-white hover:border-b-2 ${pathname === item.link ? 'border-b-4' : ""} `}  key={item.num}>
            <div
              className="flex gap-2 py-8 uppercase  tracking-[0.2rem]"
            > 
              <span className="font-barlowCondensedBold ">{item.num}</span>
              <span className="font-barlowCondensedReg">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
      {/* Mobile Hamburger */}
      <span className="md:hidden">
        <Image  src={hamburger} alt="hamburger" />
      </span>
    </div>
  );
};

export default Navbar;
