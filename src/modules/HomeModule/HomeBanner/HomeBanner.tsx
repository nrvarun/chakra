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
        <img className="background" src="/images/home/new/background.png" />
      </div>
      <div data-depth="0.35" className="layer">
        <img className="background-devis" src="/images/home/new/02.png" />
      </div>
      <div data-depth="0.1" className="layer">
        <img className="birds" src="/images/home/new/03.png" />
      </div>
      <div data-depth="0.5" className="layer">
        <img className="light" src="/images/home/new/04.png" />
      </div>
      <div data-depth="0.4" className="layer">
        <img className="flowers" src="/images/home/new/06.png" />
      </div>
      <div data-depth="0.2" className="layer">
        <img className="devi" src="/images/home/new/07.png" />
      </div>
      <div data-depth="0.25" className="layer">
        <img className="birds" src="/images/home/new/08.png" />
      </div>
      <div data-depth="0.4" className="layer">
        <img className="character" src="/images/home/new/09.png" />
      </div>
      <div data-depth="0.35" className="layer">
        <img className="clouds" src="/images/home/new/10.png" />
      </div>
      <div data-depth="0.25" className="layer">
        <img className="character-left" src="/images/home/new/11.png" />
      </div>
    </StyledHomeBannerWrapper>
  );
};

export default HomeBanner;
