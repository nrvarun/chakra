import React from "react";
import {
  StyledLitePaperListTitle,
  StyledLitePaperSubListText,
  StyledLitePaperText,
} from "./litepaper.style";

type Props = {};

const NAV_LIST = [
  {
    id: "introduction",
    title: "introduction",
    subList: [],
  },
  {
    id: "world-of-chakra",
    title: "THE WORLD OF CHAKRA",
    subList: [],
  },
  {
    id: "lore",
    title: "LORE",
    subList: [
      {
        id: "the-story",
        title: "the story",
      },
      {
        id: "the-premise",
        title: "The Premise",
      },
    ],
  },
  {
    id: "ecosystem",
    title: "ECOSYSTEM",
    subList: [
      {
        id: "flywheel",
        title: "Fly wheel",
      },
      {
        id: "gaming",
        title: "gaming",
      },
      {
        id: "world-building",
        title: "world-building & storytelling",
      },
      {
        id: "web3",
        title: "web3",
      },
      {
        id: "public-goods",
        title: "public goods",
      },
      {
        id: "game-expansion",
        title: "game expansion",
      },
    ],
  },
  {
    id: "tokenomics",
    title: "TOKENOMICS",
    subList: [
      {
        id: "supply",
        title: "supply",
      },
      {
        id: "utility",
        title: "utility",
      },
      {
        id: "incentivization",
        title: "incentivization",
      },
      {
        id: "ecosystem-birds-view",
        title: "ecosystem [birds eye view]",
      },
      {
        id: "how-to-moon",
        title: "how to moon",
      },
    ],
  },
  {
    id: "faq",
    title: "FAQ",
    subList: [],
  },
  {
    id: "disclaimer",
    title: "DISCLAIMER",
    subList: [],
  },
];

const LitepaperNav = (props: Props) => {
  return (
    <nav className="mx-auto xl:mt-2 hd:m-auto">
      <StyledLitePaperText className="mb-4">
        TABLE OF CONTENT
      </StyledLitePaperText>
      <ol className="list-decimal">
        {NAV_LIST.map((nav) => (
          <li key={nav.id} className="mb-4">
            <a href={"#" + nav.id}>
              <StyledLitePaperListTitle className="text-white uppercase mb-2 hd:mb-4">
                {nav.title}
              </StyledLitePaperListTitle>
            </a>
            {nav.subList.length > 0 && (
              <ul className="ml-4">
                {nav.subList.map((sub) => (
                  <li key={sub.id} className="mb-2">
                    <a href={"#" + sub.id}>
                      <StyledLitePaperSubListText className="capitalize">
                        {sub.title}
                      </StyledLitePaperSubListText>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default LitepaperNav;
