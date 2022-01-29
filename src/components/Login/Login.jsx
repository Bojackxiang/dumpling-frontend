import React from "react";
import Footer from "components/Footer/Footer";
import aboutImg from "assets/aboutImg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Nav from "components/Header/Nav";
import Banner from "components/Header/Banner";

const Login = () => {
  return (
    <div className="h-screen">
      <div>
        <Banner />
        <Nav/>
      </div>

      <div className=" text-gray-700 bg-white h-screen h-auto">
        <div className="w-9/12 text-center m-auto">

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
