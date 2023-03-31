import {
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
} from "../lore.style";

type Props = {};

const Web = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-[320px_minmax(600px,_1fr)] gap-4">
        <div id="web-section">
          <StyledLoreContentHeading className="font-marco text-red">
            Web
          </StyledLoreContentHeading>
          <StyledLoreContentDesc className="mb-4 mr-14 text-red">
            Chakra is a dynamic, ever expanding IP anchored in eastern
            mythologies that mimics natural evolution of human mythos and
            culture. Chakra seeks to speedrun millennia-long mythmaking by
            bringing it to life within a high-fidelity sandbox by leveraging mix
            media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]
          </StyledLoreContentDesc>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Web;
