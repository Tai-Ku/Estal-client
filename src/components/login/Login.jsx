import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Button, InputForm } from "..";
import { useForm } from "react-hook-form";

const Login = () => {
  const [variant, setVariant] = useState("LOGIN");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    reset();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="px-6 text-base py-8 w-[500px] flex flex-col items-center gap-6 bg-white rounded-md"
    >
      <h1 className="text-3xl font-semibold ">WelCome to Rest06</h1>
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
      <form className="flex w-full flex-col gap-4 px-4">
        <InputForm
          id="phone"
          placeholder="Type your phone number"
          label="Phone Number"
          inputClassName="rounded-md"
          register={register}
          validate={{ required: "Field is required" }}
          error={errors}
        />

        <InputForm
          id="password"
          placeholder="Type your password"
          label="Password"
          inputClassName="rounded-md"
          register={register}
          type="password"
          validate={{ required: "Field is required" }}
          error={errors}
        />

        {variant === "REGISTER" && (
          <InputForm
            id="fullName"
            placeholder="Type your full name"
            label="Your Full Name"
            inputClassName="rounded-md"
            register={register}
            validate={
              variant === "REGISTER" && { required: "Field is required" }
            }
            error={errors}
          />
        )}

        <Button onClick={handleSubmit(onSubmit)} className="py-2 my-6">
          {variant === "LOGIN" ? "Sign In" : "Register"}
        </Button>

        <span className="cursor-pointer text-primary-500 w-full text-center hover:underline">
          Forgot your password?
        </span>
      </form>
    </div>
  );
};

export default Login;
