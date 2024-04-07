import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { FaCloudUploadAlt } from "react-icons/fa";

const InputFile = ({
  label,
  id,
  rows = 5,
  placeholder,
  //
  containerClassName,
  //
  register,
  error,
  validate,
}) => {
  return (
    <div
      className={twMerge(
        clsx("flex flex-col gap-2 w-full", containerClassName)
      )}
    >
      {label && (
        <span htmlFor={id} className="font-medium text-primary-700">
          {label}
        </span>
      )}

      <label
        htmlFor={id}
        className="font-medium bg-gray-100 w-full p-16 flex flex-col items-center justify-center gap-4 rounded-md"
      >
        <span className="text-5xl text-gray-300">
          <FaCloudUploadAlt />
        </span>
        <small className="italic">
          Only support Image width extension JPEG, PNG, JPG
        </small>
      </label>

      <input
        type="file"
        id={id}
        placeholder={placeholder}
        className=""
        {...register(id, validate)}
        rows={rows}
        style={{ display: "none" }}
      />

      {error && <small className="text-red-400 ">{error[id]?.message}</small>}
    </div>
  );
};

export default InputFile;
