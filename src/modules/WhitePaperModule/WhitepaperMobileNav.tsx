import React, { useState } from "react";
import {
  StyledLitePaperListTitle,
  StyledLitePaperSubListText,
  StyledWhitepaperMobileNavWrapper,
  StyledWhitepaperNav,
  StyledWhitepaperNavHeading,
  StyledWhitepaperNavSubHeading,
  StyledWhitepaperNavToggleCTA,
} from "./whitepaper.style";

import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

type Props = {};

const NAV_LIST = [
  {
    id: "world-of-chakra",
    title: "intro",
    subList: [],
  },
  {
    id: "lore",
    title: "LORE",
    subList: [
      {
        id: "the-premise",
        title: "The Premise",
      },
      {
        id: "the-story",
        title: "the story",
      },
    ],
  },
  {
    id: "ecosystem",
    title: "ECOSYSTEM",
    subList: [
      {
        id: "ecosystem",
        title: "Flywheel",
      },
      {
        id: "gaming",
        title: "gaming",
      },
      {
        id: "world-building",
        title: "Expansion",
      },
      {
        id: "web3",
        title: "web3",
      },
      {
        id: "public-goods",
        title: "public goods",
      },
      // {
      //   id: "game-expansion",
      //   title: "game expansion",
      // },
    ],
  },
  {
    id: "economy",
    title: "Economy",
    subList: [
      {
        id: "token-design",
        title: "token Design ",
      },
      {
        id: "revenue-generation",
        title: "Revenue Generation",
      },
      {
        id: "stakeholders",
        title: "Stakeholders",
      },
      {
        id: "ecosystem-birds-view",
        title: "Bird's-eye view",
      },
      {
        id: "incentivization",
        title: "Incentivization",
      },
      // {
      //   id: "distribution-process",
      //   title: "Distribution Process",
      // },
    ],
  },
  {
    id: "pitch",
    title: "INVESTOR PITCH",
    subList: [
      {
        id: "distribution-and-supply",
        title: "Distribution and Supply",
      },
      {
        id: "how-to-moon",
        title: "how to moon",
      },
    ],
  },
  {
    id: "disclaimer",
    title: "DISCLAIMER",
    subList: [],
  },
];

const WhitepaperMobileNav = (props: Props) => {
  const [navOpen, setNavOpen] = useState(false);
  const { width } = useWindowSize();

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      setNavOpen(false);
      element.scrollIntoView({
        behavior: "smooth",
        block: width > 1200 ? "center" : "start",
      });
    }
  };

  const toggleWhitePaperNav = () => {
    setNavOpen((state) => !state);
  };

  return (
    <StyledWhitepaperNav>
      <StyledWhitepaperMobileNavWrapper className="grid grid-cols-2 items-center">
        <StyledWhitepaperNavHeading className="font-marco">
          Whitepaper
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
        }}
        className="list-decimal px-14 pt-14 text-white overflow-auto min-h-full"
      >
        {NAV_LIST.map((nav) => (
          <li key={nav.id} className="mb-4">
            <button onClick={() => handleClickScroll(nav.id)}>
              <StyledLitePaperListTitle className="text-white uppercase mb-1">
                {nav.title}
              </StyledLitePaperListTitle>
            </button>
            {nav.subList.length > 0 && (
              <ul className="ml-4">
                {nav.subList.map((sub) => (
                  <li key={sub.id} className="mb-2">
                    <button onClick={() => handleClickScroll(sub.id)}>
                      <StyledLitePaperSubListText className="capitalize">
                        {sub.title}
                      </StyledLitePaperSubListText>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </motion.ol>
    </StyledWhitepaperNav>
  );
};

export default WhitepaperMobileNav;
