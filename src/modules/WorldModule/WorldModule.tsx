import { useEffect } from "react";
import { StyledWorld } from "./world.style";
import WorldItem from "./WorldItem";
import { useRouter } from "next/router";

type Props = {};

const WORLD_ITEMS = [
  {
    id: 1,
    title: "Lore",
    desc: "Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]",
    img: "/images/world/1.png",
    path: "/world/lore",
  },
  {
    id: 2,
    title: "Eco System",
    desc: "Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]",
    img: "/images/world/2.png",
    path: "/world/eco-system",
  },
  {
    id: 3,
    title: "Vision",
    desc: "Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]",
    img: "/images/world/1.png",
    path: "/world/vision",
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
      <StyledWorld>
        <div className="grid lg:grid-cols-3 pt-4 px-6 pb-6 gap-4">
          {WORLD_ITEMS.map((world) => (
            <div className="relative" key={world.id}>
              <WorldItem {...world} />
            </div>
          ))}
        </div>
      </StyledWorld>
    </main>
  );
};

export default WorldModule;
