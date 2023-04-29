import styled from "styled-components";

export const StyledMobileBanner = styled.section`
  height: 100vh;
  display: flex;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  article {
    position: relative;
    z-index: 2;

    svg {
      width: 100%;
      margin: 0 auto 12px auto;

      path {
        fill: #ffffff;
      }
    }
  }
`;
