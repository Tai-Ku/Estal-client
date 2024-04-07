import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
const TextArea = ({
  label,
  id,
  rows = 5,
  type = "text",
  placeholder,
  //
  style = "form-input",
  containerClassName,
  //
  register,
  error,
  inputClassName,
  validate,
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
      <textarea
        type={type}
        id={id}
        placeholder={placeholder}
        className={twMerge(clsx(style, "placeholder:text-sm", inputClassName))}
        {...register(id, validate)}
        rows={rows}
      />
      {error && <small className="text-red-400 ">{error[id]?.message}</small>}
    </div>
  );
};

export default TextArea;
