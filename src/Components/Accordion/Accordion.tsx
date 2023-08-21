import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StyledAccordionWrapper } from "./accordion.style";

type AccordionProps = {
  title: string;
  open: boolean;
  classes?: string;
  children: React.ReactNode | string;
};

const Accordion = ({
  title,
  children,
  open = false,
  classes,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open || false);

  return (
    <StyledAccordionWrapper
      className={`${isOpen ? "open" : "closed"} ${classes}`}
    >
      <motion.div>
        <motion.div
          key="question"
          className=" relative z-20 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.h4
            className={`font-bold mb-2 text-base ${
              isOpen ? "text-prblue" : ""
            }`}
          >
            <span className="mr-1 text-white"> {`${!isOpen ? "+" : "-"}`}</span>
            {title}
          </motion.h4>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className="px-3 mb-3"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </StyledAccordionWrapper>
  );
};

export default Accordion;
