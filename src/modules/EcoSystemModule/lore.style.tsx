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

  img {
    height: auto;
    width: 100%;
    transtion: opacity 0.3s ease;
  }
`;

export const StyledLoreContent = styled.section`
  padding: 4rem 1.5rem;
  min-height: 100vh;
`;

export const StyledLoreContentHeading = styled.h4`
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.01em;
  margin: 0 0 2rem 0;
`;

export const StyledLoreContentSubHeading = styled.h5`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
`;

export const StyledLoreContentDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  max-width: 360px;
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
`;

export const StyledLoreFactionSection = styled("section")`
  background: #000000;
  min-height: 100vh;
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
