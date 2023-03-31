import styled from "styled-components";

export const StyledHeaderLogoWrapper = styled.div`
  svg {
    width: 165.61px;
    height: 40px;
    color: #ffffff;

    path {
      fill: currentColor;
    }
  }
`;

export const StyledHeader = styled.header`
  padding: 16px 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  a {
    &,
    &:hover {
      &.active {
        text-decoration: underline;
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

  &.landing {
    svg {
      display: none;
    }

    a {
      &,
      &:hover {
        color: #ffffff;
      }
    }
  }
`;
