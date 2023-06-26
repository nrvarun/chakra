import React from "react";
import {
  StyledLoreBgImgWrapper,
  StyledLoreContent,
  StyledSliderNavBtn,
  StyledSliderNavWrapper,
} from "./lore.style";

import Slider from "react-slick";

import Premise from "./Premise";
import Story from "./Story";
import Philosophy from "./Philosophy";
import { useRef, useState } from "react";

type Props = {};

const StoryContent = (props: Props) => {
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
  );
};

export default StoryContent;
