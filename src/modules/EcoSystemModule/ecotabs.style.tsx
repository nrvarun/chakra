import styled from "styled-components";

export const StyledEcoTabsWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledEcoTabsNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;

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
    transition: opacity 0.5s ease;

    &:hover {
      opacity: 1;
    }

    &.active {
      order: 0;
    }

    @media (min-width: 1200px) {
      font-size: 48px;
      min-width: auto;
    }
  }
`;

export const StyledEcoTabsContent = styled.section`
  width: 100%;
`;
