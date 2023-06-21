import React from "react";
import {
  StyledGameItemCTA,
  StyledGameItemCategory,
  StyledGameItemDemoCTA,
  StyledGameItemSubHeading,
  StyledGameItemTitle,
  StyledGameItemWrapper,
} from "./play.style";
import Link from "next/link";

type Props = {
  imgUrl: string;
  title: string;
  subHeading: string;
  category: string;
  link: string;
};

const GameItem = ({ imgUrl, title, subHeading, category, link }: Props) => {
  return (
    <StyledGameItemWrapper>
      <figure>
        <img src={imgUrl} alt={title} />
      </figure>
      <div className="flex justify-between items-start">
        <div>
          <StyledGameItemTitle className="font-marco">
            {title}
          </StyledGameItemTitle>
        </div>
        <div className="text-right">
          <StyledGameItemDemoCTA className="flex ml-auto">
            demo{" "}
          </StyledGameItemDemoCTA>
        </div>
      </div>
      <StyledGameItemSubHeading>{subHeading}</StyledGameItemSubHeading>
      <div className="mt-6">
        <StyledGameItemCategory className="mb-2">
          {category}
        </StyledGameItemCategory>
        {link.length > 1 ? (
          <Link href={link} target="_blank">
            <StyledGameItemCTA className="font-marco">play</StyledGameItemCTA>
          </Link>
        ) : (
          <StyledGameItemCTA className="font-marco">
            coming soon
          </StyledGameItemCTA>
        )}
      </div>
    </StyledGameItemWrapper>
  );
};

export default GameItem;
