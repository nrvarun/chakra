import Link from "next/link";
import React from "react";
import { StyledFooter } from "./footer.style";

type Props = {};

const FOOTER_LINKS = [
  {
    path: "https://twitter.com/",
    title: "Twitter",
  },
  {
    path: "https://discord.com/",
    title: "Discord",
  },
  {
    path: "https://telegram.com/",
    title: "Telegram",
  },
];

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <div className="relative flex">
        <ul className="flex items-start mr-auto">
          {FOOTER_LINKS.map((link) => (
            <li className="px-4 py-2 mr-1" key={link.path}>
              <Link href={link.path} target="_blank">
                <p className="text-base font-inter text-white">{link.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
