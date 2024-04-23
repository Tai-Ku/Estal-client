import axios from "axios";

const CLOUNDINARY_NAME = import.meta.env.VITE_CLOUNDINARY_NAME;

export const apiUploadImage = (data) =>
  axios({
    method: "post",
    url: `https://api.cloudinary.com/v1_1/${CLOUNDINARY_NAME}/image/upload`,
    data,
  });
