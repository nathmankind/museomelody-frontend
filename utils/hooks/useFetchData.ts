import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import axiosInstance from "../lib/axios";
import { createApiClient } from "../Provider/api";
import { useMemo } from "react";

interface FetchDataProps {
  endpoint: string;
}

export const useFetchData = <T>(endpoint: string): UseQueryResult<T> => {
  const apiClient = useMemo(() => {
    return createApiClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return useQuery<T, Error>({
    queryKey: [endpoint], // Unique identifier for the query
    queryFn: async () => {
      const { data } = await apiClient.get<T>(endpoint);
      return data;
    },
  });
};
