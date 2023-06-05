import React from "react";
import { StyledHomeMobileBanner } from "./home.style";
import Image from "next/image";

type Props = {};

const HomeMobile = (props: Props) => {
  return (
    <StyledHomeMobileBanner>
      <img src="/images/ogg/banner.png" />
    </StyledHomeMobileBanner>
  );
};

export default HomeMobile;
