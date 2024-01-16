import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ImSpinner2 } from "react-icons/im";
const Button = ({
  children,
  className,
  onClick,
  type = "button",
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        clsx(
          "py-3 px-4 text-white cursor-pointer bg-primary-700 rounded-md inline-flex items-center justify-center gap-3",
          className,
          (disabled || loading) && "opacity-50"
        )
      )}
      disabled={disabled || loading}
    >
      {loading && (
        <span className="animate-spin">
          <ImSpinner2 />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
