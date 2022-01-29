import React from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

import Footer from "components/Footer/Footer";
import Nav from "components/Header/Nav";
import Banner from "components/Header/Banner";
import about from "assets/about.jpg";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log("submit clicked");
  };

  // left component
  const RightComponent = () => {
    return (
      <div className=" h-full ml-auto w-1/2">
        <div className="h-full flex items-center justify-center bg-zinc-200/[.5] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white lg:w-96 sm:w-4/5 w-full shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="text-2xl text-center mb-5">Register</h1>
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
                  <span class="text-red-500 block mt-1">Email is required</span>
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
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <div>
        <Banner />
        <Nav />
      </div>
      <div
        className="flex-1"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${about})`,
        }}
      >
        <RightComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
