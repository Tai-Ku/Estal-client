import clsx from "clsx";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import withRouter from "~/hocs/withRouter";

const TopHeader = ({ location }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "h-[85px] text-white border-b border-primary-400 w-full bg-transparent flex items-center justify-between fixed z-50 top-0 px-[100px] py-[26px]",
          location.pathname !== "/" && "bg-primary-700"
        )
      )}
    >
      <div className="flex items-center gap-2">
        <AiOutlineMail />
        <div>
          <span>Email us at: </span>
          <span className="text-gray-300">example@gmail.com</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center text-gray-300 gap-6">
          <FaFacebookF />
          <FaInstagram size={18} />
          <FaYoutube size={20} />
        </div>
        <div className="flex items-center pl-8 border-l border-primary-400">
          <span className="flex items-center gap-2">
            <AiOutlinePhone />
            <span className="text-gray-300">123-456 789</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopHeader);
