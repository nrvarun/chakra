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
import { useWindowSize } from "react-use";
import WhitepaperMobileNav from "./WhitepaperMobileNav";

type Props = {};

const WhitePaperModule = (props: Props) => {
  const { width } = useWindowSize();

  const renderNav = () => {
    if (width > 1200) {
      return (
        <StyledLitePaperNav>
          <WhitepaperNav />
        </StyledLitePaperNav>
      );
    }

    return <WhitepaperMobileNav />;
  };

  return (
    <StyledLitePaperWrapper>
      <StyledLitePaperContentWrapper>
        {renderNav()}
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
