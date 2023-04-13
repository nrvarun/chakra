/* eslint-disable @next/next/no-img-element */
import { useInView } from "framer-motion";

import WorldNav from "@components/WorldNav";
import { StyledLoreContent } from "./lore.style";

import { useEffect, useRef, useState } from "react";

import Manga from "./Manga";
import Comicon from "./Comicon";
import Gaming from "./Gaming";
import Web from "./Web";
import { useRouter } from "next/router";

type Props = {};

const NAV_ITEMS = [
  {
    id: "gaming",
    title: "Gaming",
  },
  {
    id: "manga",
    title: "manga",
  },
  {
    id: "comicon",
    title: "Chakra Comicon",
  },
  {
    id: "web",
    title: "web",
  },
];

const EcoSystemModule = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    /**
     * Redirect to home on landing
     */
    router.push("/");
  }, []);

  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);

  const gamingRef = useRef(null);
  const gamingInView = useInView(gamingRef);

  const mangaRef = useRef(null);
  const mangaInView = useInView(mangaRef);

  const comiconRef = useRef(null);
  const comiconInView = useInView(comiconRef);

  const webRef = useRef(null);
  const webInView = useInView(webRef);

  useEffect(() => {
    if (gamingInView) {
      setActiveSection("gaming");
    }
  }, [gamingInView]);

  useEffect(() => {
    if (mangaInView) {
      setActiveSection("manga");
    }
  }, [mangaInView]);

  useEffect(() => {
    if (comiconInView) {
      setActiveSection("comicon");
    }
  }, [comiconInView]);

  useEffect(() => {
    if (webInView) {
      setActiveSection("web");
    }
  }, [webInView]);

  return (
    <main className="non-landing eco-system">
      <WorldNav
        title="Ecosystem"
        list={NAV_ITEMS}
        activeSection={activeSection}
        customClass="eco-system"
      />

      <StyledLoreContent className="relative z-10" ref={gamingRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Gaming />
        </div>
      </StyledLoreContent>

      <StyledLoreContent className="relative z-10" ref={mangaRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Manga />
        </div>
      </StyledLoreContent>

      <StyledLoreContent className="relative z-10" ref={comiconRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Comicon />
        </div>
      </StyledLoreContent>

      <StyledLoreContent className="relative z-10" ref={webRef}>
        <div className="grid grid-cols-[240px_minmax(900px,_1fr)]">
          <div className="relative"></div>
          <Web />
        </div>
      </StyledLoreContent>
    </main>
  );
};

export default EcoSystemModule;
