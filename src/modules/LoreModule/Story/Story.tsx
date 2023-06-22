import {
  StyledLoreBgImgWrapper,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

type Props = {};

const Story = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <StyledLoreBgImgWrapper>
        <video loop playsInline autoPlay={true} muted>
          <source src="/videos/lore/1.mp4" />
        </video>
      </StyledLoreBgImgWrapper>
      <div className="px-10 xl:px-0 mt-auto mx-auto mb-20 relative z-10">
        <div className="text-left">
          <StyledLoreContentHeading className="font-marco text-white mb-4">
            Story
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-4 text-white zarathustra-font">
            The accepted history of humans becomes questionable as beings from
            various dimensions pour into the earth. The legendary creatures
            holding enormous power are now eyeing this domain to conquer. Can
            the evolution of humans combat these ancient entities?
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Story;
