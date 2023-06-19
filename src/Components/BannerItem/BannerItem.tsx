import React from "react";

import Link from "next/link";
import { StyledBannerItemWrapper } from "./banner.style";

type Props = {
  imgUrl: string;
  title: string | React.ReactNode;
  path: string;
  hasCTA: boolean;
};

const BannerItem = ({ imgUrl, title, path }: Props) => {
  return (
    <StyledBannerItemWrapper>
      <img src={imgUrl} alt={title} />
      <div className="gradient"></div>
      <aside>
        <h3 className="font-marco text-right">
          FIGHT YOUR BEASTS <br></br>
          <span className="text-white">IN THE CHAKRA WORLD</span>
        </h3>
        <Link href={path}>
          <button className="font-marco uppercase">play now</button>
        </Link>
      </aside>
    </StyledBannerItemWrapper>
  );
};

export default BannerItem;
