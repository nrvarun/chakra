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
      <Link href={path}>
        <StyledWorldImgWrapper>
          <Image priority fill src={img} alt={title} />
        </StyledWorldImgWrapper>
        <StyledWorldContent>
          <h3 className="font-marco">{title}</h3>
          <div>
            <p className="mb-8 font-medium font-inter">{desc}</p>
            <p className="text-md text-white capitalize py-2 font-semibold font-inter">
              explore
            </p>
          </div>
        </StyledWorldContent>
      </Link>
    </StyledWorld>
  );
};

export default WorldItem;
