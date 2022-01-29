import React from "react";
import { useForm } from "react-hook-form";

import Footer from "components/Footer/Footer";
import Nav from "components/Header/Nav";
import Banner from "components/Header/Banner";
import clsx from "clsx";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log("submit clicked");
  };
  console.log(errors);
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Banner />
        <Nav />
      </div>

      <div className=" text-gray-700 bg-white flex-1">
        <div className="grid grid-cols-2 h-full">
          <div
            className="h-full flex items-center justify-center"
            style={{ backgroundColor: "pink" }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white w-3/5 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div class="mb-2">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  defaultValue=""
                  placeholder="email"
                  {...register("email", { required: true })}
                  className={clsx(
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    {
                      "border-red-500 ": errors.email,
                    }
                  )}
                />
                <div className="h-5">
                  {errors.email && errors.email.type === "required" && (
                    <span class="text-red-500 block mt-1">
                      Email is required
                    </span>
                  )}
                </div>
              </div>

              <div class="mb-2">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  defaultValue=""
                  placeholder="password"
                  {...register("password", { required: true })}
                  className={clsx(
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    {
                      "border-red-500 ": errors.password,
                    }
                  )}
                />
                <div className="h-5">
                  {errors.password && errors.password.type === "required" && (
                    <span class="text-red-500 block mt-1">
                      Password is required
                    </span>
                  )}
                </div>
              </div>

              <div class="flex items-center justify-between">
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
