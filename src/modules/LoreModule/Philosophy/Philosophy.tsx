import {
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

type Props = {};

const Philosophy = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-1 m-auto">
        <div id="philosophy-section" className="text-center">
          <StyledLoreContentHeading className="font-marco text-white mb-8">
            Philosophy
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-4 text-white">
            Chakra symbolizes the cyclic aspect of the formation and destruction
            of reality, but after each iteration, it is close to the
            singularity. Unlike the mainstream good vs evil, chakra focuses on
            evolving with the situation and understanding the plurality of
            things. It focuses on the middle path that is always dynamic. The
            greater of good and the lesser of evil.
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Philosophy;
