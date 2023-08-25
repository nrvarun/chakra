/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

import Link from "next/link";
import {
  StyledEcoSystemNav,
  StyledLoreBreadCrumbWrapper,
  StyledStoryNav,
} from "modules/LoreModule/lore.style";
import Gaming from "./Gaming";
import Manga from "./Manga";
import Comicon from "./Comicon";
import Web from "./Web";

type Props = {
  handleFactionChange: (f: boolean) => void;
};

const NAV_ITEMS = [
  {
    id: "gaming",
    title: "Gaming",
  },
  {
    id: "manga",
    title: "Manga",
  },
  // {
  //   id: "chakranomicon",
  //   title: "Chakranomicon",
  // },
  {
    id: "webonacci",
    title: "webonacci",
  },
];

const EcoSystemModule = ({ handleFactionChange }: Props) => {
  const [activeTab, setActiveTab] = useState(NAV_ITEMS[0].id);

  const getStoryContent = (tab) => {
    if (tab === "manga") {
      return <Manga />;
    }

    // if (tab === "chakranomicon") {
    //   return <Comicon />;
    // }

    if (tab === "webonacci") {
      return <Web />;
    }

    handleFactionChange(false);
    return <Gaming />;
  };

  return (
    <main className="non-landing eco-system min-h-screen">
      <StyledLoreBreadCrumbWrapper className="grid grid-cols-2 items-center container mx-auto relative">
        <div className="text-left flex items-center relative z-10">
          <Link href="/world">
            <p className="text-xs font-semibold capitalize underline-offset-1">
              world
            </p>
          </Link>
          <span className="text-sm font-semibold capitalize text-white mx-1">
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.1912 0.154081C0.0687752 0.252768 4.59938e-07 0.3866 4.53839e-07 0.526144C4.47739e-07 0.665688 0.0687751 0.79952 0.1912 0.898207L3.42372 3.50318L0.1912 6.10815C0.0722444 6.2074 0.00642224 6.34033 0.00791045 6.47832C0.00939817 6.6163 0.078077 6.74829 0.199155 6.84586C0.320232 6.94344 0.484021 6.99878 0.655245 6.99998C0.826468 7.00118 0.991426 6.94814 1.11459 6.85227L4.8088 3.87524C4.93123 3.77655 5 3.64272 5 3.50318C5 3.36363 4.93123 3.2298 4.8088 3.13111L1.11459 0.154081C0.992127 0.0554227 0.826056 -1.82449e-07 0.652894 -1.90018e-07C0.479733 -1.97587e-07 0.313662 0.0554227 0.1912 0.154081Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-xs font-semibold capitalize text-white">
            Eco System
          </span>
        </div>
      </StyledLoreBreadCrumbWrapper>
      <StyledEcoSystemNav>
        {NAV_ITEMS.map((nav) => (
          <Link key={nav.id} href={`/world/eco-system`}>
            <button
              className={`text-sm xl:text-base capitalize ${
                activeTab === nav.id ? "active text-red-e11" : "text-white"
              }`}
              onClick={() => setActiveTab(nav.id)}
            >
              <p className="">{nav.title}</p>
            </button>
          </Link>
        ))}
      </StyledEcoSystemNav>
      {getStoryContent(activeTab)}
    </main>
  );
};

export default EcoSystemModule;
