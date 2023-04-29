/* eslint-disable @next/next/no-img-element */

import { StyledMobileBanner } from "./mobilebanner.style";

type Props = {};

import SVG from "react-inlinesvg";

const MobileBanner = (props: Props) => {
  return (
    <StyledMobileBanner>
      <img src="/images/ogg/banner.png" alt="mobile view" />
      <article className="m-auto">
        <SVG src="/icons/logo.svg" />
        <h2 className="text-lg  font-inter text-center font-regular text-white">
          Switch to the desktop version for a better browsing experience!
        </h2>
      </article>
    </StyledMobileBanner>
  );
};

export default MobileBanner;
