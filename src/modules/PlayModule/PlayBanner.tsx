import Slider from "react-slick";

import BannerItem from "@components/BannerItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledBannerWrapper } from "@components/BannerItem/banner.style";

type Props = {};

const PlayBanner = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <StyledBannerWrapper>
      <Slider {...settings}>
        <div>
          <BannerItem
            title=""
            imgUrl="/images/play/banner/1.png"
            path=""
            hasCTA
          />
        </div>
        <div>
          <BannerItem
            title=""
            imgUrl="/images/play/banner/1.png"
            path=""
            hasCTA
          />
        </div>
        <div>
          <BannerItem
            title=""
            imgUrl="/images/play/banner/1.png"
            path=""
            hasCTA
          />
        </div>
      </Slider>
    </StyledBannerWrapper>
  );
};

export default PlayBanner;
