import styled from "styled-components";

export const StyledAccordionWrapper = styled.div`
  position: relative;

  h4 {
    color: #33383f;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: color 0.5s ease;

    &:hover {
      color: #e11d48;
    }
  }

  &.open {
    h4 {
      color: #e11d48;
    }
  }

  ul {
    li {
      margin: 0 0 4px 0;
    }
  }
`;
