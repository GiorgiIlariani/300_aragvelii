import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[90px] bg-[#FFFFFF] flex justify-around items-center px-4">
      <div className="2xs:text-sm">
        © 2023 300 Aragveli, all rights reserved
      </div>
      <Image
        src="/assets/aragveli.png"
        alt="300 aragveli logo"
        width={180}
        height={50}
        priority
        className="cursor-pointer"
      />
    </div>
  );
};

export default Footer;
