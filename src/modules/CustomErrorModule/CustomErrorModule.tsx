import Image from "next/image";
import React from "react";
import {
  StyledHomeBanner,
  StyledHomeBannerBgImgWrapper,
  StyledHomeBannerContent,
} from "./home.style";

type Props = {};

import SVG from "react-inlinesvg";
import Link from "next/link";

const CustomErrorModule = (props: Props) => {
  return (
    <main className="">
      <StyledHomeBanner>
        <StyledHomeBannerBgImgWrapper>
          <Image
            fill
            style={{
              objectFit: "cover",
            }}
            priority
            src="/images/404.png"
            alt="error banner"
          />
        </StyledHomeBannerBgImgWrapper>
        <div className="grid grid-cols-2 z-10 relative">
          <StyledHomeBannerContent>
            <SVG src="/icons/logo.svg" className="mb-3" />
            <p className="text-md text-white font-inter p-2">
              Looks like you are stranded,
              <Link href="/">
                <span className="text-white underline ml-1">Go Home</span>
              </Link>
              .
            </p>
          </StyledHomeBannerContent>
        </div>
      </StyledHomeBanner>
    </main>
  );
};

export default CustomErrorModule;
