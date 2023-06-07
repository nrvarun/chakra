import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMobileNavWrapper = styled(motion.aside)`
  position: relative;
  background: #010101;
  border: 0.5px solid #484848;
  padding: 16px;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;

  nav {
    margin: auto 0 0 0;

    ul {
      li {
        margin: 0 0 16px 0;

        &:last-child {
          margin: 0;
        }

        p {
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.01em;
          color: #fafafa;
        }
      }
    }
  }
`;
