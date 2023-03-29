import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  StyledWorld,
  StyledWorldContent,
  StyledWorldImgWrapper,
} from "./world.style";

type Props = {
  title: string;
  desc: string;
  img: string;
  path: string;
};

const WorldItem = ({ title, desc, img, path }: Props) => {
  return (
    <StyledWorld>
      <StyledWorldImgWrapper>
        <Image fill src={img} alt={title} />
      </StyledWorldImgWrapper>
      <StyledWorldContent>
        <h3 className="font-marco">{title}</h3>
        <div>
          <p className="mb-8">{desc}</p>
          <Link href={path}>
            <p className="text-md text-white capitalize py-2">explore</p>
          </Link>
        </div>
      </StyledWorldContent>
    </StyledWorld>
  );
};

export default WorldItem;
