import clsx from "clsx";
import React, { useState } from "react";

const Login = () => {
  const [variant, setVariant] = useState("LOGIN");

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="px-6 text-base py-8 w-[500px] flex flex-col items-center gap-6 bg-white rounded-md"
    >
      <h1 className="text-5xl font-semibold  font-dance">WelCome to Rest06</h1>
      <div className="flex items-center border-b w-full justify-start gap-6">
        <span
          onClick={() => setVariant("LOGIN")}
          className={clsx(
            "cursor-pointer border-b-2 transition-all duration-200 hover:text-primary-400",
            variant === "LOGIN"
              ? " border-primary-700 cursor-not-allowed "
              : "border-transparent"
          )}
        >
          Login
        </span>
        <span
          onClick={() => setVariant("REGISTER")}
          className={clsx(
            "cursor-pointer border-b-2 transition-all duration-200 hover:text-primary-400",
            variant === "REGISTER"
              ? "border-b-2 border-primary-700 cursor-not-allowed"
              : "border-transparent"
          )}
        >
          New Account
        </span>
      </div>
    </div>
  );
};

export default Login;
