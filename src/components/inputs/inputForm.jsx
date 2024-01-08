import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const inputForm = ({
  style = "form-input",
  containerClassName,
  label,
  id,
  type = "text",
  register,
  error,
  inputClassName,
  validate,
  placeholder,
}) => {
  return (
    <div
      className={twMerge(
        clsx("flex flex-col gap-2 w-full", containerClassName)
      )}
    >
      {label && (
        <label htmlFor={id} className="font-medium text-primary-700">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={twMerge(clsx(style, "placeholder:text-sm", inputClassName))}
        {...register(id, validate)}
      />
      {error && <small className="text-red-400 ">{error[id]?.message}</small>}
    </div>
  );
};

export default inputForm;
