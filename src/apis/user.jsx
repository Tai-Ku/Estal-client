import axios from "~/axios";

export const apiGetProfileUser = () =>
  axios({
    url: "/user/profile-user",
    method: "GET",
  });
