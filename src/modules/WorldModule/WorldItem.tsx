import Image from "next/image";
import Link from "next/link";

import {
  StyledWorldItem,
  StyledWorldContent,
  StyledWorldImgWrapper,
} from "./world.style";

type Props = {
  title: string;
  desc: string;
  img: string;
  bgPattern?: string;
  path: string;
  isActive: boolean;
};

const WorldItem = ({ title, desc, img, path, bgPattern, isActive }: Props) => {
  return (
    <StyledWorldItem bgPattern={bgPattern}>
      <Link href={path}>
        <StyledWorldContent>
          <div className="world-inner-element">
            <h3 className="font-marco world-inner-element">{title}</h3>
            <p className="xl:mb-8 font-medium font-inter">{desc}</p>
            <p className="text-md text-white capitalize py-2 font-semibold font-inter explore-item">
              {isActive ? (
                <>
                  Explore
                  <span>{`->`}</span>
                </>
              ) : (
                <>Coming soon 🚧</>
              )}
            </p>
          </div>
        </StyledWorldContent>
      </Link>
    </StyledWorldItem>
  );
};

export default WorldItem;
