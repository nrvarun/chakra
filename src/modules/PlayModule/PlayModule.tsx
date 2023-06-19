import React from "react";
import PlayBanner from "./PlayBanner";
import PlayListing from "./PlayListing";

type Props = {};

const PlayModule = (props: Props) => {
  return (
    <main className="pt-16 xl:pt-20 bg-black">
      <PlayBanner />
      <PlayListing />
    </main>
  );
};

export default PlayModule;
