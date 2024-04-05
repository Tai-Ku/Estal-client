import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const InputRadio = ({
  style = "form-radio",
  containerClassName,
  optionClassName,
  label,
  id,
  register,
  error,
  inputClassName,
  validate,
  placeholder,
  option = [],
  onChange,
}) => {
  return (
    <div
      className={twMerge(
        clsx("flex flex-col gap-2 w-full", containerClassName)
      )}
    >
      <label htmlFor={label} className="font-medium text-primary-700">
        {label}
      </label>
      <div className={twMerge(clsx(optionClassName))}>
        {option.map((elm, idx) => (
          <div className="flex items-center cursor-pointer gap-4" key={idx}>
            <input
              type="radio"
              name={id}
              id={elm.value}
              placeholder={placeholder}
              className={twMerge(
                clsx(style, "placeholder:text-sm", inputClassName)
              )}
              {...register(id, validate)}
              value={elm.value}
              onChange={onChange}
            />
            <label htmlFor={elm.value} className="font-medium text-primary-700">
              {elm.label}
            </label>
          </div>
        ))}
      </div>

      {error && <small className="text-red-400 ">{error[id]?.message}</small>}
    </div>
  );
};

export default InputRadio;
