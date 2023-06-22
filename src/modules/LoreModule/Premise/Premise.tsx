import {
  StyledLoreBgImgWrapper,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

type Props = {};

const Premise = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <StyledLoreBgImgWrapper>
        <video loop playsInline autoPlay={true} muted>
          <source src="/videos/lore/2.mp4" />
        </video>
      </StyledLoreBgImgWrapper>
      <div className="px-10 xl:px-0 mt-auto mx-auto mb-20 relative z-10">
        <div className="text-left">
          <StyledLoreContentHeading className="font-marco text-white mb-4">
            Premise
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-4 text-white zarathustra-font">
            Chakra is an alternate universe based on our current reality; set in
            a time when the ancient myths and mythologies rooted in the eternal
            order come alive. The significance of humans is in question as they
            find out, they are but a footnote in the infinite expanse of
            creation.
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Premise;
