import styled from "styled-components";

export const StyledHomeBanner = styled.section`
  position: relative;
  min-height: 100vh;
`;

export const StyledHomeBannerBgImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  pointer-events: none;

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
`;

export const StyledHomeBannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const StyledHomeBannerContent = styled.div`
  padding: 32px;

  svg {
    width: 100px;
    height: 30px;

    @media (min-width: 1280px) {
      width: 496.84px;
      height: 120px;
    }
  }
`;
