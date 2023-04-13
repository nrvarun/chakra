import Link from "next/link";
import { StyledHeader, StyledHeaderLogoWrapper } from "./header.style";

import SVG from "react-inlinesvg";
import { useRouter } from "next/router";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

type Props = {
  logo?: React.ReactNode;
  logoColor?: string;
  customClass?: string;
};

const NAV_LINKS = [
  {
    path: "/world",
    title: "World",
    disabled: true,
    tooltipContent: "Under 🚧",
  },
  {
    path: "/writing",
    title: "Writing",
    disabled: true,
    tooltipContent: "Under 🚧",
  },
  {
    path: "/docs",
    title: "Docs",
    disabled: false,
    tooltipContent: "",
  },
  {
    path: "/connect",
    title: "Connect",
    disabled: false,
    tooltipContent: "",
  },
];

const Header = ({ customClass = "" }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <StyledHeader className={customClass}>
      <div className="grid grid-cols-2">
        <StyledHeaderLogoWrapper>
          <Link href={"/"} className="inline-block">
            <SVG src="/icons/logo.svg" />
          </Link>
        </StyledHeaderLogoWrapper>
        <div className="relative flex">
          <ul className="flex items-start ml-auto">
            {NAV_LINKS.map((link) => (
              <li className="px-1 lg:px-5 py-2 mr-1" key={link.path}>
                <Link
                  href={link.disabled ? "/" : link.path}
                  className={`${
                    currentRoute.includes(link.path) ? "active" : "in-active"
                  } ${link.disabled ? "disabled" : ""}`}
                  data-tooltip-id={`my-tooltip`}
                  data-tooltip-content={link.tooltipContent}
                >
                  <p className="text-xs md:text-sm lg:text-base font-inter text-white">
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </StyledHeader>
  );
};

export default Header;
