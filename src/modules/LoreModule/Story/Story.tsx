import {
  StyledLoreBgImgWrapper,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  canPlay: boolean;
};

const Story = ({ canPlay }: Props) => {
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
              poster="/images/lore/splash-screen.png"
            >
              <source src="/videos/lore/2.mp4" />
            </motion.video>
          )}
        </AnimatePresence>
      </StyledLoreBgImgWrapper>
      <div className="px-10 xl:px-0 mt-auto mx-auto mb-20 relative z-10">
        <div className="text-left">
          <StyledLoreContentHeading className="font-marco text-white mb-4">
            Story
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-4 text-white zarathustra-font">
            And one fine day, she came out tearing the womb of King Sagara, the
            god of oceans. Her birth was acknowledged by the elements, the
            volcanoes puffed, the oceans swelled and the air ravaged the surface
            of the planet. Ancient legends call it her by the name Kumari.
          </StyledLoreContentSubHeading>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Story;
