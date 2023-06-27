import React, { useState } from "react";
import {
  StyledLitePaperListTitle,
  StyledLitePaperSubListText,
  StyledWhitepaperMobileNavWrapper,
  StyledWhitepaperNav,
  StyledWhitepaperNavHeading,
  StyledWhitepaperNavSubHeading,
  StyledWhitepaperNavToggleCTA,
} from "../../WhitePaperModule/whitepaper.style";

import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

type Props = {};

const NAV_LIST = [
  {
    id: "deva",
    title: "deva",
  },
  {
    id: "naga",
    title: "naga",
  },
  {
    id: "shakti",
    title: "shakti",
  },
  {
    id: "apsara",
    title: "apsara",
  },
  {
    id: "kimpurasha",
    title: "kimpurasha",
  },
  {
    id: "daitya",
    title: "daitya",
  },
  {
    id: "asura",
    title: "asura",
  },
  {
    id: "vanara",
    title: "vanara",
  },
  {
    id: "kimpurasha-tiger",
    title: "kimpurasha [Tiger]",
  },
  {
    id: "garuda",
    title: "garuda",
  },
  {
    id: "rakshasa",
    title: "rakshasa",
  },
  {
    id: "danava",
    title: "danava",
  },
  {
    id: "yaksha",
    title: "yaksha",
  },
  {
    id: "ugradeva",
    title: "ugradeva",
  },
  {
    id: "kimpurasha-parrot",
    title: "kimpurasha [Parrot]",
  },
];

const FactionMobileNav = (props: Props) => {
  const [navOpen, setNavOpen] = useState(false);
  const { width } = useWindowSize();

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    console.log(id, element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      setNavOpen(false);

      if (width < 1200) {
        console.log("lets scroll");
        element.scrollIntoView({
          behavior: "smooth",
          block: width > 1200 ? "center" : "start",
        });
      }
    }
  };

  const toggleWhitePaperNav = () => {
    setNavOpen((state) => !state);
  };

  return (
    <StyledWhitepaperNav>
      <StyledWhitepaperMobileNavWrapper className="grid grid-cols-2 items-center">
        <StyledWhitepaperNavHeading className="font-marco text-white">
          Factions
        </StyledWhitepaperNavHeading>
        <StyledWhitepaperNavToggleCTA
          onClick={toggleWhitePaperNav}
          className={`flex items-center ${navOpen ? "open" : "close"}`}
        >
          <StyledWhitepaperNavSubHeading className="uppercase text-white">
            table of contents
          </StyledWhitepaperNavSubHeading>
          <motion.svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8L8 0L0 8L16 8Z" fill="#E11D48" />
          </motion.svg>
        </StyledWhitepaperNavToggleCTA>
      </StyledWhitepaperMobileNavWrapper>
      <motion.ol
        layout
        style={{
          height: navOpen ? "calc(100vh - 120px)" : "0",
          display: navOpen ? "block" : "none",
        }}
        className="list-decimal px-14 pb-14 text-white overflow-auto min-h-full"
      >
        {NAV_LIST.map((nav, index) => (
          <li key={nav.id} className={`mb-4 ${index === 0 ? "pt-8" : "pt-0"}`}>
            <button onClick={() => handleClickScroll(nav.id)}>
              <StyledLitePaperListTitle className="text-white uppercase mb-1">
                {nav.title}
              </StyledLitePaperListTitle>
            </button>
          </li>
        ))}
      </motion.ol>
    </StyledWhitepaperNav>
  );
};

export default FactionMobileNav;
