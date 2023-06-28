import styled from "styled-components";

export const StyledFactionsWrapper = styled.section`
  width: 100%;
  background: #000000;
  padding: 72px 0 0 0;

  @media (min-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
  }
`;

export const StyledFactionsContent = styled.div`
  height: calc(100vh - 72px);
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  .grid {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    pointer-events: none;

    &.active {
      opacity: 1;
      z-index: 10;
      pointer-events: all;
    }
  }
`;

export const StyledFactionNavWrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 10%;
  bottom: 0;
  height: 90vh;
  z-index: 11;

  @media (min-width: 1920px) {
    top: 15%;
  }
`;

export const StyledFactionContent = styled.div`
  padding: 16px 24px 16px;
  border-radius: 4px;
  border: 1px solid rgba(51, 56, 63, 1);
  background-color: #000000;

  header {
    border-bottom: 1px solid rgba(51, 56, 63, 1);
    margin: 0 0 16px 0;

    h4 {
      font-family: "Marcovaldo";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 43px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: #e11d48;
      margin: 0 0 12px 0;
    }
  }

  p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(174, 177, 179, 1);
    margin: 0 0 12px 0;

    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }
`;

export const StyledFactionsBottomPattern = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
`;

export const StyledFactionMobileCard = styled.article`
  figure {
    img {
      width: 100%;
      height: auto;
    }
  }

  h4 {
    font-family: Marcovaldo;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0.01em;
    text-align: left;
    color: rgba(225, 29, 72, 1);
    text-transform: capitalize;
    margin: 0 0 12px 0;
  }

  p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(174, 177, 179, 1);
    margin: 0 0 12px 0;
  }
`;

export const StyledFactionMobileWrapper = styled.div`
  padding: 90px 0 24px 0;
  position: relative;
  z-index: 10;
  background: #000000;
`;

export const StyledFactionItem = styled.article`
  img {
    height: 100%;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1200px) {
      height: 100%;
      max-height: 83vh;
    }
  }
`;
