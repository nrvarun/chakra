/* eslint-disable @next/next/no-img-element */
import { useInView } from "framer-motion";

import WorldNav from "@components/WorldNav";
import { StyledLoreContent } from "./lore.style";

import { useEffect, useRef, useState } from "react";

import Expansion from "./Expansion";
import Decentralization from "./Decentralization";
import Thesis from "./Thesis";
import PublicGoods from "./PublicGoods";
import { useRouter } from "next/router";

type Props = {};

const NAV_ITEMS = [
  {
    id: "thesis",
    title: "Thesis",
  },
  {
    id: "expansion",
    title: "expansion",
  },
  {
    id: "decentralization",
    title: "decentralization",
  },
  {
    id: "public-goods",
    title: "public goods",
  },
];

const VisionModule = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    /**
     * Redirect to home on landing
     */
    router.push("/");
  }, []);

  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);

  const thesisRef = useRef(null);
  const thesisInView = useInView(thesisRef);

  const expansionRef = useRef(null);
  const expansionInView = useInView(expansionRef);

  const decentralizationRef = useRef(null);
  const decentralizationInView = useInView(decentralizationRef);

  const publicGoodsRef = useRef(null);
  const publicGoodsInView = useInView(publicGoodsRef);

  useEffect(() => {
    if (thesisInView) {
      setActiveSection("thesis");
    }
  }, [thesisInView]);

  useEffect(() => {
    if (expansionInView) {
      setActiveSection("expansion");
    }
  }, [expansionInView]);

  useEffect(() => {
    if (decentralizationInView) {
      setActiveSection("decentralization");
    }
  }, [decentralizationInView]);

  useEffect(() => {
    if (publicGoodsInView) {
      setActiveSection("public-goods");
    }
  }, [publicGoodsInView]);

  return (
    <main className="non-landing vision">
      <WorldNav
        title="Vision"
        list={NAV_ITEMS}
        activeSection={activeSection}
        customClass="vision"
      />

      <StyledLoreContent className="relative z-10" ref={thesisRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Thesis />
        </div>
      </StyledLoreContent>

      <StyledLoreContent className="relative z-10" ref={expansionRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Expansion />
        </div>
      </StyledLoreContent>

      <StyledLoreContent className="relative z-10" ref={decentralizationRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Decentralization />
        </div>
      </StyledLoreContent>

      <StyledLoreContent className="relative z-10" ref={publicGoodsRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <PublicGoods />
        </div>
      </StyledLoreContent>
    </main>
  );
};

export default VisionModule;
