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
    desc: "Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]",
    img: "/images/world/1.png",
    path: "/world",
    bgPattern: "/icons/lore-bg.svg",
  },
  {
    id: 2,
    title: "Eco System",
    desc: "Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]",
    img: "/images/world/2.png",
    path: "/world",
    bgPattern: "/icons/eco-bg.svg",
  },
  {
    id: 3,
    title: "Vision",
    desc: "Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]",
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
