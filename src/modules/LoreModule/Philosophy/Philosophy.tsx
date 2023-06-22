import { AnimatePresence, motion } from "framer-motion";
import {
  StyledLoreBgImgWrapper,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

type Props = {
  canPlay: boolean;
};

const Philosophy = ({ canPlay }: Props) => {
  return (
    <StyledLoreContentSection>
      <StyledLoreBgImgWrapper>
        <AnimatePresence>
          {canPlay && (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              loop
              playsInline
              autoPlay
              muted
            >
              <source src="/videos/lore/3.mp4" />
            </motion.video>
          )}
        </AnimatePresence>
      </StyledLoreBgImgWrapper>
      <div className="px-10 xl:px-0 mb-20 mt-auto mx-auto relative z-10">
        <div className="text-left">
          <StyledLoreContentHeading className="font-marco text-white mb-4">
            Philosophy
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-4 text-white zarathustra-font">
            Chakra symbolizes the cyclic aspect of the formation and destruction
            of reality, but after each iteration, it moves closer to
            singularity. Unlike mainstream good vs evil, Chakra focuses on
            understanding the plurality of things. The greater of good and the
            lesser of evil.
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Philosophy;
