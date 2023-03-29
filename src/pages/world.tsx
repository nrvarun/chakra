// import { Inter } from "next/font/google";

import Header from "@components/Header";
import CustomHead from "@components/CustomHead";

import Footer from "@components/Footer";
import WorldModule from "@modules/WorldModule";

// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function World() {
  return (
    <>
      <CustomHead />
      <Header customClass="black" />
      <WorldModule />
    </>
  );
}
