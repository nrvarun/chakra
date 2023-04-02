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

    div {
      transform: translate3d(0, 0, 0);
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }

    .background {
      position: absolute;
      width: 120%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 120px;
      transform: scale(1.1);
    }

    .devi {
      margin-top: -10%;
    }

    .character {
      margin-left: 10%;
    }
  }
`;
