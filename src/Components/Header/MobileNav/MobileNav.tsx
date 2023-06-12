import React from "react";
import { StyledMobileNavWrapper } from "./mobilenav.style";
import Link from "next/link";

type Props = {};

const NAV_LINKS = [
  {
    path: "/world",
    title: "World",
    disabled: false,
    target: "",
    tooltipContent: "",
  },
  {
    path: "https://mirror.xyz/worldofchakra.eth/03pjbCCXlDpaBAFN6srpLu-XDlscyEqCtMGWYKxqVBY",
    title: "Blog",
    disabled: false,
    target: "_blank",
    tooltipContent: "🚧",
  },
  {
    path: "/whitepaper",
    title: "whitepaper",
    disabled: false,
    target: "",
    tooltipContent: "",
  },
  // {
  //   path: "https://continuous-rover-864.notion.site/Litepaper-85bcde5f6c18473a8a87f4c53bb4c88c",
  //   title: "Docs",
  //   disabled: false,
  //   target: "_blank",
  //   tooltipContent: "",
  // },
  {
    path: "/connect",
    title: "Play",
    disabled: true,
    target: "",
    tooltipContent: "🚧",
  },
];

const MobileNav = ({}: Props) => {
  return (
    <StyledMobileNavWrapper
      className="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <nav>
        <ul>
          {NAV_LINKS.map((nav) => (
            <li key={nav.path}>
              <Link href={nav.path} className="after:opacity-0">
                <p className="capitalize text-center">{nav.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledMobileNavWrapper>
  );
};

export default MobileNav;
