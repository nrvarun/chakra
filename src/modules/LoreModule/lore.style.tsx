import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledLoreBgImgWrapper = styled("div")`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: 0;
  pointer-events: none;
  transition: opacity 1s ease;

  &:after {
    content: "";
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  img {
    height: auto;
    width: 100%;
    transition: opacity 0.3s ease, transform 1s ease;
  }
`;

export const StyledLoreContent = styled.section`
  padding: 2rem 1.5rem;
  min-height: 100vh;
`;

export const StyledLoreContentHeading = styled.h4`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.01em;
`;

export const StyledLoreContentSubHeading = styled.h5`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  max-width: 800px;
`;

export const StyledLoreContentDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  max-width: 800px;
`;

export const StyledLoreContentDescTitle = styled.h6`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fafafa;
`;

export const StyledLoreContentSection = styled.section`
  min-height: calc(100vh - 118px);
  display: flex;
`;

export const StyledLoreFactionSection = styled("section")`
  min-height: 200px;
  padding: 5rem 1.5rem 2rem 1.5rem;
`;

export const StyledLoreContentStickyNav = styled.nav`
  position: sticky;
  top: 90px;
`;

export const StyledFactionImgList = styled.ul`
  li {
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
`;

export const StyledFactionNav = styled.nav`
  position: relative;
`;

export const StyledFactionNavList = styled.ul`
  li {
    a {
      &,
      &:hover {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #e52e3d;

        &:hover {
          color: #fafafa;
        }

        &.active {
          color: #fafafa;
          text-decoration: underline;
        }
      }
    }
  }
`;
