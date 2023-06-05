import Link from "next/link";
import { StyledHeader, StyledHeaderLogoWrapper } from "./header.style";

import SVG from "react-inlinesvg";
import { useRouter } from "next/router";
import { useWindowSize } from "react-use";
import HeaderNav from "./HeaderNav";
import MobileNav from "./MobileNav";

type Props = {
  logo?: React.ReactNode;
  logoColor?: string;
  customClass?: string;
};

const Header = ({ customClass = "" }: Props) => {
  const { width } = useWindowSize();

  return (
    <StyledHeader className={customClass}>
      <div className="grid grid-cols-2">
        <StyledHeaderLogoWrapper>
          <Link href={"/"} className="inline-block after:opacity-0">
            <SVG
              src={width > 1200 ? "/icons/mobile-logo.svg" : "/icons/logo.svg"}
            />
          </Link>
          <SVG src="/icons/hamburger.svg" />
        </StyledHeaderLogoWrapper>
        {width > 1200 ? <HeaderNav /> : <MobileNav />}
      </div>
    </StyledHeader>
  );
};

export default Header;
