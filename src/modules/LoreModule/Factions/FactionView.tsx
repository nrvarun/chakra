import React from "react";
import { StyledFactionContent } from "./factions.style";

type Props = {
  activeSection: string;
  faction: any;
};

const FactionView = ({ activeSection, faction }: Props) => {
  return (
    <div
      className={`grid grid-cols-[20%_60%_20%] relative z-10 h-full ${
        activeSection === faction.id ? "active" : "in-active"
      }`}
    >
      <div></div>
      <div className="flex">
        <img
          className="m-auto w-auto h-full"
          src={faction.img}
          alt={faction.title}
        />
      </div>
      <div className="flex">
        <StyledFactionContent className="m-auto relative z-10">
          <header>
            <h4>{faction.title}</h4>
          </header>
          <div>{faction.desc}</div>
        </StyledFactionContent>
      </div>
    </div>
  );
};

export default FactionView;
