import { StyledWorld } from "./world.style";
import WorldItem from "./WorldItem";

type Props = {};

const WorldModule = (props: Props) => {
  return (
    <main>
      <StyledWorld className="pt-14">
        <div className="grid grid-cols-3 pt-4 px-6 pb-6 gap-4">
          <div className="relative">
            <WorldItem
              title="Lore"
              desc="Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]"
              path="/images/world/lore"
              img="/images/world/1.png"
            />
          </div>
          <div className="relative">
            <WorldItem
              title="Lore"
              desc="Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]"
              path="/world/eco-system"
              img="/images/world/2.png"
            />
          </div>
          <div className="relative">
            <WorldItem
              title="Lore"
              desc="Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]"
              path="/world/vision"
              img="/images/world/3.png"
            />
          </div>
        </div>
      </StyledWorld>
    </main>
  );
};

export default WorldModule;
