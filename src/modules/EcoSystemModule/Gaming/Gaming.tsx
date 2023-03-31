import {
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
} from "../lore.style";

type Props = {};

const Gaming = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-[270px_240px_minmax(600px,_1fr)] gap-4">
        <div id="gaming-section">
          <StyledLoreContentHeading className="font-marco text-red">
            Gaming
          </StyledLoreContentHeading>
          <StyledLoreContentDesc className="mb-4 text-red">
            Chakra is a dynamic, ever expanding IP anchored in eastern
            mythologies that mimics natural evolution of human mythos and
            culture. Chakra seeks to speedrun millennia-long mythmaking by
            bringing it to life within a high-fidelity sandbox by leveraging mix
            media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]
          </StyledLoreContentDesc>
        </div>
        <div>
          <StyledLoreContentDesc className="mb-4 text-black">
            Embedded teaser/trailer videos. playbale on page
          </StyledLoreContentDesc>
          <StyledLoreContentDesc className="mb-4 text-black">
            Gaming page opens up two tiles (similar design as world of chakra
            page)1 tile - dungeons of chakra2nd tile- Chakra conundrum
          </StyledLoreContentDesc>
        </div>
        <div>
          <figure>
            <img
              className="w-full h-auto"
              src="/images/eco-system/gaming/1.png"
            />
          </figure>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Gaming;
