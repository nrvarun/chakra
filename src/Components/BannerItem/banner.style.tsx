import styled from "styled-components";

export const StyledBannerWrapper = styled.section`
  padding: 0 0 20px 0;

  .slick-dots {
    bottom: -34px;

    @media (min-width: 1200px) {
      bottom: 34px;
    }

    li {
      &.slick-active {
        button {
          opacity: 1;
        }
      }

      @media (min-width: 1200px) {
        width: 60px;
      }

      button {
        opacity: 0.5;
        width: 20px;
        height: 3px;
        background: #ffffff;
        padding: 0;

        &:before {
          display: none;
        }

        @media (min-width: 1200px) {
          width: 50px;
        }
      }
    }
  }
`;

export const StyledBannerItemWrapper = styled.article`
  position: relative;
  display: flex;

  img {
    width: 100%;
    height: auto;

    @media (min-width: 1200px) {
      // height: 600px;
    }
  }

  .gradient {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -40px;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: 10;
    background: linear-gradient(
      0.6deg,
      #000000 17.49%,
      rgba(0, 0, 0, 0) 48.24%
    );

    @media (min-width: 1200px) {
      bottom: -100px;
    }
  }

  aside {
    text-align: right;
    z-index: 10;
    position: absolute;
    right: 0;
    bottom: -20px;
    left: 0;
    padding: 20px;

    @media (min-width: 1200px) {
      bottom: 120px;
      padding: 18px 60px;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 30px;
    line-height: 99%;
    text-align: right;
    color: #e11d48;
    background: none;
    margin: 0 0 24px 0;

    @media (min-width: 1200px) {
      font-size: 59px;
      margin: 0 0 48px 0;
    }
  }

  button {
    &,
    &:hover {
      background: #e11d48;
      border-radius: 8px;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #ffffff;
      padding: 8px 24px;

      @media (min-width: 1200px) {
        font-size: 30px;
        padding: 18px 60px;
        line-height: 36px;
      }
    }
  }
`;
