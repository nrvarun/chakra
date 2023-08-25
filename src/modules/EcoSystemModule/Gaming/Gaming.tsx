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

const Gaming = (props: Props) => {
  return (
    <StyledEcoSystemContentSection>
      <div className="grid grid-cols-1">
        <StyledLoreContentHeading
          className="font-marco text-red flex items-center"
          style={{
            margin: 0,
          }}
        >
          Gaming
        </StyledLoreContentHeading>
        <StyledLoreContentDesc className="mt-4 mb-6 text-white text-sm">
          Our games are designed to immerse players in the Chakra universe. As a
          game studio at heart, this is our chosen medium to achieve critical
          mass necessary for capturing platform network effects. Apart from
          driving adoption and commerce gaming as a medium is pivotal to create
          stickiness through joy rather than “numbers go up”. Two game modes
          enabled for each game catering to different gamer archetypes: P2E and
          Wagering.
        </StyledLoreContentDesc>
      </div>
      <EcoContentTabs
        tabs={[
          {
            id: "conundrum",
            title: "Chakra Conundrum",
            content: (
              <StyledEcoSystemGrid className="gap-4 overflow-hidden">
                <article>
                  <StyledLoreContentDesc className="mb-4 text-white text-sm">
                    A Social strategy game inspired by iterative prisoners
                    dilemma Players battle it out for weekly rewards through
                    leaderboards determined by their “Coordination Scores”.
                  </StyledLoreContentDesc>
                  <StyledLoreContentDesc className="mb-6 text-white text-sm">
                    Embrace the fusion of strategy and intuition as you delve
                    into the ancient World of Chakra Outmaneuver your foes,
                    unlock the secrets of energy manipulation, and emerge as the
                    supreme warrior in this captivating duel of mystical might.
                  </StyledLoreContentDesc>
                  <Link
                    href="https://store.epicgames.com/en-US/redeem"
                    target="_blank"
                    className="play-btn"
                  >
                    <StyledGameItemCTA
                      className=""
                      style={{
                        width: "auto",
                        fontSize: 16,
                        padding: "8px 12px",
                      }}
                    >
                      <PlayIcon />
                    </StyledGameItemCTA>
                  </Link>
                </article>
                <StyledEcoSystemSliderContent>
                  <video autoPlay muted playsInline loop>
                    <source src="/videos/eco-gaming.mp4" />
                  </video>
                </StyledEcoSystemSliderContent>
              </StyledEcoSystemGrid>
            ),
          },
          {
            id: "ascension",
            title: "Chakra Ascension",
            content: (
              <StyledEcoSystemGrid className="gap-4 overflow-hidden">
                <article>
                  <StyledLoreContentDesc className="mb-4 text-white text-sm">
                    A 3D ARPG with comprehensive combat & loot mechanics
                    supporting single player and team based gameplay. (PvE)
                  </StyledLoreContentDesc>
                  <StyledLoreContentDesc className="mb-6 text-white text-sm">
                    Delve into digital catacombs and slaughter enemies for a
                    never-ending shower of loot. Team up with friends to
                    increase the challenge (and loot quality).
                  </StyledLoreContentDesc>
                  <Link
                    href="https://maski-illiquid.github.io/ConundrumBeta/"
                    target="_blank"
                    className="play-btn"
                  >
                    <StyledGameItemCTA
                      className=""
                      style={{
                        width: "auto",
                        fontSize: 16,
                        padding: "8px 12px",
                      }}
                    >
                      <PlayIcon />
                    </StyledGameItemCTA>
                  </Link>
                </article>
                <StyledEcoSystemSliderContent>
                  <video autoPlay muted playsInline loop>
                    <source src="/videos/eco-gaming.mp4" />
                  </video>
                </StyledEcoSystemSliderContent>
              </StyledEcoSystemGrid>
            ),
          },
          {
            id: "clash",
            title: "Chakra Clash",
            content: (
              <StyledEcoSystemGrid className="gap-4 overflow-hidden">
                <article>
                  <StyledLoreContentDesc className="mb-4 text-white text-sm">
                    A simultaneous PvP game with tactical duel mechanics and
                    wagering.
                  </StyledLoreContentDesc>
                  <StyledLoreContentDesc className="mb-6 text-white text-sm">
                    Embrace the fusion of strategy and intuition as you delve
                    into the ancient World of Chakra Outmaneuver your foes,
                    unlock the secrets of energy manipulation, and emerge as the
                    supreme warrior in this captivating duel of mystical might.
                    supreme warrior in this captivating duel of mystical might.
                  </StyledLoreContentDesc>
                  <Link
                    href="https://store.epicgames.com/en-US/redeem"
                    target="_blank"
                    className="play-btn"
                  >
                    <StyledGameItemCTA
                      className=""
                      style={{
                        width: "auto",
                        fontSize: 16,
                        padding: "8px 12px",
                      }}
                    >
                      <PlayIcon />
                    </StyledGameItemCTA>
                  </Link>
                </article>
                <StyledEcoSystemSliderContent>
                  <video autoPlay muted playsInline loop>
                    <source src="/videos/eco-gaming.mp4" />
                  </video>
                </StyledEcoSystemSliderContent>
              </StyledEcoSystemGrid>
            ),
          },
        ]}
      />
    </StyledEcoSystemContentSection>
  );
};

export default Gaming;
