// import { Inter } from "next/font/google";

import CustomHead from "@components/CustomHead";
import Footer from "@components/Footer";
import Header from "@components/Header";

import PlayModule from "modules/PlayModule";

export default function Play() {
  return (
    <>
      <CustomHead />
      <Header customClass="red bg-black" />
      <PlayModule />
      {/* <Footer /> */}
    </>
  );
}
