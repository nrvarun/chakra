import { useEffect, useRef } from "react";
import { StyledWorldPageBgImgWrapper, StyledWorldSection } from "./world.style";
import WorldItem from "./WorldItem";

import { useRouter } from "next/router";
import { useWindowSize } from "react-use";

type Props = {};

const WORLD_ITEMS = [
  {
    id: 1,
    title: "Lore",
    desc: "An alternate universe inspired by current reality; set in a time when the ancient myths and mythologies come alive. The significance of humans is in question as they find out, they are but a footnote in the infinite expanse of creation.",
    img: "/images/world/1.png",
    path: "/world/lore",
    bgPattern: "/icons/lore-bg.svg",
    isActive: true,
  },
  {
    id: 2,
    title: "Ecosystem",
    desc: "The Chakra ecosystem leverages the power of gaming and the wonders of web3 to create a well-defined yet boundless fantasy meta-world inspired by millennia-old Eastern mythologies.",
    img: "/images/world/2.png",
    path: "/world",
    bgPattern: "/icons/eco-bg.svg",
    isActive: false,
  },
  {
    id: 3,
    title: "Vision",
    desc: "Envisioned as a collaborative storytelling platform designed to empower community creators to expand the myth within a high-fidelity gaming sandbox.",
    img: "/images/world/3.png",
    path: "/world",
    bgPattern: "/icons/vision-bg.svg",
    isActive: false,
  },
];

const WorldModule = (props: Props) => {
  const router = useRouter();

  const { width } = useWindowSize();

  useEffect(() => {
    /**
     * Redirect to home on landing
     */
    // router.push("/");
  }, []);

  return (
    <main className="non-landing">
      <StyledWorldPageBgImgWrapper>
        <img
          src={
            width > 1200
              ? "/images/world/bgimg.png"
              : "/images/mobile/world.png"
          }
          alt="background of world"
        />
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
