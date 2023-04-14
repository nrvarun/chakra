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

type Props = {};

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

      <section ref={scrollableDivRef}>
        <StyledLoreBgImgWrapper
          style={{
            opacity: factionInView ? 0 : 1,
          }}
        >
          <motion.img
            style={{
              y,
            }}
            src="/images/world-bgimg.png"
            alt="world background"
          />
        </StyledLoreBgImgWrapper>
        <StyledLoreContent className="relative z-10" ref={premiseRef}>
          <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
            <div className="relative"></div>
            <Premise />
          </div>
        </StyledLoreContent>

        <StyledLoreContent className="relative z-10" ref={storyRef}>
          <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
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
    </main>
  );
};

export default LoreModule;
