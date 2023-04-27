import Link from "next/link";
import { StyledHeader, StyledHeaderLogoWrapper } from "./header.style";

import SVG from "react-inlinesvg";
import { useRouter } from "next/router";

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
    target: "",
    tooltipContent: "🚧",
  },
  {
    path: "/writing",
    title: "Writing",
    disabled: true,
    target: "",
    tooltipContent: "🚧",
  },
  {
    path: "https://continuous-rover-864.notion.site/Litepaper-85bcde5f6c18473a8a87f4c53bb4c88c",
    title: "Docs",
    disabled: false,
    target: "_blank",
    tooltipContent: "🚧",
  },
  {
    path: "/connect",
    title: "Play",
    disabled: true,
    target: "",
    tooltipContent: "🚧",
  },
];

const Header = ({ customClass = "" }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <StyledHeader className={customClass}>
      <div className="grid grid-cols-2">
        <StyledHeaderLogoWrapper>
          <Link href={"/"} className="inline-block after:opacity-0">
            <SVG src="/icons/logo.svg" />
          </Link>
        </StyledHeaderLogoWrapper>
        <div className="relative flex">
          <ul className="flex items-start ml-auto">
            {NAV_LINKS.map((link) => (
              <li className="px-1 lg:px-5 py-2 mr-1" key={link.path}>
                <Link
                  target={link.target}
                  href={link.disabled ? "/" : link.path}
                  className={`${
                    currentRoute.includes(link.path) ? "active" : "in-active"
                  } ${link.disabled ? "disabled" : ""}`}
                >
                  <p className="text-xs md:text-sm lg:text-base font-inter text-white">
                    {link.title}
                  </p>
                  {link.disabled && <span>{link.tooltipContent}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
