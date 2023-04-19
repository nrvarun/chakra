import styled from "styled-components";

export const StyledWorldSection = styled.section`
  .world-item {
    width: 100% !important;
    padding: 0 !important;
    background: #000 !important;
    transform-style: preserve-3d;
    margin: 0 !important;
  }
`;

export const StyledWorldImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 36.28%
    );
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    transition: opacity 0.6s ease;
  }
`;

export const StyledWorldContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 16px;

  h3 {
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0.01em;
    color: #fafafa;
    padding: 10px 24px;
    background: transparent;
    display: inline-block;
    width: auto;
    transition: background 0.3s ease;
  }

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #fafafa;
    padding: 12px 16px;
    background: transparent;
    display: inline-block;
    width: auto;
    transition: background 0.3s ease;
  }

  .explore-item {
    border-radius: 16px;
    padding: 8px 16px;
    background: transparent;
    display: inline-block;
    width: auto;
    transition: background 0.6s ease;
  }

  &:hover {
    p,
    h3,
    .explore-item {
      background: #000;
    }
  }
`;

export const StyledWorldItem = styled.article`
  position: relative;
  min-height: 450px;
  overflow: hidden;
  border-radius: 16px;
  background: url("./icons/world-bg.svg") repeat;
  transition: background 0.6s ease;

  @media (min-width: 1280px) {
    min-height: calc(100vh - 94px);
  }

  &:hover {
    ${StyledWorldImgWrapper} {
      img {
        opacity: 0;
      }
    }
  }
`;
