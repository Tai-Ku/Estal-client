import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { apiUploadImage } from "~/apis/beyond";
import { ImSpinner2 } from "react-icons/im";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";

const InputFile = ({
  label,
  id,
  rows = 5,
  //
  containerClassName,
  validate,
  isMultiple = false,
  getImages,
  error,
}) => {
  const { register, watch } = useForm();
  const watchValueImage = watch(id);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (files) => {
    setIsLoading(true);
    const formData = new FormData();
    const data = [];

    for (let file of files) {
      formData.append("file", file);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUNDINARY_UPLOAD_PRESETS
      );
      data.push(apiUploadImage(formData));
    }
    const res = await Promise.all(data);
    if (res && res.length > 0) {
      const templateArr = [];
      for (let result of res) {
        if (result.status === 200)
          templateArr.push({
            id: result.data.public_id,
            path: result.data.secure_url,
          });
      }
      setImages(templateArr);
    } else {
      toast.error("Uploaded images Failed");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(images);
  }, [getImages, images]);

  useEffect(() => {
    if (
      watchValueImage &&
      watchValueImage instanceof FileList &&
      watchValueImage.length > 0
    ) {
      handleUpload(watchValueImage);
    }
  }, [watchValueImage]);

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
        className="font-medium bg-gray-100 w-full p-16  flex flex-col items-center justify-center gap-4 rounded-md"
      >
        {isLoading ? (
          <span className="animate-spin text-primary-600">
            <ImSpinner2 size={30} />
          </span>
        ) : images?.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {images.map((item) => (
              <div key={item.id} className="col-span-1 relative">
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    setImages((prev) => prev.filter((pr) => pr.id !== item.id));
                    e.preventDefault();
                  }}
                  className="w-6 h-6 rounded-full  bg-slate-100 flex items-center justify-center cursor-pointer absolute top-1 right-1"
                >
                  <IoIosClose size={18} />
                </span>
                <img
                  src={item.path}
                  alt="Images"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <span className="text-5xl text-gray-300">
              <FaCloudUploadAlt />
            </span>
            <small className="italic">
              Only support Image width extension JPEG, PNG, JPG
            </small>
          </>
        )}
      </label>

      <input
        type="file"
        multiple={isMultiple}
        id={id}
        className=""
        {...register(id, validate)}
        rows={rows}
        style={{ display: "none" }}
      />
      {error && <small className="text-red-400 ">{error}</small>}
    </div>
  );
};

export default InputFile;
