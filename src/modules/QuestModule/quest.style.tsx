import styled from "styled-components";

export const StyledQuestWrapper = styled.section`
  position: relative;
  padding: 40px 24px;
  border-top: 1px solid #484848;
`;

export const StyledQuestContentWrapper = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 40% 58%;
  }
`;

export const StyledQuestListingsWrapper = styled.section`
  position: relative;
`;

export const StyledQuestLeaderBoardWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  border: 1px solid #272b30;
  background: #000;
  overflow: auto hidden;
`;

export const StyledQuestLeaderBoardHeader = styled.div`
  position: relative;
  padding: 12px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 36% 60%;
  align-items: center;
`;

export const StyledQuestHeading = styled.h2`
  color: #e11d48;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 992px) {
    font-size: 40px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;

export const StyledQuestTableHeading = styled.h2`
  color: #e11d48;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const StyledQuestFilters = styled.ul`
  position: relative;
  display: flex;

  li {
    button {
      color: var(--base-01, #e6e6e6);
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: capitalize;
      opacity: 0.5;
      transition: opacity 0.5s ease;

      &.active {
        opacity: 1;
      }
    }
  }
`;

export const StyledQuestItem = styled.article`
  border-radius: 7.505px;
  overflow: hidden;
  border: 0.938px solid #272b30;
  background: #000;
  position: relative;
  height: 100%;

  img {
    height: 100px;
    width: 100%;
    object-fit: cover;

    @media (min-width: 1200px) {
      height: 160px;
    }
  }

  button {
    position: absolute;
    right: 10px;
    z-index: 2;
    bottom: 16px;
    border-radius: 3.752px;
    background: #e11d48;
    padding: 6px;
    color: #fff;
    font-family: Inter;
    font-size: 13.133px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const StyledQuestItemContent = styled.div`
  padding: 12px;
  max-width: 55%;

  h4 {
    color: #fff;
    font-family: Inter;
    font-size: 15.009px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0 0 12px 0;
  }

  p {
    color: #fff;
    font-family: Inter;
    font-size: 11.257px;
    font-style: normal;
    font-weight: 500;
    margin: 0 0 12px 0;
    line-height: normal;

    &.reward {
      color: #ffd600;
      font-family: Inter;
      font-size: 11.257px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const StyledQuestBody = styled.div`
  position: relative;
`;

export const StyledQuestTable = styled.table`
  width: 100%;
  margin: 12px 0 0 0;

  tr {
    width: 100%;
    display: inline-flex;
  }

  td {
    color: #fff;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (min-width: 1200px) {
      font-size: 12px;
    }

    &.rank {
      width: 20%;
    }

    &.name {
      width: 30%;
    }

    &.wallet {
      width: 30%;
    }

    &.score {
      width: 20%;
    }
  }

  tbody {
    tr {
      padding: 0 16px;
    }

    td {
      padding: 12px 0;

      span {
        display: inline-block;
        max-width: 75%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;

export const StyledQuestItemsListingWrapper = styled.div`
  overflow: auto;

  @media (min-width: 1200px) {
    padding: 0 12px 0 0;
    height: calc(100vh - 258px);
  }

  &::-webkit-scrollbar {
    width: 8px;
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
`;
