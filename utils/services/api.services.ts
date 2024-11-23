import { httpReq } from "../Provider/api";

export const registerUser = (data: {
  username: string;
  email: string;
  password: string;
}) =>
  httpReq({
    url: `/auth/register`,
    method: "POST",
    data,
  });
