import {
  StyledEcoSystemContentSection,
  StyledEcoSystemGrid,
  StyledEcoSystemSliderContent,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
} from "../lore.style";

type Props = {};

const Comicon = (props: Props) => {
  return (
    <StyledEcoSystemContentSection>
      <StyledEcoSystemGrid className="gap-4 overflow-hidden">
        <div id="gaming-section">
          <div className="flex items-center mb-4">
            <StyledLoreContentHeading
              className="font-marco text-red flex items-center"
              style={{
                margin: 0,
              }}
            >
              Chakranomicon
            </StyledLoreContentHeading>
          </div>

          <ul>
            <li>
              <p className="mt-6 mb-3 text-sm text-white">
                Codified texts and supplementary resources that offers community
                additional information, guidance, and inspiration to enhance
                it’s experience and provide handrails for expansion of the
                ecosystem.
              </p>
            </li>
            <li>
              <p className="text-white text-sm">
                {`Player's Handbook, Monster Manuals, Character guides & Adventure
            modules etc`}
              </p>
            </li>
          </ul>
        </div>

        <StyledEcoSystemSliderContent>
          <figure>
            <img src="/images/eco-system/comicon.png" />
          </figure>
        </StyledEcoSystemSliderContent>
      </StyledEcoSystemGrid>
    </StyledEcoSystemContentSection>
  );
};

export default Comicon;
