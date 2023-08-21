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

const Gaming = (props: Props) => {
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
              Gaming
            </StyledLoreContentHeading>
            <span className="ml-3">
              <Link href="/play" className="play-btn">
                <StyledGameItemCTA
                  className=""
                  style={{
                    width: "auto",
                    fontSize: 16,
                    padding: "4px 8px",
                  }}
                >
                  <svg
                    width="59"
                    height="13"
                    viewBox="0 0 59 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.950284 12.5V0.863636H5.09801C6.00331 0.863636 6.75331 1.02841 7.34801 1.35795C7.94271 1.6875 8.38778 2.13826 8.68324 2.71023C8.97869 3.27841 9.12642 3.91856 9.12642 4.63068C9.12642 5.34659 8.9768 5.99053 8.67756 6.5625C8.3821 7.13068 7.93513 7.58144 7.33665 7.91477C6.74195 8.24432 5.99384 8.40909 5.09233 8.40909H2.24006V6.92045H4.93324C5.50521 6.92045 5.96922 6.82197 6.32528 6.625C6.68134 6.42424 6.94271 6.15152 7.10938 5.80682C7.27604 5.46212 7.35938 5.07008 7.35938 4.63068C7.35938 4.19129 7.27604 3.80114 7.10938 3.46023C6.94271 3.11932 6.67945 2.85227 6.3196 2.65909C5.96354 2.46591 5.49384 2.36932 4.91051 2.36932H2.70597V12.5H0.950284ZM11.1847 12.5V0.863636H12.9403V10.9886H18.2131V12.5H11.1847ZM21.7926 12.5H19.929L24.1165 0.863636H26.1449L30.3324 12.5H28.4688L25.179 2.97727H25.0881L21.7926 12.5ZM22.1051 7.94318H28.1506V9.42045H22.1051V7.94318ZM29.9276 0.863636H31.9219L34.9616 6.15341H35.0866L38.1264 0.863636H40.1207L35.8991 7.93182V12.5H34.1491V7.93182L29.9276 0.863636ZM53.1264 11.983L52.1037 10.9716L55.6548 7.42045H46.7344V5.94318H55.6548L52.1037 2.39773L53.1264 1.38068L58.4276 6.68182L53.1264 11.983Z"
                      fill="white"
                    />
                  </svg>
                </StyledGameItemCTA>
              </Link>
            </span>
          </div>
          <Accordion title="CHAKRA CONUNDRUM" open={true}>
            <StyledLoreContentDesc className="mb-4 text-white text-sm">
              A highly quality 3D ARPG with rogue-like elements. This is a
              flagship Chakra ecosystem game whose key objective is to immerse
              players into the world of chakra
            </StyledLoreContentDesc>
          </Accordion>
          <Accordion title="CHAKRA DUELS" open={false}>
            <StyledLoreContentDesc className="mb-4 text-white text-sm">
              A PvP fighting game with comprehensive duel mechanics and wagering
            </StyledLoreContentDesc>
          </Accordion>
          <Accordion title="DUNGEONS OF LEMURIA" open={false}>
            <StyledLoreContentDesc className="mb-4 text-white text-sm">
              a social strategy game inspired by iterative prisoners dilemma
              Players battle it out for weekly rewards through leaderboards
            </StyledLoreContentDesc>
          </Accordion>

          <p className="mt-6 mb-3 text-white">Game Modes</p>
          <ul className="text-white list-disc pl-5">
            <li className="mb-1">
              <p className="text-sm">
                PvP : supporting wagering & leaderboard rewards
              </p>
            </li>
            <li className="mb-1">
              <p className="text-sm">
                PvE : loot based gameplay with level progression system
              </p>
            </li>
          </ul>
        </div>

        <StyledEcoSystemSliderContent>
          <video autoPlay muted playsInline>
            <source src="/videos/eco-gaming.mp4" />
          </video>
        </StyledEcoSystemSliderContent>
      </StyledEcoSystemGrid>
    </StyledEcoSystemContentSection>
  );
};

export default Gaming;
