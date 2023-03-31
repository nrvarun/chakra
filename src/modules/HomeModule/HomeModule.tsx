import Image from "next/image";
import React from "react";
import {
  StyledHomeBanner,
  StyledHomeBannerBgImgWrapper,
  StyledHomeBannerContent,
} from "./home.style";

type Props = {};

import SVG from "react-inlinesvg";

const HomeModule = (props: Props) => {
  return (
    <main>
      <StyledHomeBanner>
        <StyledHomeBannerBgImgWrapper>
          <Image
            fill
            priority
            src="/images/landing-bgimg.png"
            alt="landing banner"
          />
        </StyledHomeBannerBgImgWrapper>
        <div className="grid grid-cols-2 z-10 relative">
          <StyledHomeBannerContent>
            <SVG src="/icons/logo.svg" className="mb-3" />
            <p className="text-md text-white font-inter p-2">
              Chakra is a dynamic, ever expanding IP anchored in eastern
              mythologies that mimics natural evolution of human mythos and
              culture. Chakra seeks to speedrun millennia-long mythmaking by
              bringing it to life within a high-fidelity sandbox by leveraging
              mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]
            </p>
          </StyledHomeBannerContent>
        </div>
      </StyledHomeBanner>
    </main>
  );
};

export default HomeModule;
