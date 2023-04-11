import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 12px;
  z-index: 100;

  @media (min-width: 1024px) {
    padding: 24px;
  }

  ul {
    li {
      svg {
        height: auto;
        width: 30px;

        path {
          fill: #fff;
        }
      }
    }
  }
`;
