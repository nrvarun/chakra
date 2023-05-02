/* eslint-disable @next/next/no-img-element */
import { motion, useScroll, useInView, cubicBezier } from "framer-motion";

import WorldNav from "@components/WorldNav";
import {
  StyledLoreBgImgWrapper,
  StyledLoreContent,
  StyledLoreFactionSection,
} from "./lore.style";
import Philosophy from "./Philosophy";
import Premise from "./Premise";
import Story from "./Story";
import { useEffect, useRef, useState } from "react";
import Faction from "./Faction";
import { useTransform } from "framer-motion";
import { useRouter } from "next/router";
import FactionItem from "@components/FactionItem";

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

const NAV_ITEMS = [
  {
    id: "premise",
    title: "premise",
  },
  {
    id: "story",
    title: "story",
  },
  {
    id: "philosophy",
    title: "philosophy",
  },
  {
    id: "faction",
    title: "factions",
    hasDropdown: true,
    subList: FACTION_NAV_LIST,
  },
];

const LoreModule = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    /**
     * Redirect to home on landing
     */
    // router.push("/");
  }, []);

  const scrollableDivRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollableDivRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);

  const premiseRef = useRef(null);
  const premiseInView = useInView(premiseRef);

  const storyRef = useRef(null);
  const storyInView = useInView(storyRef);

  const philosophyRef = useRef(null);
  const philosophyInView = useInView(philosophyRef);

  const factionRef = useRef(null);
  const factionInView = useInView(factionRef);

  useEffect(() => {
    if (premiseInView) {
      setActiveSection("premise");
    }
  }, [premiseInView]);

  useEffect(() => {
    if (storyInView) {
      setActiveSection("story");
    }
  }, [storyInView]);

  useEffect(() => {
    if (philosophyInView) {
      setActiveSection("philosophy");
    }
  }, [philosophyInView]);

  useEffect(() => {
    if (factionInView) {
      setActiveSection("faction");
    }
  }, [factionInView]);

  return (
    <main className="non-landing lore">
      <WorldNav title="lore" list={NAV_ITEMS} activeSection={activeSection} />
      <StyledLoreBgImgWrapper>
        <motion.img src="/images/world-bgimg.png" alt="world background" />
      </StyledLoreBgImgWrapper>
      <section ref={scrollableDivRef}>
        <StyledLoreContent className="relative z-10" ref={premiseRef}>
          <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
            <div className="relative"></div>
            <Premise />
          </div>
        </StyledLoreContent>

        <StyledLoreContent className="relative z-10" ref={storyRef}>
          <div className="grid grid-cols-[260px_minmax(860px,_1fr)]">
            <div className="relative"></div>
            <Story />
          </div>
        </StyledLoreContent>

        <StyledLoreContent className="relative z-10" ref={philosophyRef}>
          <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
            <div className="relative"></div>
            <Philosophy />
          </div>
        </StyledLoreContent>
      </section>

      <section className="pt-64"></section>
      <StyledLoreFactionSection
        className="relative z-10"
        ref={factionRef}
        id="faction-section"
      >
        <div className="grid grid-cols-[270px_240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Faction />
        </div>
      </StyledLoreFactionSection>
      <StyledLoreFactionSection
        className="relative z-10 mb-24"
        ref={factionRef}
        id="faction-section"
      >
        <div className="grid grid-cols-[270px_240px_minmax(900px,_1fr)] mb-16">
          <div className="relative"></div>
          <FactionItem
            title="Rakshasha"
            desc="The demon of the night Creature of darkness, filled with might With fangs and claws and glowing eyes You haunt the shadows, a fearsome guise. Your power is great."
            img="/images/factions/1.png"
          />
        </div>
        <div className="grid grid-cols-[270px_240px_minmax(900px,_1fr)] mb-16">
          <div className="relative"></div>
          <FactionItem
            title="Rakshasha"
            desc="The demon of the night Creature of darkness, filled with might With fangs and claws and glowing eyes You haunt the shadows, a fearsome guise. Your power is great."
            img="/images/factions/2.png"
          />
        </div>
        <div className="grid grid-cols-[270px_240px_minmax(900px,_1fr)] mb-16">
          <div className="relative"></div>
          <FactionItem
            title="Rakshasha"
            desc="The demon of the night Creature of darkness, filled with might With fangs and claws and glowing eyes You haunt the shadows, a fearsome guise. Your power is great."
            img="/images/factions/3.png"
          />
        </div>
      </StyledLoreFactionSection>
    </main>
  );
};

export default LoreModule;
