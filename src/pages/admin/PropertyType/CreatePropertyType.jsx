import React, { useState } from "react";
import { Button, InputFile, InputForm, Title } from "~/components";
import { CiCirclePlus } from "react-icons/ci";
import { useForm } from "react-hook-form";
import TextArea from "~/components/inputs/TextArea";
import { apiCreateNewPropertyType } from "~/apis/propertyType";
import { toast } from "react-toastify";

const CreatePropertyType = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const [error, setError] = useState("");

  const handleCreateNewPropertyType = async (data) => {
    if (data.images.length === 0) {
      return setError("This field is required");
    }
    const { images, ...payload } = data;
    const res = await apiCreateNewPropertyType({
      ...payload,
      image: images[0],
    });

    if (res.success) {
      toast.success(res.message);
      setValue("images", []);
      reset();
    }
  };

  return (
    <div className="bg-grays-100">
      <Title title="Create New Property Type">
        <Button
          className="font-semibold"
          onClick={handleSubmit(handleCreateNewPropertyType)}
        >
          <CiCirclePlus size={20} />
          Create
        </Button>
      </Title>

      <form className="p-4">
        <InputForm
          id="name"
          label="Property Type Name"
          inputClassName="rounded-md"
          //
          register={register}
          error={errors}
          validate={{ required: "This field Cannot empty" }}
        />

        <TextArea
          id="description"
          label="Description"
          inputClassName="rounded-md"
          //
          register={register}
          error={errors}
          validate={{ required: "This field Cannot empty" }}
        />

        <InputFile
          id="images"
          label="Image"
          //
          register={register}
          validate={{ required: "This field Cannot empty" }}
          getImages={(images) => {
            setValue(
              "images",
              images?.map((i) => i.path)
            );
            images.length > 0 && setError("");
          }}
          error={error}
        />
      </form>
    </div>
  );
};

export default CreatePropertyType;
