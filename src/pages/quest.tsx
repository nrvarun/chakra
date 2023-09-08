// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import QuestModule from "modules/QuestModule";

export default function Quest() {
  return (
    <>
      <CustomHead title="Chakra - The Quest" />
      <Header customClass="white" />
      <main className="bg-black pt-20">
        <QuestModule />
      </main>
    </>
  );
}
