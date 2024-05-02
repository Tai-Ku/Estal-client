import clsx from "clsx";
import React, { Fragment, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import withRouter from "~/hocs/withRouter";
import { useUserStore } from "~/store/useUserStore";
import { FaCaretDown } from "react-icons/fa";
import { userOptions } from "~/untils/constant";
import useComponentVisible from "~/hooks/useComponentVisible";
import { Link } from "react-router-dom";

const TopHeader = ({ location }) => {
  const { user, logOut } = useUserStore();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

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
            <span className="text-gray-300">0-123123-123123</span>
          </span>
        </div>
        {user && (
          <div
            onClick={() => setIsComponentVisible(true)}
            className="flex relative items-center gap-4 pl-8 border-l border-primary-400 cursor-pointer"
          >
            <span>{user?.name}</span>
            <span className="flex items-center gap-1 text-gray-400 hover:text-white">
              <img
                src={user?.avatar || "/user.svg"}
                alt="avatar"
                className="w-8 h-8 object-cover rounded-full"
              />
              <FaCaretDown color="" size={20} />
            </span>

            {isComponentVisible && (
              <div
                ref={ref}
                className="absolute right-0 top-full z-50 bg-white drop-shadow-sm flex flex-col py-2 border text-black rounded-md"
              >
                {userOptions.map((item) => (
                  <Fragment key={item.id}>
                    {user?.userRoles.some(
                      (role) => role.roleCodes === item.code
                    ) && (
                      <Link
                        to={item.path}
                        onClick={() => console.log(item)}
                        className="px-6 py-2 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    )}
                  </Fragment>
                ))}
                <span onClick={logOut} className="px-6 py-2 hover:bg-gray-100">
                  Log out
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(TopHeader);
