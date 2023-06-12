import Link from "next/link";
import {
  StyledHeader,
  StyledHeaderLogoWrapper,
  StyledMobileMenuCTA,
} from "./header.style";

import SVG from "react-inlinesvg";
import { useWindowSize } from "react-use";
import HeaderNav from "./HeaderNav";
import MobileNav from "./MobileNav";
import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";

type Props = {
  logo?: React.ReactNode;
  logoColor?: string;
  customClass?: string;
};

const Header = ({ customClass = "" }: Props) => {
  const { width } = useWindowSize();

  const [isMobileNavOpen, setMobileNav] = useState(false);

  const toggleMobileNav = useCallback(() => {
    setMobileNav((state) => !state);
  }, []);

  return (
    <StyledHeader className={customClass}>
      <div className="grid grid-cols-1 text-center xl:grid-cols-2">
        <StyledHeaderLogoWrapper>
          <Link href={"/"} className="block after:opacity-0">
            <SVG
              src={width > 1200 ? "/icons/mobile-logo.svg" : "/icons/logo.svg"}
            />
          </Link>
        </StyledHeaderLogoWrapper>
        <div className="absolute xl:relative top-4 right-3 xl:top-0">
          <StyledMobileMenuCTA
            onClick={toggleMobileNav}
            className="xl:opacity-0 mobile-menu"
          >
            <SVG
              src={
                isMobileNavOpen ? "/icons/close.svg" : "/icons/hamburger.svg"
              }
              className="ml-auto "
            />
          </StyledMobileMenuCTA>
          {width > 1200 ? (
            <HeaderNav />
          ) : (
            <AnimatePresence>
              {isMobileNavOpen && <MobileNav />}
            </AnimatePresence>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
