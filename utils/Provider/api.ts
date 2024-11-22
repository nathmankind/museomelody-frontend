import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./constants";
import Cookies from "js-cookie";

const client = axios.create({
  baseURL: BASE_URL,
});

export const request = async (options: AxiosRequestConfig<any>) => {
  let token;
  const userToken = Cookies.get("tK_U_za");

  //const userState = state?.user?.currentUser;
  // if (userState === null) {
  //   token = "";
  // } else {
  //   const { accessToken } = userState;
  //   token = accessToken;
  // }
  // Set the authorization header
  userToken !== "" &&
    (client.defaults.headers.common.Authorization = `Bearer ${userToken}`);

  const onSuccess = (response: { data: { data: any } }) => {
    return response?.data?.data;
  };

  const onError = (error: { response: { data: any } }) => {
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
