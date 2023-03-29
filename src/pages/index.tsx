// import { Inter } from "next/font/google";

import CustomHead from "@components/CustomHead";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomeModule from "modules/HomeModule";

// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Home() {
  return (
    <>
      <CustomHead />
      <Header customClass="landing" />
      <HomeModule />
      <Footer />
    </>
  );
}
