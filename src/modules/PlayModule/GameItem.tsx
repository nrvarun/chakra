import React from "react";
import {
  StyledGameItemCTA,
  StyledGameItemCategory,
  StyledGameItemDemoCTA,
  StyledGameItemSubHeading,
  StyledGameItemTitle,
  StyledGameItemWrapper,
} from "./play.style";

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
            free demo{" "}
            <span className="ml-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.625" cy="8.625" r="8.625" fill="white" />
                <path
                  d="M12.3212 9.03683L6.16045 12.5937L6.16045 5.47994L12.3212 9.03683Z"
                  fill="#010101"
                />
              </svg>
            </span>
          </StyledGameItemDemoCTA>
        </div>
      </div>
      <StyledGameItemSubHeading>{subHeading}</StyledGameItemSubHeading>
      <div className="mt-6">
        <StyledGameItemCategory className="mb-2">
          {category}
        </StyledGameItemCategory>
        <StyledGameItemCTA className="font-marco">Play</StyledGameItemCTA>
      </div>
    </StyledGameItemWrapper>
  );
};

export default GameItem;
