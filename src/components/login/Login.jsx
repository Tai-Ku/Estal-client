import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Button, InputForm, InputRadio } from "..";
import { useForm } from "react-hook-form";
import { apiLogin, apiRegister } from "~/apis/auth";
import { toast } from "react-toastify";
import { useAppStore } from "~/store/useAppStore";

const Login = ({ navigate }) => {
  const { setModal } = useAppStore();
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

  const onSubmit = async (data) => {
    if (variant === "LOGIN") {
      const res = await apiLogin(data);

      if (res.success) {
        setModal(false);
        return toast.success(res.message);
      }

      return toast.error(res.message);
    }

    const res = await apiRegister(data);

    if (res.success) {
      setVariant("LOGIN");
      return toast.success(res.message);
    }

    return toast.error(res.message);
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
          validate={{
            required: "Field is required",
            pattern: {
              value: /^\d+$/,
              message: "Phone number invalid",
            },
          }}
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
            id="name"
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

        {variant === "REGISTER" && (
          <InputRadio
            id="role"
            label="Type account"
            register={register}
            validate={{ required: "Field is required" }}
            error={errors}
            option={[
              {
                label: "User",
                value: "USER",
              },
              {
                label: "Agent",
                value: "AGENT",
              },
            ]}
            onChange={(e) => console.log(e.target.value)}
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
