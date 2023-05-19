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
} from "./whitepaper.style";
import WhitepaperNav from "./WhitepaperNav";
import WhitepaperArticle from "./WhitepaperArticle";

type Props = {};

const WhitePaperModule = (props: Props) => {
  return (
    <StyledLitePaperWrapper>
      <StyledLitePaperContentWrapper>
        <StyledLitePaperNav>
          {/* <h4 className="font-marco">litepaper</h4> */}
          <WhitepaperNav />
        </StyledLitePaperNav>
        <StyledLitePaperContent className="flex-1 relative w-full h-full bg-black">
          <StyledLitePaperBgImg>
            <img src="/images/litepaperbg.png" alt="" />
          </StyledLitePaperBgImg>
          <WhitepaperArticle />
        </StyledLitePaperContent>
      </StyledLitePaperContentWrapper>
    </StyledLitePaperWrapper>
  );
};

export default WhitePaperModule;
