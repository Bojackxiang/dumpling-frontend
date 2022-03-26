import React from "react";
import { Link } from "react-router-dom";
import hero from "assets/hero.jpg";
import { useMutation } from "@apollo/client";
import { mutation_hello2 } from "apollo";

const Home = () => {
  return (
    <div className="w-screen h-full">
      <IntroSection />
    </div>
  );
};

export default Home;

const IntroSection = () => {
  const [executeFn, { data, error, loading }] = useMutation(mutation_hello2);

  const execute = (e) => {
    e.preventDefault();
    executeFn({
      variables: {
        input: {
          name: "sample name",
        },
      },
    });
  };

  console.log({ data, error, loading });

  return (
    <div
      className="bg-center bg-cover bg-no-repeat"
      style={{
        height: 600,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${hero})`,
      }}
    >
      <div className="flex flex-col h-full px-4 md:ml-auto md:mt-auto w-full md:w-1/2 justify-center text-white font-display space-y-4 md:space-y-6">
        <p className="text-3xl md:text-5xl">
          Delicious Asian Foot <br></br> Chu's Dumpling
        </p>
        <p className="font-light text-lg sm:text-2xl">Order now and taste it</p>
        <Link to="/shop">
          <button
            onClick={execute}
            className="bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-600 "
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};
