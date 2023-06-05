import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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

const HeaderNav = (props: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
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
              <p className="text-xs md:text-sm lg:text-base font-inter capitalize text-white">
                {link.title}
              </p>
              {link.disabled && <span>{link.tooltipContent}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderNav;
