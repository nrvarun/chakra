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
            Chakra is a whole alternate universe based on our reality; set in a
            time when the ancient myths and mythologies rooted in the eternal
            order come alive.
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Philosophy;
