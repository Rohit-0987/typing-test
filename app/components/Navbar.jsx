"use client";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [showHamburgerOptions, setShowHamburgerOptions] = useState(false);
  return (
    <>
      <header className="flex items-center px-[8%] h-[73px] bg-[#8d8d8d] gap-8 border-gray-500 py-2  text-black justify-between">
        <Link href="/" className="flex items-center justify-center gap-3">
          <img
            src={"/logo.jpg"}
            alt="logo"
            width={60}
            height={60}
            className="ml-2 w-[60px] h-[60px]"
          />
          <span className="text-[1.5em] font-medium">Typing Test</span>
        </Link>

        <div className="flex items-center justify-center gap-8 text-lg  max-770px:hidden">
          <Link
            aria-label="Home"
            href="/"
            className="px-1 py-2 rounded-md hover:text-white flex gap-1 items-center justify-center leading-[1em]"
          >
            <IoHomeOutline size={18} className="mb-[2px]" />
            <span>Home</span>
          </Link>

          <Link
            aria-label="About"
            href="/about"
            className="px-1 py-2 rounded-md hover:text-white  flex gap-1 items-center justify-center leading-[1em]"
          >
            <HiOutlineInformationCircle size={20} />
            <span>About Us</span>
          </Link>
        </div>

        <div
          className="hidden items-center justify-center flex-col gap-1 p-[6px]  bg-slate-600 bg-opacity-30 rounded-[4px] max-770px:flex"
          onClick={() => setShowHamburgerOptions((pre) => !pre)}
        >
          <div className="py-[1px] px-[10px] bg-slate-100 rounded-lg"></div>
          <div className="py-[1px] px-[10px] bg-slate-100 rounded-lg"></div>
          <div className="py-[1px] px-[10px] bg-slate-100 rounded-lg"></div>
        </div>
      </header>

      {showHamburgerOptions && (
        <div className="absolute p-1 rounded-md bg-[#8d8d8d] top-[4.2em] font-medium right-1 flex flex-col z-50 w-[98%] gap-2 text-black">
          <Link
            aria-label="Home"
            href="/"
            className="flex  gap-2 items-center py-1 px-2 rounded-sm hover:bg-gray-100 border-b-[1px] border-slate-400"
            onClick={() => setShowHamburgerOptions(false)}
          >
            <IoHomeOutline size={18} className="mb-[2px]" />
            <span>Home</span>
          </Link>

          <Link
            aria-label="About"
            href="/about"
            className="flex items-center gap-2 py-1 px-2 rounded-sm hover:bg-gray-100 "
            onClick={() => setShowHamburgerOptions(false)}
          >
            <HiOutlineInformationCircle size={20} />
            <span>About Us</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
