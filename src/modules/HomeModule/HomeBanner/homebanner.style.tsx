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

  .layer {
    &.devi {
      margin-top: -10%;
    }

    &.character {
      margin-left: 10%;
    }
  }
`;
