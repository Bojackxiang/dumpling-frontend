import React from "react";

const Footer = () => {
  console.log(process.env);
  return <div>mode: {process.env.REACT_APP_MODE}</div>;
};

export default Footer;
