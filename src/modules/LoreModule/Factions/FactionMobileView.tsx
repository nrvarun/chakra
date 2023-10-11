import React from "react";
import { StyledFactionMobileCard } from "./factions.style";

type Props = {
  faction: any;
};

const FactionMobileView = ({ faction }: Props) => {
  return (
    <StyledFactionMobileCard>
      <figure>
        <img src={`/images/factions/${faction.id}.gif`} alt={faction.title} />
      </figure>

      <div className="p-3">
        <h4>{faction.title}</h4>
        <div>{faction.desc}</div>
      </div>
    </StyledFactionMobileCard>
  );
};

export default FactionMobileView;
