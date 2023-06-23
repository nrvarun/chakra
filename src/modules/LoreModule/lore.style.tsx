import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledLoreBgImgWrapper = styled("div")`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: opacity 1s ease;

  &:after {
    content: "";
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.25;
    z-index: 1;
    pointer-events: none;
  }

  video {
    height: 100%;
    width: 100%;
    pointer-events: none;
    object-fit: cover;
    transition: opacity 0.3s ease, transform 1s ease;
  }

  .slick-dots {
    position: absolute;
    bottom: 110px;
    left: 0;
    right: 0;
    z-index: 20;
    display: flex !important;
    justify-content: center;

    li {
      &.slick-active {
        button {
          border-color: #ffffff;
        }
      }

      button {
        width: 20px;
        height: 0px;
        border: 2px solid #6f767e;
        margin: 0 12px 0 0;
      }
    }
  }
`;

export const StyledLoreContent = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const StyledLoreContentHeading = styled.h4`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.01em;
`;

export const StyledLoreContentSubHeading = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;
  max-width: 660px;
`;

export const StyledLoreContentDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  max-width: 630px;
`;

export const StyledLoreContentDescTitle = styled.h6`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fafafa;
`;

export const StyledLoreContentSection = styled.article`
  height: 90%;
  width: 100%;
  display: flex;
`;

export const StyledLoreFactionSection = styled("section")`
  min-height: 100px;
  padding: 5rem 1.5rem 2rem 1.5rem;
`;

export const StyledLoreContentStickyNav = styled.nav`
  position: sticky;
  top: 90px;
`;

export const StyledFactionImgList = styled.ul`
  li {
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
`;

export const StyledFactionNav = styled.nav`
  position: relative;
`;

export const StyledFactionNavList = styled.ul`
  li {
    a {
      &,
      &:hover {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #e52e3d;

        &:hover {
          color: #fafafa;
        }

        &.active {
          color: #fafafa;
          text-decoration: underline;
        }
      }
    }
  }
`;

export const StyledSliderNavBtn = styled.button`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: #252525; /* Back */
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`;

export const StyledSliderNavWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
  max-width: 660px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 20;
  padding: 0 40px;

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

export const StyledLoreBreadCrumbWrapper = styled.div`
  position: fixed;
  width: 30%;
  top: 100px;
  left: 20px;
  z-index: 20;
  padding: 0 20px;
  max-width: 1440px;

  p {
    position: relative;
    color: #ffffff;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1.5px;
      background-color: currentColor;
      bottom: -1px;
      right: 0;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;

export const StyledStoryNav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 11;
  top: 90px;

  button {
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    padding: 8px 20px 8px 20px;

    &.active {
      p {
        color: #e11d48;
      }
    }

    p {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        background-color: currentColor;
        bottom: -1px;
        right: 0;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
      }

      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }

    @media (min-width: 1200px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
