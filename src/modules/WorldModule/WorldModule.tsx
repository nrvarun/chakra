import { useEffect, useRef } from "react";
import { StyledWorldPageBgImgWrapper, StyledWorldSection } from "./world.style";
import WorldItem from "./WorldItem";

import Tilt from "react-parallax-tilt";
import { useRouter } from "next/router";

type Props = {};

const WORLD_ITEMS = [
  {
    id: 1,
    title: "Lore",
    desc: "Chakra is an alternate universe; set in a time when the ancient myths and mythologies come alive. The significance of humans is in question as they find out, they are but a footnote in the infinite expanse of creation.",
    img: "/images/world/1.png",
    path: "/world",
    bgPattern: "/icons/lore-bg.svg",
  },
  {
    id: 2,
    title: "Eco System",
    desc: "Chakra seeks to bring millenia old myths to life within a high-fidelity gaming sandbox by leveraging art, tech and web3",
    img: "/images/world/2.png",
    path: "/world",
    bgPattern: "/icons/eco-bg.svg",
  },
  {
    id: 3,
    title: "Vision",
    desc: "Chakra is envisioned as a decentralized worldbuilding platform designed to empower community creators to expand the myth through tangible forms",
    img: "/images/world/3.png",
    path: "/world",
    bgPattern: "/icons/vision-bg.svg",
  },
];

const WorldModule = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    /**
     * Redirect to home on landing
     */
    // router.push("/");
  }, []);

  return (
    <main className="non-landing">
      <StyledWorldPageBgImgWrapper>
        <img src="/images/world/bgimg.png" alt="background of world" />
      </StyledWorldPageBgImgWrapper>
      <StyledWorldSection className="mt-2">
        <div className="grid lg:grid-cols-3">
          {WORLD_ITEMS.map((world) => (
            <WorldItem key={world.id} {...world} />
          ))}
        </div>
      </StyledWorldSection>
    </main>
  );
};

export default WorldModule;
