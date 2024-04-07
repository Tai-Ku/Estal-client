import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Editor } from "@tinymce/tinymce-react";
const InputText = ({
  label,
  id,
  //
  height = 500,
  containerClassName,
  //
  register,
  error,
  validate,
  setValue,
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

      <Editor
        // onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey={import.meta.env.VITE_TINYCME_API_KEY}
        // initialValue="<p>This is the initial content of the editor.</p>"
        {...register(id, validate)}
        onChange={(e) => setValue(id, e.target.getContent())}
        init={{
          height,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {error && <small className="text-red-400 ">{error[id]?.message}</small>}
    </div>
  );
};

export default InputText;
