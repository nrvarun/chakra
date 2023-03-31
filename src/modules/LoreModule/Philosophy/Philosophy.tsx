import {
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
} from "../lore.style";

type Props = {};

const Philosophy = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-3">
        <div id="philosophy-section">
          <StyledLoreContentHeading className="font-marco text-red">
            Philosophy
          </StyledLoreContentHeading>
          <StyledLoreContentDesc className="mb-4 text-red">
            Chakra is a whole alternate universe based on our reality; set in a
            time when the ancient myths and mythologies rooted in the eternal
            order come alive. The significance of humans is in question as they
            find out, they are but a footnote in the infinite expanse of
            creation.
          </StyledLoreContentDesc>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Philosophy;
