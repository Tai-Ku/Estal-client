import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Login } from "..";
import { navigations } from "~/untils/constant";
import clsx from "clsx";
import withRouter from "~/hocs/withRouter";
import { twMerge } from "tailwind-merge";
import { useUserStore } from "~/store/useUserStore";
import { useAppStore } from "~/store/useAppStore";

const Navigation = ({ location, navigate }) => {
  const { token } = useUserStore();
  const { setModal } = useAppStore();

  return (
    <div
      className={twMerge(
        clsx(
          "h-[85px] w-full flex items-center justify-between text-black fixed z-50 top-[85px] px-[100px] py-[26px]",
          location.pathname !== "/" && "bg-white"
        )
      )}
    >
      <Link to="/">
        <img src="/logo1.png" alt="logo" className="w-[120px] object-contain" />
      </Link>
      <div
        className={clsx(
          "flex items-center gap-6 text-primary-100",
          location.pathname === "/" ? "text-primary-100" : "text-gray-900"
        )}
      >
        {navigations.map((item) => (
          <NavLink
            className={({ isActive }) =>
              clsx(
                isActive && "font-medium",
                location.pathname === "/" ? "text-white" : "text-gray-900"
              )
            }
            key={item.id}
            to={item.path}
          >
            {item.text}
          </NavLink>
        ))}

        {!token ? (
          <Button
            onClick={() => setModal(true, <Login />)}
            className={twMerge(
              clsx(
                location.pathname === "/" &&
                  "bg-transparent border border-primary-100"
              )
            )}
          >
            Sign in
          </Button>
        ) : (
          // <Button
          //   className={twMerge(
          //     clsx(
          //       location.pathname === "/" &&
          //         "bg-transparent border border-primary-100"
          //     )
          //   )}
          // >
          //   Add Listing
          // </Button>
          <Button
            onClick={() => setModal(true, <Login />)}
            className={twMerge(
              clsx(
                location.pathname === "/" &&
                  "bg-transparent border border-primary-100"
              )
            )}
          >
            Sign in
          </Button>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navigation);
