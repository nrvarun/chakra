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
              Chakra Chieftains {`->`} A unique collection of 500 OG PFP
              characters that play a crucial role in the ownership of the
              ecosystem. These NFTs facilitate value accrual to their holders by
              acting as a significant reward multiplier among other benefits.
            </StyledLoreContentDesc>
            <StyledLoreContentDesc className="mb-4 text-white text-sm">
              Chakra 10k {`->`}{" "}
              <span className="bg-white">
                A larger set of 10k 3D characters that are functional in gaming,
                aimed at engaging a wider audience within the ecosystem. While
                these also enable value accrual to holders through multipliers,
                their impact is slightly lower compared to the Chakra
                Chieftains.
              </span>
            </StyledLoreContentDesc>
          </Accordion>
          <Accordion title="INFRASTRUCTURE" open={true}>
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
            <img src="/images/eco-system/web.png" />
          </figure>
        </StyledEcoSystemSliderContent>
      </StyledEcoSystemGrid>
    </StyledEcoSystemContentSection>
  );
};

export default Web;
