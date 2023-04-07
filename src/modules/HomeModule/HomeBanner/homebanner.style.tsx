import styled from "styled-components";

export const StyledHomeBannerWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 100vh;

  .layer {
    height: 100%;
    width: 100%;

    img {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      right: 0;
    }

    .background {
      bottom: 120px;
      transform: scale(1.1);
    }

    .background-devis {
      width: 150%;
      transform: scale(1.15);
    }

    .light {
      width: 120%;
      transform: scale(1.2);
    }

    .flowers {
      width: 100%;
      transform: scale(1);
      left: -5%;
      margin-top: 2%;
    }

    .clouds {
      margin-top: 2%;
    }

    .clouds-bottom {
      margin-top: 2%;
    }

    .devi {
      margin-top: 0%;
      height: 110%;
    }

    .character {
      margin-left: 10%;
      margin-top: -2%;
    }

    .character-left {
      margin-left: -5%;
      margin-top: 0;
    }
  }
`;

export const StyledMobileHomeBannerWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
