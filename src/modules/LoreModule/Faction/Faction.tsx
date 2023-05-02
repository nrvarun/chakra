/* eslint-disable @next/next/no-img-element */

import { StyledFactionDetailWrapper } from "@components/FactionItem/factionitem.style";
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

type Props = {};

const Faction = (props: Props) => {
  // const [activeFaction, setActiveFaction] = useState(FACTION_NAV_LIST[0].id);

  // const handleActiveFaction = (faction: string) => {
  //   setActiveFaction(faction);
  // };

  // const handleClickScroll = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <StyledLoreContentSection
      style={{
        minHeight: "auto",
      }}
    >
      <div className="grid grid-cols-[360px_minmax(700px,_1fr)] gap-4">
        <StyledLoreContentHeading className="font-marco text-white">
          FACTIONS
        </StyledLoreContentHeading>
        <StyledLoreContentDesc className="mb-4 text-white">
          There are fifteen races defined initially excluding humans. All these
          races have various motives and attributes.Their interaction with
          humans is very unique setting up new storytelling paths. The accepted
          history of humans becomes questionable as beings from various
          dimensions pour into the earth.The legendary creatures holding
          enormous power are now eyeing this domain to conquer. Can the
          evolution of humans combat these ancient entities?
        </StyledLoreContentDesc>
      </div>
    </StyledLoreContentSection>
  );
};

export default Faction;
