import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import LoreModule from "modules/LoreModule";

export default function Lore() {
  return (
    <>
      <CustomHead />
      <Header customClass="red with-underline" />
      <LoreModule />
    </>
  );
}
