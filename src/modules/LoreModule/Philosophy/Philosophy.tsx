import {
  StyledLoreBgImgWrapper,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

type Props = {};

const Philosophy = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <StyledLoreBgImgWrapper>
        <video loop playsInline autoPlay={true} muted>
          <source src="/videos/lore/3.mp4" />
        </video>
      </StyledLoreBgImgWrapper>
      <div className="px-10 xl:px-0 mb-20 mt-auto mx-auto relative z-10">
        <div className="text-left">
          <StyledLoreContentHeading className="font-marco text-white mb-4">
            Philosophy
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-4 text-white zarathustra-font">
            Chakra symbolizes the cyclic aspect of the formation and destruction
            of reality, but after each iteration, it moves closer to
            singularity. Unlike mainstream good vs evil, Chakra focuses on
            understanding the plurality of things. The greater of good and the
            lesser of evil.
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Philosophy;
