/* eslint-disable @next/next/no-img-element */

import Slider from "react-slick";

import {
  StyledSliderNavBtn,
  StyledLoreBgImgWrapper,
  StyledLoreContent,
  StyledLoreFactionSection,
  StyledSliderNavWrapper,
  StyledLoreBreadCrumbWrapper,
  StyledStoryNav,
} from "./lore.style";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Premise from "./Premise";
import Story from "./Story";
import Philosophy from "./Philosophy";
import { useRef, useState } from "react";
import Link from "next/link";

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
  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i) {
      return <button></button>;
    },
    beforeChange: (current, next) => {
      setActiveSlide(next + 1);
    },
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
      <StyledLoreBreadCrumbWrapper className="grid grid-cols-3 items-center container mx-auto relative">
        <div className="text-left flex items-center relative z-10">
          <Link href="/world">
            <p className="text-xs font-semibold capitalize underline-offset-1">
              world
            </p>
          </Link>
          <span className="text-sm font-semibold capitalize text-white mx-1">
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.1912 0.154081C0.0687752 0.252768 4.59938e-07 0.3866 4.53839e-07 0.526144C4.47739e-07 0.665688 0.0687751 0.79952 0.1912 0.898207L3.42372 3.50318L0.1912 6.10815C0.0722444 6.2074 0.00642224 6.34033 0.00791045 6.47832C0.00939817 6.6163 0.078077 6.74829 0.199155 6.84586C0.320232 6.94344 0.484021 6.99878 0.655245 6.99998C0.826468 7.00118 0.991426 6.94814 1.11459 6.85227L4.8088 3.87524C4.93123 3.77655 5 3.64272 5 3.50318C5 3.36363 4.93123 3.2298 4.8088 3.13111L1.11459 0.154081C0.992127 0.0554227 0.826056 -1.82449e-07 0.652894 -1.90018e-07C0.479733 -1.97587e-07 0.313662 0.0554227 0.1912 0.154081Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-xs font-semibold capitalize text-white">
            Lore
          </span>
        </div>
      </StyledLoreBreadCrumbWrapper>
      <StyledStoryNav>
        <Link href="/world/lore">
          <button className="text-sm xl:text-base text-red-e11 capitalize active">
            <p className="text-red-e11">story</p>
          </button>
        </Link>
        <button
          className="text-sm xl:text-base text-white capitalize pointer-events-none"
          title="coming soon!"
        >
          Factions
        </button>
      </StyledStoryNav>
      <StyledLoreBgImgWrapper>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <StyledLoreContent>
              <Premise canPlay={activeSlide === 1} />
            </StyledLoreContent>
          </div>
          <div>
            <StyledLoreContent>
              <Story canPlay={activeSlide === 2} />
            </StyledLoreContent>
          </div>
          <div>
            <StyledLoreContent>
              <Philosophy canPlay={activeSlide === 3} />
            </StyledLoreContent>
          </div>
        </Slider>
        <StyledSliderNavWrapper>
          <StyledSliderNavBtn onClick={goToPrev}>
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="23" rx="4" fill="#252525" />
              <path
                d="M13.3182 16.3153L9.18466 12.1818L13.3182 8.0483L14.196 8.91761L11.5668 11.5469H17.9545V12.8168H11.5668L14.196 15.4418L13.3182 16.3153Z"
                fill="white"
              />
            </svg>
          </StyledSliderNavBtn>
          <StyledSliderNavBtn onClick={goToNext}>
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="23" rx="4" fill="#252525" />
              <path
                d="M14.1364 16.3153L13.2585 15.446L15.8878 12.8168H9.5V11.5469H15.8878L13.2585 8.92188L14.1364 8.0483L18.2699 12.1818L14.1364 16.3153Z"
                fill="white"
              />
            </svg>
          </StyledSliderNavBtn>
        </StyledSliderNavWrapper>
      </StyledLoreBgImgWrapper>
    </main>
  );
};

export default LoreModule;
