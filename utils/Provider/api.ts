import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, token_name } from "./constants";
import Cookies from "js-cookie";

const client = axios.create({
  baseURL: BASE_URL,
});

export const httpReq = async (options: AxiosRequestConfig<any>) => {
  let token;
  const userToken = Cookies.get(token_name);

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

export const createApiClient = () => {
  const config: AxiosRequestConfig = {
    baseURL: BASE_URL,
  };
  const accessToken = Cookies.get("tK_U_za");
  if (accessToken) {
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const client = axios.create(config);
  client.interceptors.response.use(
    (res) => {
      return Promise.resolve(res);
    },
    (err) => {
      if (err.response) {
        if (err.response.data && err.response.data.error === "EXPIRED_TOKEN") {
          Cookies.remove("tK_U_za");
          window.location.href = "/";
        }
      }
      return Promise.reject(err);
    }
  );
  return client;
};
