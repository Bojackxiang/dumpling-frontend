import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex h-18 py-4 w-full m-auto text-black">
      <Link to="/">
        <h1 className="transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-2xl md:text-5xl">
          Dumpling
        </h1>
      </Link>

      <ul className="flex justify-end items-end pr-4 md:pr-24 w-full space-x-6 md:space-x-12 font-display font-thin md:font-light">
        <Link to="/">
          <li className="text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-red-500 border-red-500 hover:border-b-2">
            About
          </li>
        </Link>
        <Link to="/">
          <li className="text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-red-500 border-red-500 hover:border-b-2">
            Shop
          </li>
        </Link>

        <li
          onClick={() => {}}
          className="flex transition duration-300 transform hover:-translate-y-1 hover:text-red-500 
          hover:font-normal border-red-500 hover:border-b-2"
        ></li>
      </ul>
    </nav>
  );
};

export default Navbar;
