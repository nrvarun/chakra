import styled from "styled-components";

export const StyledGameItemWrapper = styled.article`
  background: #232323;
  border-radius: 4px;
  padding: 20px 16px;

  figure img {
    width: 100%;
    margin: 0 0 32px 0;
  }
`;

export const StyledGameItemTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #ffffff;

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const StyledGameItemSubHeading = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #e11d48;

  @media (min-width: 1200px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

export const StyledGameItemCategory = styled.p`
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  text-transform: uppercase;
  color: #ffffff;

  @media (min-width: 1200px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const StyledGameItemCTA = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #ffffff;
  background: #e11d48;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  padding: 8px;

  @media (min-width: 1200px) {
    font-size: 27px;
    line-height: 32px;
  }
`;

export const StyledGameItemDemoCTA = styled.button`
  background: #444444;
  border-radius: 4px;
  padding: 4px;
  font-weight: 300;
  font-size: 8px;
  line-height: 10px;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin: 4px 0 0 auto;

  @media (min-width: 1200px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
