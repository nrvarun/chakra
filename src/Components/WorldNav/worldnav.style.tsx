import styled from "styled-components";

export const StyledWorldNavHeading = styled.h3`
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.01em;
  color: #fafafa;
  margin: 0 0 2rem 0;
`;

export const StyledWorldNavList = styled.nav`
  ul {
    li {
      button {
        &,
        &:hover {
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #fafafa;
          margin: 0 0 16px 0;

          &:hover {
            color: #e52e3d;
          }

          &.active {
            color: #e52e3d;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const StyledWorldNavWrapper = styled.aside`
  position: fixed;
  top: 24%;
  left: 10%;
  bottom: 0;
  width: auto;
  z-index: 100;
  height: 100vh;

  img {
    height: 100%;
    width: 100%;
  }

  h3,
  p {
    background: none;
  }

  &.eco-system {
    ${StyledWorldNavList} {
      a {
        &,
        &:hover {
          color: #000000;

          &:hover {
            color: #e52e3d;
          }

          &.active {
            color: #e52e3d;
            text-decoration: underline;
          }
        }
      }
    }

    ${StyledWorldNavHeading} {
      color: #000000;
    }
  }

  &.vision {
    ${StyledWorldNavList} {
      a {
        &,
        &:hover {
          color: #000000;

          &:hover {
            color: #ffffff;
          }

          &.active {
            color: #ffffff;
            text-decoration: underline;
          }
        }
      }
    }

    ${StyledWorldNavHeading} {
      color: #000000;
    }
  }
`;
