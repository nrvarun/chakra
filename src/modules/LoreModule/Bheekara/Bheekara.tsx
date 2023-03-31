import React, { useEffect, useRef } from "react";
import {
  StyledFactionImgList,
  StyledLoreContentDesc,
  StyledLoreContentDescTitle,
  StyledLoreContentSubHeading,
} from "../lore.style";
import { useInView } from "framer-motion";

type Props = {
  id: string;
  setFaction: (f: string) => void;
};

const Bheekara = ({ id, setFaction }: Props) => {
  const factionRef = useRef(null);
  const factionInView = useInView(factionRef);

  useEffect(() => {
    if (factionInView) {
      setFaction(id);
    }
  }, [factionInView]);

  return (
    <div
      className="grid grid-cols-[260px_minmax(610px,_1fr)] gap-4"
      ref={factionRef}
      id={id}
    >
      <article>
        <section>
          <StyledLoreContentSubHeading className="font-marco text-white mb-3">
            Bheekaras
          </StyledLoreContentSubHeading>
          <StyledLoreContentDesc className="font-inter text-white-aeb mb-7">
            The demon of the night Creature of darkness, filled with might With
            fangs and claws and glowing eyes You haunt the shadows, a fearsome
            guise Your power is great, your rage intense You bring fear to those
            who dare to make sense Of the darkness that surrounds you and your
            kind You are a force that leaves all else behind. But even demons
            can be overcome By the strength of those who stand as one With
            courage in their hearts and faith in their soul They stand against
            you, and make you whole. So beware, Bheekaras, demon of the night
            For even the strongest may meet their plight Against those who stand
            for what is right And banish you back to the endless night.
          </StyledLoreContentDesc>

          <StyledLoreContentDescTitle className="mb-2">
            The Bheekaras
          </StyledLoreContentDescTitle>
          <StyledLoreContentDesc className="font-inter text-white-aeb mb-4">
            The Bheekaras are a fearsome and malevolent race of muscular fiends,
            known for their love of destruction and their ability to sow chaos
            and discord. They are often feared and reviled by other races, but
            they are also respected for their power and their ability to survive
            and thrive in even the most hostile environments.
          </StyledLoreContentDesc>
          <StyledLoreContentDescTitle className="mb-2">
            Physical Description
          </StyledLoreContentDescTitle>
          <StyledLoreContentDesc className="font-inter text-white-aeb mb-4">
            Bheekaras are tall, brutish, and muscular, with dreads/thick hair
            and sharp claws. They have heads with distorted human faces, horns,
            glowing yellow eyes, and prominent fangs. They are known for their
            ability to change their size at will, often taking on humanoid forms
            to blend in with other races.
          </StyledLoreContentDesc>
          <StyledLoreContentDescTitle className="mb-2">
            Culture
          </StyledLoreContentDescTitle>
          <StyledLoreContentDesc className="font-inter text-white-aeb mb-4">
            Bheekaras are deeply selfish and prideful creatures, often roaming
            the wild and eating anything to their fill. They are skilled in
            hunting and illusion magic, using their abilities to massacre and
            control those around them. They are also fiercely territorial and
            will defend their lands and resources with deadly force.
          </StyledLoreContentDesc>
          <StyledLoreContentDescTitle className="mb-2">
            Abilities
          </StyledLoreContentDescTitle>
          <StyledLoreContentDesc className="font-inter text-white-aeb mb-4">
            Bheekaras are highly intelligent and magic users, with a natural
            talent for surviving odds and are robust. They are also incredibly
            agile and dexterous, making them excellent hunters and fighters. In
            addition, they have the ability to cast spells and can often call
            upon powerful magical abilities to aid them in their endeavors.
          </StyledLoreContentDesc>
          <StyledLoreContentDescTitle className="mb-2">
            Alignment
          </StyledLoreContentDescTitle>
          <StyledLoreContentDesc className="font-inter text-white-aeb mb-4">
            Bheekaras are almost universally evil, reveling in chaos and
            destruction. However, they are also deeply cunning and intelligent,
            and will often form alliances or work toward long-term goals if it
            serves their interests.
          </StyledLoreContentDesc>
        </section>
      </article>
      <div className="relative">
        <StyledFactionImgList>
          <li className="mb-4">
            <img src="/images/factions/rakshasas/1.png" alt="rakshasas 1" />
          </li>
          <li className="mb-4">
            <img src="/images/factions/rakshasas/2.png" alt="rakshasas 2" />
          </li>
        </StyledFactionImgList>
      </div>
    </div>
  );
};

export default Bheekara;
