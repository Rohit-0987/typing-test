import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { HiDocumentText } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#212234] p-[2em] text-slate-300 mt-2 flex flex-col items-center justify-center gap-[1.5em] max-480px:px-2">
      <div className="flex w-[90%] justify-between max-480px:w-[100%] max-480px:gap-[8em]">
        <div className="flex gap-3 items-center max-480px:self-start">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            height={60}
            width={60}
            className="max-480px:w-[55px] max-480px:h-[55px]"
          />
          <span className="text-[1.6em] leading-[1.15em] font-medium max-480px:text-[1.3em]">
            Typing Test
          </span>
        </div>

        <div className="flex flex-row gap-2 w-[50%] justify-between max-480px:flex-col">
          <div className="gap-2 h-fit font-normal items-start flex flex-col justify-between max-480px:text-sm">
            <Link
              aria-label="About"
              href="/about"
              className="flex gap-2 items-center font-medium hover:text-[#9854f5] max-480px:items-start"
            >
              <HiOutlineInformationCircle className="h-[20px] w-[20px]" />
              <span>About</span>
            </Link>
            <Link
              aria-label="Privacy"
              href="/privacy"
              className="flex gap-2 items-center font-medium hover:text-[#9854f5] max-480px:items-start"
            >
              <MdOutlinePrivacyTip className="h-[20px] w-[20px]" />
              <span>Privacy Policy</span>
            </Link>
          </div>

          <div className="gap-2 h-fit font-normal items-start flex flex-col justify-between max-480px:text-sm">
            <Link
              aria-label="Support"
              href="/support"
              className="flex gap-2 items-center font-medium hover:text-[#9854f5] max-480px:items-start"
            >
              <MdOutlineSupportAgent className="h-[20px] w-[20px]" />
              <span>Support</span>
            </Link>

            <Link
              aria-label="Terms of Service"
              href="/terms_of_service"
              className="flex gap-2 items-center font-medium hover:text-[#9854f5] max-480px:items-start"
            >
              <HiDocumentText className="h-[20px] w-[20px]" />
              <span>Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center max-480px:text-sm">
        Copyright &copy; 2024 Typing Test. All rights are reserved.
      </div>
    </footer>
  );
};

export default Footer;
