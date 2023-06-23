import styled from "styled-components";

export const StyledHeaderLogoWrapper = styled.div`
  a {
    &,
    &:hover {
      text-align: right;
    }
  }

  svg {
    width: auto;
    height: 24px;
    color: #ffffff;
    margin: 0 auto;

    @media (min-width: 1200px) {
      width: 165.61px;
      height: 40px;
      margin: 0;
    }

    path {
      fill: currentColor;
    }
  }
`;

export const StyledHeader = styled.header`
  padding: 16px 12px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  @media (min-width: 1280px) {
    padding: 16px 24px;
  }

  a {
    & {
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

      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }

      span {
        padding: 2px;
        position: absolute;
        opacity: 0;
        bottom: -35px;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
      }
    }

    &,
    &:hover {
      position: relative;

      &.active {
        &:after {
          transform: scaleX(1);
        }
      }

      &.disabled {
        opacity: 0.8;
      }
    }

    &:hover {
      &.disabled {
        span {
          opacity: 1;
        }
      }
    }
  }

  &.black {
    svg {
      color: #000000;
    }

    a {
      &,
      &:hover {
        color: #000000;

        p {
          color: #000000;
        }
      }
    }
  }

  &.with-underline {
    border-bottom: 1px solid #484848;
  }

  &.black-red {
    svg {
      color: #000000;
    }

    a {
      &,
      &:hover {
        color: #000000;

        p {
          color: #000000;
        }

        &.active {
          color: #e52e3d;

          p {
            color: #e52e3d;
          }
        }
      }
    }
  }

  &.red {
    svg {
      color: #ffffff;
    }

    a {
      &,
      &:hover {
        color: #e52e3d;

        p {
          color: #ffffff;
        }

        &.active {
          p {
            color: #e52e3d;
          }

          &:after {
            background-color: currentColor;
          }
        }
      }
    }
  }

  &.white {
    svg {
      color: #ffffff;
    }

    a {
      &,
      &:hover {
        color: #ffffff;

        p {
          color: #ffffff;
        }

        &.active {
          p {
            color: #ffffff;
          }
        }
      }
    }
  }

  &.litepaper {
    background-color: #000000;
  }

  &.landing {
    .mobile-menu {
      display: none;
    }

    svg {
      @media (min-width: 1200px) {
        display: none;
      }
    }

    a {
      &,
      &:hover {
        color: #ffffff;
      }
    }
  }
`;

export const StyledMobileMenuCTA = styled.button`
  svg {
    height: 20px;
    width: 20px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
