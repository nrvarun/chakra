import React from "react";
import { StyledHomeMobileBanner } from "./home.style";
import HomeMobileNav from "./HomeMobileNav";

type Props = {};

const HomeMobile = (props: Props) => {
  return (
    <StyledHomeMobileBanner>
      <img src="/images/mobile/home.png" alt="home page banner" />
      <HomeMobileNav />
    </StyledHomeMobileBanner>
  );
};

export default HomeMobile;
