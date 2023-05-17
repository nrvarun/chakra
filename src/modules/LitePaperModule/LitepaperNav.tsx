import React from "react";
import {
  StyledLitePaperListTitle,
  StyledLitePaperSubListText,
  StyledLitePaperText,
} from "./litepaper.style";

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
      {
        id: "distribution-process",
        title: "Distribution Process",
      },
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

const LitepaperNav = (props: Props) => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mx-auto xl:mt-2 hd:m-auto">
      <StyledLitePaperText className="mb-4">
        TABLE OF CONTENTS
      </StyledLitePaperText>
      <ol className="list-decimal">
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
      </ol>
    </nav>
  );
};

export default LitepaperNav;
