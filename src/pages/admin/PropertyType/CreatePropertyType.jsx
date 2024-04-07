import React from "react";
import { Button, InputFile, InputForm, Title } from "~/components";
import { CiCirclePlus } from "react-icons/ci";
import { useForm } from "react-hook-form";
import TextArea from "~/components/inputs/TextArea";

const CreatePropertyType = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleCreateNewPropertyType = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-grays-100">
      <Title title="Create New Property Type">
        <Button onClick={handleSubmit(handleCreateNewPropertyType)}>
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
          id="image"
          label="Image"
          //
          register={register}
          error={errors}
          validate={{ required: "This field Cannot empty" }}
        />
      </form>
    </div>
  );
};

export default CreatePropertyType;
