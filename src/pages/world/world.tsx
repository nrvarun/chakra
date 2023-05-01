// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import WorldModule from "modules/WorldModule";

export default function World() {
  return (
    <>
      <CustomHead title="Chakra - The World" />
      <Header customClass="white" />
      <WorldModule />
    </>
  );
}
