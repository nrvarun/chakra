import Image from "next/image";
import {
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
} from "../lore.style";

type Props = {};

const Expansion = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-[270px_minmax(600px,_1fr)] gap-4">
        <div id="expansion-section">
          <StyledLoreContentHeading className="font-marco text-white">
            Expansion
          </StyledLoreContentHeading>
          <StyledLoreContentDesc className="mb-4 text-white">
            Chakra is a dynamic, ever expanding IP anchored in eastern
            mythologies that mimics natural evolution of human mythos and
            culture. Chakra seeks to speedrun millennia-long mythmaking by
            bringing it to life within a high-fidelity sandbox by leveraging mix
            media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]
          </StyledLoreContentDesc>
        </div>
        <div>
          <figure>
            <img src="/images/eco-system/manga/1.png" />
          </figure>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Expansion;
