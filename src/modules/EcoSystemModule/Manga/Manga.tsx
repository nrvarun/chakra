import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import {
  StyledEcoSystemContentSection,
  StyledEcoSystemGrid,
  StyledEcoSystemSliderContent,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledMangaDetailsTextList,
} from "../lore.style";
import { useState } from "react";

type Props = {};

const MANGA_DETAILS = [
  {
    id: 0,
    text: "Chakra mythos is codified through a series of guidebooks, manga, cinematics and digital assets. This body of work serves as the scaffolding for community to expand upon.",
  },
  {
    id: 1,
    text: "The manga and animated series are designed to to deepen the game's lore and worldbuilding, adding complexity and depth to the game's universe.",
  },
  {
    id: 2,
    text: "With these mediums, community can dive deeper into the world of our game and get to know the characters on a whole new level.",
  },
  {
    id: 3,
    text: "These weekly releases are embedded with mini-arcs, clues and alpha that inform further development.",
  },
  {
    id: 4,
    text: "These weekly releases are embedded with mini-arcs, clues and alpha that inform further development.",
  },
];

const Manga = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      console.log(current, next);
      setActiveSlide(next);
    },
  };

  return (
    <StyledEcoSystemContentSection>
      <StyledEcoSystemGrid className="gap-4 overflow-hidden">
        <div id="gaming-section">
          <div className="flex items-center mb-4">
            <StyledLoreContentHeading
              className="font-marco text-red flex items-center"
              style={{
                margin: 0,
              }}
            >
              Manga & Animated Series
            </StyledLoreContentHeading>
          </div>

          <StyledMangaDetailsTextList>
            {MANGA_DETAILS.map((detail) => (
              <li
                className={`mb-6 ${
                  detail.id === activeSlide ? "active" : "in-active"
                }`}
                key={detail.id}
              >
                <p className="mt-6 text-sm text-white">{detail.text}</p>
              </li>
            ))}
          </StyledMangaDetailsTextList>
        </div>

        <StyledEcoSystemSliderContent>
          <Slider {...settings}>
            <div>
              <figure>
                <img src="/images/eco-system/manga/1.jpg" />
              </figure>
            </div>
            <div>
              <figure>
                <img src="/images/eco-system/manga/2.jpg" />
              </figure>
            </div>
            <div>
              <figure>
                <img src="/images/eco-system/manga/3.jpg" />
              </figure>
            </div>
            <div>
              <figure>
                <img src="/images/eco-system/manga/4.jpg" />
              </figure>
            </div>
            <div>
              <figure>
                <img src="/images/eco-system/manga/5.jpg" />
              </figure>
            </div>
          </Slider>
        </StyledEcoSystemSliderContent>
      </StyledEcoSystemGrid>
    </StyledEcoSystemContentSection>
  );
};

export default Manga;
