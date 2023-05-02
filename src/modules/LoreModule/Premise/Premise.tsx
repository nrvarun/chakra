import {
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

type Props = {};

const Premise = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-1 m-auto">
        <div id="premise-section" className="text-center">
          <StyledLoreContentHeading className="font-marco text-white mb-32">
            Premise
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-4 text-white ">
            Chakra is a whole alternate universe based on our reality; set in a
            time when the ancient myths and mythologies rooted in the eternal
            order come alive. The significance of humans is in question as they
            find out, they are but a footnote in the infinite expanse of
            creation.
          </StyledLoreContentSubHeading>
          <StyledLoreContentDesc className="mb-4 text-gray-c8c">
            The accepted history of humans becomes questionable as beings from
            various dimensions pour into the earth.The legendary creatures
            holding enormous power are now eyeing this domain to conquer. Can
            the evolution of humans combat these ancient entities?
          </StyledLoreContentDesc>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Premise;
