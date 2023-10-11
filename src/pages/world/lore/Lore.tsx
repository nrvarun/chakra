import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import LoreModule from "modules/LoreModule";
import { useState } from "react";

export default function Lore() {
  const [isFaction, setFaction] = useState(false);

  const toggleFaction = (flag: boolean) => {
    setFaction(flag);
  };

  return (
    <>
      <CustomHead title="Chakra - The Lore" />
      <Header
        customClass={`red with-underline ${
          isFaction ? "bg-black" : "bg-transparent"
        }`}
      />
      <LoreModule handleFactionChange={toggleFaction} />
    </>
  );
}
