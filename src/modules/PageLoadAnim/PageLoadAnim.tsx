import { motion } from "framer-motion";
import { StyledPageLoadWrapper } from "./pageload.style";

type Props = {};

const PageLoadAnim = (props: Props) => {
  return (
    <StyledPageLoadWrapper>
      <motion.img
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        src="/icons/home-logo.svg"
        alt="home logo"
      />
    </StyledPageLoadWrapper>
  );
};

export default PageLoadAnim;
