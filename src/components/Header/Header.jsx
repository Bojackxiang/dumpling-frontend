import React from "react";
import styled from "styled-components";
import { Banner } from "components/Banner";
import { Navbar } from "components/Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Banner />
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Header;
