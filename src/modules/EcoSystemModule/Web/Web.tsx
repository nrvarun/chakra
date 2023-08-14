import Accordion from "@components/Accordion";
import {
  StyledEcoSystemContentSection,
  StyledEcoSystemGrid,
  StyledEcoSystemSliderContent,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
} from "../lore.style";
import { StyledGameItemCTA } from "modules/PlayModule/play.style";
import Link from "next/link";

type Props = {};

const Web = (props: Props) => {
  return (
    <StyledEcoSystemContentSection>
      <StyledEcoSystemGrid className="gap-4 overflow-hidden">
        <div id="gaming-section">
          <StyledLoreContentHeading
            className="font-marco text-red flex items-center"
            style={{
              marginBottom: 12,
            }}
          >
            Webonacci
          </StyledLoreContentHeading>

          <StyledLoreContentDesc className="mb-4 text-white text-sm">
            We leverage web3 technologies such as user-owned virtual
            assets/NFTs, DeFi primitives & a Native unit of account ($CHAKRA) to
            provide greater control and value to users whose incentives are
            aligned with those of Chakra Ecosystem. This ecosystem is built for
            Arbitrum.
          </StyledLoreContentDesc>

          <Accordion
            title="NFTs - Two core collections of NFTs"
            open={false}
            classes="mb-4"
          >
            <StyledLoreContentDesc className="mb-4 text-white text-sm">
              A highly quality 3D ARPG with rogue-like elements. This is a
              flagship Chakra ecosystem game whose key objective is to immerse
              players into the world of chakra
            </StyledLoreContentDesc>
          </Accordion>
          <Accordion title="INFRASTRUCTURE" open={true}>
            <p className="mb-3 text-white">Game Modes</p>
            <ul className="text-white list-disc pl-5">
              <li className="mb-1">
                <p className="text-sm">Native Token</p>
              </li>
              <li className="mb-1">
                <p className="text-sm">DEX</p>
              </li>
              <li className="mb-1">
                <p className="text-sm">Marketplace</p>
              </li>
            </ul>
          </Accordion>
        </div>

        <StyledEcoSystemSliderContent>
          <figure>
            <img src="/images/eco-system/gaming/1.png" />
          </figure>
        </StyledEcoSystemSliderContent>
      </StyledEcoSystemGrid>
    </StyledEcoSystemContentSection>
  );
};

export default Web;
