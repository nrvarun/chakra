import styled from "styled-components";

export const StyledLitePaperWrapper = styled.section`
  padding: 76px 0 0 0;
  background: #000000;
  min-height: 100vh;
  overflow: hidden;
`;

export const StyledLitePaperBgImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledLitePaperNav = styled.aside`
  min-height: calc(100vh - 76px);
  display: none;
  width: auto;
  flex: 1 1 25%;
  padding: 0 75px;

  @media (min-width: 1200px) {
    display: flex;
  }

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 86px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #fafafa;
    margin: 0 0 20px 0;

    @media (min-width: 1600px) {
      margin: 0 0 80px 0;
    }
  }

  nav {
    max-height: calc(100vh - 160px);
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px; /* width of the entire scrollbar */
      opacity: 0.4;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #8492a6;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background-color: #273444;
    }

    ol {
      list-style-type: decimal !important;
      padding: 0 32px 0 18px;

      li {
        color: #ffffff;
      }
    }
  }
`;

export const StyledLitePaperContent = styled.section`
  min-height: calc(100vh - 76px);
  flex: 1 1 75%;
`;

export const StyledLitePaperContentWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledLitePaperText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledLitePaperListTitle = styled(StyledLitePaperText)`
  color: #ffffff;
`;

export const StyledLitePaperSubListText = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
`;

export const StyledLitePaperArticle = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  overflow: scroll;
  padding: 90px 36px 120px 36px;

  @media (min-width: 1200px) {
    padding: 0 120px 180px 120px;
  }

  h3 {
    font-weight: 400;
    font-size: 48px;
    line-height: 1.5;
    background-color: transparent !important;

    @media (min-width: 1200px) {
      font-size: 72px;
    }
  }

  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    background-color: transparent !important;

    @media (min-width: 1200px) {
      font-size: 48px;
    }

    span {
      font-size: 24px;
      line-height: 1.25;
    }
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.25;
    color: #ffffff;

    @media (min-width: 1200px) {
      max-width: 85%;
      font-size: 16px;
    }
  }

  ol {
    list-style-type: decimal !important;
    padding: 0 0 0 12px;
    margin: 0 0 40px 10px;

    li {
      font-size: 16px;
      line-height: 1.25;
      color: #ffffff;
      margin: 0 0 8px 0;
    }
  }
`;

export const StyledWhitepaperNav = styled.aside`
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  background: #010101;
  z-index: 100;
  height: auto;
`;

export const StyledWhitepaperNavHeading = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #e11d48;
  padding: 12px;
  text-align: center;
`;

export const StyledWhitepaperNavSubHeading = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`;

export const StyledWhitepaperNavToggleCTA = styled.button`
  background: #010101;
  padding: 10px;
  text-align: center;
  width: auto;
  display: flex;
  justify-content: center;

  svg {
    margin: 0 0 0 8px;
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }

  &.open {
    svg {
      transform: rotate(0deg);
    }
  }
`;

export const StyledWhitepaperMobileNavWrapper = styled.div`
  border: 0.5px solid #484848;
`;
