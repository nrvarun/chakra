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
      data-relative-input="true"
      ref={homeBannerRef}
    >
      <div data-depth="0" className="relative">
        <img className="layer background" src="/images/home/parallax/1.png" />
      </div>
      <div data-depth="0.8">
        <img className="layer devi" src="/images/home/parallax/2.png" />
      </div>
      <div data-depth="0.3" className="relative">
        <img className="layer character" src="/images/home/parallax/3.png" />
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
