import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { createApiClient } from "../Provider/api";

interface PostDataProps<T> {
  endpoint: string;
  payload: T;
}

// export const usePostData = <T, R>(): UseMutationResult<
//   R,
//   Error,
//   PostDataProps<T>
// > => {
//   // Mutation function that matches the expected structure
//   const mutationFn = async ({
//     endpoint,
//     payload,
//   }: PostDataProps<T>): Promise<R> => {
//     const { data } = await createApiClient().post<R>(endpoint, payload);
//     return data;
//   };

//   // Pass the function directly to useMutation
//   return useMutation<R, Error, PostDataProps<T>>(mutationFn);
// };

export const usePostData = <T, R>(): UseMutationResult<
  R,
  Error,
  PostDataProps<T>
> => {
  const $http = createApiClient();
  const mutationFn = async ({
    endpoint,
    payload,
  }: PostDataProps<T>): Promise<R> => {
    const { data } = await $http.post<R>(endpoint, payload);
    return data;
  };

  return useMutation({ mutationFn }); // Pass only the mutation function here.
};
