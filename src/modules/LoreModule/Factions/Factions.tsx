import React, { useState } from "react";
import {
  StyledFactionContent,
  StyledFactionMobileWrapper,
  StyledFactionNavWrapper,
  StyledFactionsBottomPattern,
  StyledFactionsContent,
  StyledFactionsWrapper,
} from "./factions.style";

import { StyledWorldNavList } from "@components/WorldNav/worldnav.style";
import { useWindowSize } from "react-use";
import FactionView from "./FactionView";
import FactionMobileView from "./FactionMobileView";

type Props = {};

const FACTION_NAV_LIST = [
  {
    id: "devas",
    title: "Devas",
    img: "/images/factions/1.png",
    desc: (
      <>
        <p>
          Devas, celestial beings of light Inhabiting realms beyond mortal sight
          Bright, radiant, and full of power associated with natural forces that
          tower.
        </p>
        <p>
          From the sun, to the moon, and the stars above Devas bring blessings,
          and fill us with love Invoked in rituals, and prayers said with care
          Devas bring guidance, and banish despair.
        </p>
        <p>
          Indra, king of devas, and god of war Agni, god of fire, burning bright
          and more Surya, god of the sun, lighting the way Devas, forever
          present, every single day Benevolent and protective, they watch from
          above Devas, divine beings of infinite love.
        </p>
      </>
    ),
  },
  {
    id: "nagas",
    title: "Nagas",
    img: "/images/factions/2.png",
    desc: (
      <>
        <p>
          The Nagas, serpentine beings of power Guardians of hidden treasures,
          hour by hour Their scales gleam in the sunlight, a sight to behold
          Their magic and wisdom, a story yet untold.
        </p>
        <p>
          In Hindu myths they are protectors of the land In Buddhist tales they
          guard the Buddha{`'`}s hand Their wisdom and strength, a force to be
          reckoned Their presence, a blessing, a gift unbegotten.
        </p>
        <p>
          Nagas of the underworld, masters of the deep Their secrets and
          stories, secrets we{`'`}ll keep For they are the protectors, the
          guardians of life Their magic and wonder, a source of delight. So let
          us honor the Nagas, these serpentine beings of might For their magic
          and power, a sight that{`'`}s a delight.
        </p>
      </>
    ),
  },
  {
    id: "shakti",
    title: "shakti",
    img: "/images/factions/3.png",
    desc: (
      <>
        <p>
          Shakti, the goddess of divine power She who brings life, fertility,
          and creativity She who animates the universe The source of all
          strength and protection.
        </p>
        <p>
          With her fierce warrior spirit, she fights Defending the innocent and
          destroying the wicked Her energy is boundless, her determination
          unwavering She is the embodiment of pure will.
        </p>
        <p>
          In her manifestation as Durga, Kali, and Lakshmi She embodies the
          forces of nature, the cycles of life She is the bringer of abundance
          and prosperity The giver of blessings and blessings to all. Shakti,
          the goddess of divine energy She who fills our hearts with hope and
          courage She who guides us on the path to enlightenment We honor and
          praise you, goddess of Shakti.
        </p>
      </>
    ),
  },
];

const Factions = (props: Props) => {
  const [activeSection, setActiveSection] = useState(FACTION_NAV_LIST[0].id);

  const toggleActiveFaction = () => {};

  const { width } = useWindowSize();

  return (
    <StyledFactionsWrapper>
      {width > 1200 && (
        <StyledFactionNavWrapper>
          <StyledWorldNavList className="mx-auto mt-24">
            <ul>
              {FACTION_NAV_LIST.map((nav, index) => (
                <li key={nav.id}>
                  <a
                    onClick={() => setActiveSection(nav.id)}
                    href="javascript:void(0);"
                    className={`font-inter capitalize inline-block ${
                      activeSection === nav.id ? "active" : ""
                    }`}
                    data-id={nav.id}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </StyledWorldNavList>
        </StyledFactionNavWrapper>
      )}
      <StyledFactionsContent>
        <div className="container mx-auto h-full relative">
          {FACTION_NAV_LIST.map((faction) => (
            <>
              {width > 1200 ? (
                <FactionView activeSection={activeSection} faction={faction} />
              ) : (
                <StyledFactionMobileWrapper>
                  <FactionMobileView faction={faction} />
                </StyledFactionMobileWrapper>
              )}
            </>
          ))}
        </div>
        {width > 1200 && (
          <StyledFactionsBottomPattern
            className=""
            src="/images/factions-pattern.png"
            alt="factions pattern"
          />
        )}
      </StyledFactionsContent>
    </StyledFactionsWrapper>
  );
};

export default Factions;
