"use client";

import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-3 md:px-12 lg:px-28 bg-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={assets.logo} width={40} height={40} alt="Logo" className="w-[40px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-1 space-x-8 mr-10">
          <a href="#home" className="text-gray-800 hover:text-red-500 transition">
            Home
          </a>
          <a href="#catalog" className="text-gray-800 hover:text-red-500 transition">
            Catalog
          </a>
          <a href="#contact" className="text-gray-800 hover:text-red-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex-shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col space-y-4 mt-4 md:hidden">
          <a href="#home" className="text-gray-800 hover:text-red-500 transition">
            Home
          </a>
          <a href="#catalog" className="text-gray-800 hover:text-red-500 transition">
            Catalog
          </a>
          <a href="#contact" className="text-gray-800 hover:text-red-500 transition">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
