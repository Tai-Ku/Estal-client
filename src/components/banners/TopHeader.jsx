import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="h-[85px] text-white border-b border-primary-400 w-full bg-transparent flex items-center justify-between fixed z-50 top-0 px-[100px] py-[26px]">
      <div className="flex items-center gap-2">
        <AiOutlineMail />
        <div>
          <span>Email us at: </span>
          <span className="text-gray-300">example@gmail.com</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center text-xl text-gray-300 gap-6">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="flex items-center pl-8 border-l border-primary-400">
          <spa className="flex items-center gap-2">
            <AiOutlinePhone />
            <span className="text-gray-300">123-456 789</span>
          </spa>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
