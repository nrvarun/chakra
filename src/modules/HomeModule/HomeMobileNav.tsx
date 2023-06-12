import React from "react";
import Link from "next/link";
import { StyledHomeMobileNavWrapper } from "./home.style";

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

const HomeMobileNav = (props: Props) => {
  return (
    <StyledHomeMobileNavWrapper>
      <nav>
        <ul>
          {NAV_LINKS.map((nav) => (
            <li key={nav.path}>
              <Link href={nav.path}>
                <p className="font-marco capitalize">{nav.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHomeMobileNavWrapper>
  );
};

export default HomeMobileNav;
