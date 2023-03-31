/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  StyledFactionImgList,
  StyledFactionNav,
  StyledFactionNavList,
  StyledLoreContentDesc,
  StyledLoreContentDescTitle,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentStickyNav,
  StyledLoreContentSubHeading,
} from "../lore.style";
import { useState } from "react";
import Rakshasa from "../Rakshasa";
import Bheekara from "../Bheekara";

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

const Faction = (props: Props) => {
  const [activeFaction, setActiveFaction] = useState(FACTION_NAV_LIST[0].id);

  const handleActiveFaction = (faction: string) => {
    setActiveFaction(faction);
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-[260px_260px_minmax(610px,_1fr)] gap-4">
        <div>
          <StyledLoreContentStickyNav>
            <StyledLoreContentHeading className="font-marco text-red">
              Faction
            </StyledLoreContentHeading>
            <StyledLoreContentDesc className="mb-4 text-red">
              There are fifteen races defined initially excluding humans. All
              these races have various motives and attributes.Their interaction
              with humans is very unique setting up new storytelling paths.
            </StyledLoreContentDesc>
            <StyledFactionNav>
              <StyledFactionNavList>
                {FACTION_NAV_LIST.map((faction) => (
                  <li key={faction.id} className={`mb-3 `}>
                    <a
                      href="javascript:void(0);"
                      className={`${
                        activeFaction === faction.id ? "active" : "in-active"
                      }`}
                      onClick={() => handleClickScroll(faction.id)}
                      data-section-id={faction.id}
                    >
                      {faction.title}
                    </a>
                  </li>
                ))}
              </StyledFactionNavList>
            </StyledFactionNav>
          </StyledLoreContentStickyNav>
        </div>
        <div>
          <Rakshasa id="rakshasa" setFaction={handleActiveFaction} />
          <Bheekara id="bheekara" setFaction={handleActiveFaction} />
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Faction;
