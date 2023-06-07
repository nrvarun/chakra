import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 16px;
  z-index: 100;

  @media (min-width: 1024px) {
    padding: 24px 32px;
  }

  ul {
    li {
      a {
        position: relative;

        &:after {
          position: absolute;
          content: "";
          bottom: -2px;
          left: 0;
          right: 0;
          width: 100%;
          height: 2px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s ease;
        }

        span {
          padding: 2px;
          position: absolute;
          opacity: 0;
          width: auto;
          bottom: -35px;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }

        &:hover {
          &:after {
            transform: scaleX(1);
          }

          &.disabled {
            span {
              opacity: 1;
            }
          }
        }

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
