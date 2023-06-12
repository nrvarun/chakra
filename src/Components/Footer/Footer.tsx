import Link from "next/link";
import React from "react";
import { StyledFooter } from "./footer.style";
import SVG from "react-inlinesvg";

type Props = {};

const FOOTER_LINKS = [
  {
    disabled: false,
    icon: "/icons/twitter.svg",
    path: "https://twitter.com/worldofchakra",
    title: "Twitter",
    tooltipContent: "",
  },
  {
    disabled: true,
    icon: "/icons/discord.svg",
    path: "https://discord.gg/2mwyTYbr",
    title: "Discord",
    tooltipContent: "🚧",
  },
];

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <div className="relative flex">
        <ul className="flex items-start m-auto mb-6 xl:ml-0 xl:mb-0">
          {FOOTER_LINKS.map((link) => (
            <li className="px-1 md:px-2 py-2 mr-10 xl:mr-4" key={link.path}>
              <Link
                href={link.path}
                target="_blank"
                className={`${link.disabled ? "disabled" : ""}`}
              >
                {/* <SVG src={link.icon} /> */}
                <p className="font-inter font-medium text-white text-sm">
                  {link.title}
                </p>

                {link.disabled && <span>{link.tooltipContent}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="uppercase text-xs text-center text-white xl:hidden">
        view on desktop for a better viewing experience
      </p>
    </StyledFooter>
  );
};

export default Footer;
