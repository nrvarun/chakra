import { StyledHomeBannerWrapper } from "./homebanner.style";
import { StyledHomeBannerBgImgWrapper } from "../home.style";
import Image from "next/image";

import Parallax from "parallax-js";
import { useEffect, useRef } from "react";

type Props = {};

const HomeBanner = (props: Props) => {
  const homeBannerRef = useRef(null);

  useEffect(() => {
    if (homeBannerRef) {
      var scene = document.getElementById("home-scene");
      if (scene) {
        var parallaxInstance = new Parallax(scene);
      }
    }
  }, [homeBannerRef]);

  return (
    <StyledHomeBannerWrapper
      id="home-scene"
      data-friction-x="0.1"
      data-friction-y="0.1"
      data-scalar-x="25"
      data-scalar-y="15"
      // data-relative-input="true"
      style={{
        height: "100vh",
        width: "100vw",
      }}
      ref={homeBannerRef}
    >
      <div data-depth="0" className="relative"></div>
      <div data-depth="0.10" className="layer">
        <img
          className="background"
          src="/images/home/parallax/background.png"
        />
      </div>
      <div data-depth="0.2" className="layer">
        <img className="devi" src="/images/home/parallax/2.png" />
      </div>
      <div data-depth="0.5" className="layer">
        <img className="character" src="/images/home/parallax/3.png" />
      </div>
      {/* <StyledHomeBannerBgImgWrapper>
        <Image
          fill
          priority
          src="/images/landing-bgimg.png"
          alt="landing banner"
        />
      </StyledHomeBannerBgImgWrapper> */}
    </StyledHomeBannerWrapper>
  );
};

export default HomeBanner;
