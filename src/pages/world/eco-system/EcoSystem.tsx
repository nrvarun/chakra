import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import EcoSystemModule from "modules/EcoSystemModule";
import { useState } from "react";

export default function EcoSystem() {
  const [isFaction, setFaction] = useState(false);

  const toggleFaction = (flag: boolean) => {
    setFaction(flag);
  };

  return (
    <>
      <CustomHead />
      <Header customClass="red with-underline bg-black" />
      <EcoSystemModule handleFactionChange={toggleFaction} />
    </>
  );
}
