import Link from "next/link";
import React from "react";
import { StyledFooter } from "./footer.style";
import SVG from "react-inlinesvg";

type Props = {};

const FOOTER_LINKS = [
  {
    icon: "/icons/twitter.svg",
    path: "https://twitter.com/worldofchakra",
    title: "Twitter",
  },
  {
    icon: "/icons/discord.svg",
    path: "https://discord.gg/2mwyTYbr",
    title: "Discord",
  },
];

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <div className="relative flex">
        <ul className="flex items-start mr-auto">
          {FOOTER_LINKS.map((link) => (
            <li className="px-1 md:px-2 py-2 mr-1" key={link.path}>
              <Link href={link.path} target="_blank">
                {/* <SVG src={link.icon} /> */}
                <p className="font-inter font-medium text-white text-sm">
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
