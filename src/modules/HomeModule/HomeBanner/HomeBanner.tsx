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
      data-scalar-x="15"
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
      <div data-depth="0.4" className="layer">
        <img className="background-devis" src="/images/home/parallax/02.png" />
      </div>
      <div data-depth="0.3" className="layer">
        <img className="birds" src="/images/home/parallax/03.png" />
      </div>
      <div data-depth="0" className="layer">
        <img className="light" src="/images/home/parallax/04.png" />
      </div>
      <div data-depth="0.2" className="layer">
        <img className="clouds" src="/images/home/parallax/05.png" />
      </div>
      <div data-depth="0.3" className="layer">
        <img className="flowers" src="/images/home/parallax/06.png" />
      </div>
      <div data-depth="0.2" className="layer">
        <img className="clouds-bottom" src="/images/home/parallax/07.png" />
      </div>
      <div data-depth="0.5" className="layer">
        <img className="devi" src="/images/home/parallax/08.png" />
      </div>
      <div data-depth="0.3" className="layer">
        <img className="flowers-air" src="/images/home/parallax/09.png" />
      </div>
      <div data-depth="0.5" className="layer">
        <img className="character" src="/images/home/parallax/10.png" />
      </div>
    </StyledHomeBannerWrapper>
  );
};

export default HomeBanner;
