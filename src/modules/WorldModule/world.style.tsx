import styled from "styled-components";

export const StyledWorld = styled.section`
  position: relative;
  min-height: 450px;
  overflow: hidden;
  border-radius: 16px;

  @media (min-width: 1280px) {
    min-height: calc(100vh - 94px);
  }
`;

export const StyledWorldImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

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
  }
`;

export const StyledWorldContent = styled.div`
  display: flex;
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
  }

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #fafafa;
  }
`;
