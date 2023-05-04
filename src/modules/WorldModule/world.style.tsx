import styled from "styled-components";

export const StyledWorldSection = styled.section`
  position: relative;

  .world-item {
    width: 100% !important;
    padding: 0 !important;
    background: #000 !important;
    transform-style: preserve-3d;
    margin: 0 !important;
  }
`;

export const StyledWorldPageBgImgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  justify-content: end;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 16px;
  z-index: 10;
  transition: transform 0.5s ease;
  transform: translateY(100px);

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
    opacity: 0;
    transition: opacity 0.6s ease;
    transition-delay: 0.25s;
  }

  .explore-item {
    border-radius: 16px;
    padding: 8px 16px;
    background: transparent;
    display: inline-block;
    width: auto;
    opacity: 0;
    transition: opacity 0.6s ease;
    transition-delay: 0.25s;
  }
`;

export const StyledWorldItem = styled.article<{ bgPattern?: string }>`
  position: relative;
  min-height: 450px;
  overflow: hidden;
  transition: background 0.6s ease;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (min-width: 1280px) {
    min-height: calc(100vh - 65px);
  }

  a {
    display: block;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.4);

    ${StyledWorldContent} {
      transform: translateY(-28%);
      
      @media (min-width: 1440px) {
        transform: translateY(-32%);
      }
      
      @media (min-width: 1600px) {
        transform: translateY(-35%);
      }

      h3,
      p {
        opacity: 1;
        
      }
    }
    }
  }
`;
