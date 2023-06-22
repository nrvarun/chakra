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
            And one fine day, she came out tearing the womb of King Sagara, the
            god of oceans. Her birth was acknowledged by the elements, the
            volcanoes puffed, the oceans swelled and the air ravaged the surface
            of the planet. Ancient legends call it her by the name Kumari.
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Story;
