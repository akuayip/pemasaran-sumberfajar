import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-white shadow-inner py-5 items-center">
      <Image src={assets.logo_kkn} alt="" widht={150} height={150} />
      <p className="text-sm text-black">
        All Right Reserved. Copyright @TeamDevKKN-Tematik
      </p>
    </div>
  );
  s;
};

export default Footer;
