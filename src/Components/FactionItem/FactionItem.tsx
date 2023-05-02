import React from "react";
import {
  StyledFactionDetailDesc,
  StyledFactionDetailHeading,
  StyledFactionDetailWrapper,
  StyledFactionStatHeading,
  StyledFactionStatList,
} from "./factionitem.style";

type Props = {
  title: string;
  desc: string;
  img: string;
  stats?: any[];
};

const FactionItem = ({ title, desc, img, stats }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-[360px_minmax(700px,_1fr)] gap-4">
        <div>
          <StyledFactionDetailWrapper>
            <StyledFactionDetailHeading className="font-marco mb-4">
              {title}
            </StyledFactionDetailHeading>
            <StyledFactionDetailDesc>{desc}</StyledFactionDetailDesc>
            <button className="text-red font-inter text-xs mb-6">
              Read More
            </button>
            <StyledFactionStatList>
              <li>
                <StyledFactionStatHeading>STATS</StyledFactionStatHeading>
                <StyledFactionDetailDesc>
                  The demon of the night{" "}
                </StyledFactionDetailDesc>
              </li>
              <li>
                <StyledFactionStatHeading>TRAITS</StyledFactionStatHeading>
                <StyledFactionDetailDesc>
                  The demon of the night
                </StyledFactionDetailDesc>
              </li>
              <li>
                <StyledFactionStatHeading>POWERS</StyledFactionStatHeading>
                <StyledFactionDetailDesc>
                  The demon of the night{" "}
                </StyledFactionDetailDesc>
              </li>
            </StyledFactionStatList>
          </StyledFactionDetailWrapper>
        </div>
        <StyledFactionDetailWrapper>
          <figure>
            <img src={img} alt={title} />
          </figure>
        </StyledFactionDetailWrapper>
      </div>
    </section>
  );
};

export default FactionItem;
