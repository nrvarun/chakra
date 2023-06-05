import styled from "styled-components";

export const StyledHomeBanner = styled.section`
  position: relative;
  min-height: 100vh;
`;

export const StyledHomeMobileBanner = styled.section`
  position: relative;
  min-height: 100vh;

  img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100vh;

  .top-content {
    svg {
      width: 80px;
      height: 80px;
    }
  }

  .bottom-content {
    margin: 0 0 80px 0;

    @media (min-width: 1600px) {
      margin: 0 0 15% 0;
    }

    @media (min-width: 1900px) {
      margin: 0 0 18% 0;
    }

    svg {
      width: 180px;
      height: auto;
      margin: 0 0 0 -10px;

      @media (min-width: 1280px) {
        width: 496.84px;
        height: 120px;
      }
    }
  }
`;
