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
import PlayIcon from "../PlayIcon";
import EcoContentTabs from "../EcoContentTabs";

type Props = {};

const Web = (props: Props) => {
  return (
    <StyledEcoSystemContentSection>
      <div className="grid grid-cols-1">
        <StyledLoreContentHeading
          className="font-marco text-red flex items-center"
          style={{
            margin: 0,
          }}
        >
          Webonacci
        </StyledLoreContentHeading>
        <StyledLoreContentDesc className="mt-4 mb-6 text-white text-sm">
          Web3 sets the stage for a self-sovereign financial system, an open
          contributor/creator economy, and a universal digital representation
          and ownership layer via NFTs. Ecosystem leverages web3 technologies
          such as NFTs & a Native unit of account ($SOMA) to provide greater
          control and value to users whose incentives are aligned with those of
          Chakra Ecosystem.
        </StyledLoreContentDesc>
      </div>
      <EcoContentTabs
        tabs={[
          {
            id: "nfts",
            title: "NFTs",
            content: (
              <StyledEcoSystemGrid className="gap-4 overflow-hidden">
                <article>
                  <ul className="text-white pl-5 list-decimal">
                    <li>
                      <StyledLoreContentDesc className="mb-4 text-white text-sm">
                        <strong>Chakra Chieftains</strong> {`->`} A unique
                        collection of 500 OG PFP characters that play a crucial
                        role in the ownership of the ecosystem. These NFTs
                        facilitate value accrual to their holders by acting as a
                        significant reward multiplier among other benefits.
                      </StyledLoreContentDesc>
                    </li>
                    <li>
                      <StyledLoreContentDesc className="mb-6 text-white text-sm ">
                        <strong>Chakra 10k</strong> {`->`}{" "}
                        <span className="bg-white leading-normal">
                          A larger set of 10k 3D characters that are functional
                          in gaming, aimed at engaging a wider audience within
                          the ecosystem. While these also enable value accrual
                          to holders through multipliers, their impact is
                          slightly lower compared to the Chakra Chieftains.
                        </span>
                      </StyledLoreContentDesc>
                    </li>
                  </ul>
                </article>
                <StyledEcoSystemSliderContent>
                  <figure>
                    <img src="/images/eco-system/web.png" />
                  </figure>
                </StyledEcoSystemSliderContent>
              </StyledEcoSystemGrid>
            ),
          },
          {
            id: "public-goods",
            title: "Public Goods",
            content: (
              <StyledEcoSystemGrid className="gap-4 overflow-hidden">
                <article>
                  <StyledLoreContentDesc className="mb-6 text-white text-sm ">
                    Core non-rivalrous public infrastructure to help create a
                    virtuous cycle of activity, expansion & commerce within the
                    Chakra ecosystem.
                  </StyledLoreContentDesc>
                  <ol className="list-disc pl-4 mb-6 text-white">
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Playable Game Content</span>{" "}
                        <span className="text-red-e11">{`->`}</span> Chakra
                        games accessible for all users to play and engage with
                        the ecosystem
                      </p>
                    </li>
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Marketplace</span>{" "}
                        <span className="text-red-e11">{`->`}</span> NFT and
                        virtual asset market place for P2P trading
                      </p>
                    </li>
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Game Vendor</span>{" "}
                        <span className="text-red-e11">{`->`}</span> Vendor
                        acting as main sink for tokens through which players can
                        access NFT drops and DLC
                      </p>
                    </li>
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Wagering</span>{" "}
                        <span className="text-red-e11">{`->`}</span> Wagering
                        contracts that enable a robust wager 2 earn mechanisms
                        for certain PvP and PvE game modes
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 bg-white">
                        <span className="font-bold">Wagering</span>{" "}
                        <span className="text-red-e11"></span> Wagering
                        contracts that enable a robust wager
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 ">
                        <span className="font-bold bg-white leading-normal">
                          Wagering Wagering contracts that enable a robust wager
                          2 earn mechanisms for certain PvP
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 bg-white">
                        <span className="font-bold">Wagering</span>{" "}
                        <span className="text-red-e11"></span> Wagering
                        contracts that enable a robust wager
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 ">
                        <span className="font-bold bg-white leading-normal">
                          Wagering contracts that enable a robust wager 2 earn
                          mechanisms for certain PvP and PvE game modes
                        </span>
                      </p>
                    </li>
                  </ol>
                </article>
                <StyledEcoSystemSliderContent>
                  <figure>
                    <img src="/images/eco-system/web.png" />
                  </figure>
                </StyledEcoSystemSliderContent>
              </StyledEcoSystemGrid>
            ),
          },
        ]}
      />
    </StyledEcoSystemContentSection>
  );
};

export default Web;
