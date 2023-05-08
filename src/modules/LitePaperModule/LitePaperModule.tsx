import React from "react";
import {
  StyledLitePaperBgImg,
  StyledLitePaperContent,
  StyledLitePaperContentWrapper,
  StyledLitePaperListTitle,
  StyledLitePaperNav,
  StyledLitePaperSubListText,
  StyledLitePaperText,
  StyledLitePaperWrapper,
} from "./litepaper.style";
import LitepaperNav from "./LitepaperNav";
import LitepaperArticle from "./LitepaperArticle";

type Props = {};

const LitePaperModule = (props: Props) => {
  return (
    <StyledLitePaperWrapper>
      <StyledLitePaperContentWrapper>
        <StyledLitePaperNav>
          <h4 className="font-marco">litepaper</h4>
          <LitepaperNav />
        </StyledLitePaperNav>
        <StyledLitePaperContent className="flex-1 relative w-full h-full bg-black">
          <StyledLitePaperBgImg>
            <img src="/images/litepaperbg.png" alt="" />
          </StyledLitePaperBgImg>
          <LitepaperArticle />
        </StyledLitePaperContent>
      </StyledLitePaperContentWrapper>
    </StyledLitePaperWrapper>
  );
};

export default LitePaperModule;
