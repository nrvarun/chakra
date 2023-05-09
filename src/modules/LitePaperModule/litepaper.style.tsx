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
  width: auto;
  flex: 1 1 25%;
  padding: 0 75px;
  display: flex;

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
    ol {
      list-style-type: decimal !important;
      padding: 0 0 0 18px;

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
`;

export const StyledLitePaperArticle = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 0 120px 180px 120px;
  height: 100vh;
  overflow: scroll;

  h3 {
    font-weight: 400;
    font-size: 72px;
    line-height: 1.5;
    background-color: transparent !important;
  }

  h4 {
    font-weight: 400;
    font-size: 48px;
    line-height: 1.25;
    background-color: transparent !important;

    span {
      font-size: 24px;
      line-height: 1.25;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #ffffff;
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
