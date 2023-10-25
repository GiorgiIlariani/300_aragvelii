"use client";

import { Navbarconstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = ({ email }: { email: string }) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const handleOpen = () => setIsMobileNavbarOpen(true);
  const handleClose = () => setIsMobileNavbarOpen(false);

  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1270px] mx-auto py-2 px-6 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/aragveli.png"
            alt="300 aragveli logo"
            width={200}
            height={60}
            priority
          />
        </Link>

        {/* desktop navigation */}
        <ul className="flex gap-5 items-center md:hidden">
          {Navbarconstants.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="text-[#0f1724] font-medium text-[18px] hover:scale-105 hover:text-[#3498db] transition duration-200">
              {item.title}
            </Link>
          ))}
          {email === "lmaisuradze3333@gmail.com" ? (
            <Link
              href="/create-news"
              className="text-[#0f1724] font-medium text-[18px] hover:scale-105 hover:text-[#3498db] transition duration-200">
              create news
            </Link>
          ) : null}
        </ul>

        {/* mobile navigation */}
        <div className="text-[20px] hidden md:block" onClick={handleOpen}>
          <GiHamburgerMenu />
        </div>
        {isMobileNavbarOpen ? (
          <div className="bg-[#0f1724] absolute top-0 right-0 z-50 h-screen w-[250px] pt-16">
            <div
              className="absolute top-5 right-5 text-white font-semibold text-[24px]"
              onClick={handleClose}>
              <IoCloseSharp />
            </div>

            <div className="w-full flex justify-center items-center flex-col gap-[30px]">
              {Navbarconstants.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className="text-light-1 font-medium text-[21px] hover:scale-105 hover:text-[#3498db] transition duration-200">
                  {item.title}
                </Link>
              ))}
              {email === "lmaisuradze3333@gmail.com" ? (
                <Link
                  href="/create-news"
                  className="text-light-1 font-medium text-[21px] hover:scale-105 hover:text-[#3498db] transition duration-200">
                  create news
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
