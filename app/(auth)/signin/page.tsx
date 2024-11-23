"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { FormikProvider, useFormik } from "formik";
import { usePostData } from "@/utils/hooks/useMutation";
import Cookies from "js-cookie";
import { token_name } from "@/utils/Provider/constants";

export default function SignIn() {
  const router = useRouter();
  const [errMessage, setErrMessage] = useState("");

  const { mutate, mutateAsync, isError, isPending, error } = usePostData();

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // do something

      mutateAsync({ endpoint: "/auth/login", payload: values })
        .then((res: any) => {
          // Do something
          Cookies.set(token_name, res.data.accessToken);
          router.push("/");
          // redirect("/");
        })
        .catch((err) => {
          setErrMessage(err.response.data.details.message as string);
        });
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-900">
          Sign In to MuseoMelody
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errMessage}
          </div>
        )}

        <FormikProvider value={form}>
          <form onSubmit={form.handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                value={form.values.email}
                onChange={form.handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                value={form.values.password}
                onChange={form.handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-900 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {isPending ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </FormikProvider>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                New to MuseoMelody?
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col space-y-4">
            <Link
              href="/signup"
              className="w-full flex justify-center py-2 px-4 border border-purple-900 rounded-md shadow-sm text-sm font-medium text-purple-900 hover:bg-purple-50"
            >
              Create an account
            </Link>
            <Link
              href="/membership"
              className="w-full flex justify-center py-2 px-4 border border-purple-900 rounded-md shadow-sm text-sm font-medium text-purple-900 hover:bg-purple-50"
            >
              View Membership Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
