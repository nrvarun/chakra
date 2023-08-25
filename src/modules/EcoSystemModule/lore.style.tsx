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

export const StyledEcoSystemContent = styled.section`
  padding: 1rem 7.5rem;
`;

export const StyledLoreContentHeading = styled.h4`
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.01em;
  margin: 0 0 2rem 0;

  .play-btn {
    display: inline-block;
  }
`;

export const StyledLoreContentSubHeading = styled.h5`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
`;

export const StyledLoreContentDesc = styled.p`
  font-family: "Inter", sans-serif;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledLoreContentDescTitle = styled.h6`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fafafa;
`;

export const StyledLoreContentSection = styled.section`
  @media (min-width: 1200px) {
    min-height: calc(100vh - 118px);
  }
`;

export const StyledEcoSystemContentSection = styled.section`
  padding: 100px 20px;

  @media (min-width: 1200px) {
    padding: 70px 40px 0 40px;
    min-height: calc(100vh - 118px);
  }
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

export const StyledEcoSystemGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 5rem;

  @media (min-width: 1200px) {
    grid-gap: 6rem;
    align-items: start;
    grid-template-columns: 32% 58%;
    height: calc(100vh - 110px);
  }
`;

export const StyledEcoSystemSliderContent = styled.div`
  figure {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledMangaDetailsTextList = styled.ul`
  li {
    opacity: 0.5;
    transition: opacity 0.5s ease;

    &.active {
      opacity: 1;
    }
  }
`;
