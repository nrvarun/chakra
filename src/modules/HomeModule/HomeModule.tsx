import React, { useEffect } from "react";
import {
  StyledHomeBanner,
  StyledHomeBannerBgImgWrapper,
  StyledHomeBannerContent,
} from "./home.style";

type Props = {};

import SVG from "react-inlinesvg";
import HomeBanner from "./HomeBanner";
import { useRouter } from "next/router";

const HomeModule = (props: Props) => {
  return (
    <main
      style={{
        background: "#000000",
      }}
    >
      <StyledHomeBanner>
        <HomeBanner />
        <div className="grid lg:grid-cols-2 z-10 relative mt-10 md:mt-0">
          <StyledHomeBannerContent>
            <SVG src="/icons/logo.svg" className="mb-3" />
            <p className="text-md text-white font-inter p-2">
              Decentralised Collaborative Mythmaking.
            </p>
          </StyledHomeBannerContent>
        </div>
      </StyledHomeBanner>
    </main>
  );
};

export default HomeModule;
