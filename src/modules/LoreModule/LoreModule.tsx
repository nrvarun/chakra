/* eslint-disable @next/next/no-img-element */

import Slider from "react-slick";

import {
  StyledSliderNavBtn,
  StyledLoreBgImgWrapper,
  StyledLoreContent,
  StyledLoreFactionSection,
  StyledSliderNavWrapper,
} from "./lore.style";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Premise from "./Premise";
import Story from "./Story";
import Philosophy from "./Philosophy";
import { useRef } from "react";

type Props = {};

const FACTION_NAV_LIST = [
  {
    id: "rakshasa",
    title: "Rakshasha",
  },
  {
    id: "bheekara",
    title: "Bheekara/Daitya",
  },
  {
    id: "deva",
    title: "Deva",
  },
  {
    id: "daiva",
    title: "Ugradeva/Daiva",
  },
  {
    id: "asura",
    title: "Asura",
  },
  {
    id: "yaksha",
    title: "Yaksha",
  },
  {
    id: "apsara",
    title: "Apsara",
  },
  {
    id: "vanara",
    title: "Vanara",
  },
  {
    id: "naga",
    title: "Naga",
  },
  {
    id: "kimpurusha",
    title: "Kimpurusha (tiger/bear/parrot)",
  },
  {
    id: "garuda",
    title: "Garuda",
  },
  {
    id: "shakti",
    title: "Shakti",
  },
];

const NAV_ITEMS = [
  {
    id: "premise",
    title: "premise",
  },
  {
    id: "story",
    title: "story",
  },
  {
    id: "philosophy",
    title: "philosophy",
  },
  {
    id: "faction",
    title: "factions",
    hasDropdown: true,
    subList: FACTION_NAV_LIST,
  },
];

const LoreModule = (props: Props) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    customPaging: function (i) {
      return <button></button>;
    },
    dotsClass: "slick-dots slick-thumb",
  };

  const sliderRef = useRef<any>(null);

  const goToNext = () => {
    if (sliderRef) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <main className="non-landing lore">
      {/* <WorldNav title="lore" list={NAV_ITEMS} activeSection={activeSection} /> */}
      <StyledLoreBgImgWrapper>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <StyledLoreContent>
              <Story />
            </StyledLoreContent>
          </div>
          <div>
            <StyledLoreContent>
              <Premise />
            </StyledLoreContent>
          </div>
          <div>
            <StyledLoreContent>
              <Philosophy />
            </StyledLoreContent>
          </div>
        </Slider>
        <StyledSliderNavWrapper>
          <StyledSliderNavBtn onClick={goToPrev}>Back</StyledSliderNavBtn>
          <StyledSliderNavBtn onClick={goToNext}>Next</StyledSliderNavBtn>
        </StyledSliderNavWrapper>
      </StyledLoreBgImgWrapper>
    </main>
  );
};

export default LoreModule;
