import styled from "styled-components";

export const StyledEcoTabsWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 24px 0 0 0;
`;

export const StyledEcoTabsNav = styled.nav`
  display: inline-flex;
  flex-wrap: nowrap;
  overflow: auto;

  @media (min-width: 1200px) {
    position: absolute;
    top: 3px;
    left: 0;
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 6px;
    opacity: 0.4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e11d48;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #273444;
  }

  button {
    padding: 0 12px;
    color: #e11d48;
    font-family: "Marcovaldo", serif;
    font-style: normal;
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    margin: 0 24px 0 0;
    display: block;
    min-width: 200px;
    order: 1;
    border: 1px solid currentColor;
    border-radius: 8px;
    background: transparent;
    transition: opacity 0.5s ease, background-color 0.5s ease;

    &:hover {
      opacity: 1;
    }

    &.active {
      color: #000000;
      background: #e11d48;
      order: 0;
    }

    @media (min-width: 1200px) {
      font-size: 32px;
      min-width: auto;
    }
  }
`;

export const StyledEcoTabsContent = styled.section`
  width: 100%;
`;
