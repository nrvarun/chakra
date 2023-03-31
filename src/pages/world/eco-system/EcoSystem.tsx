import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import EcoSystemModule from "modules/EcoSystemModule";

export default function EcoSystem() {
  return (
    <>
      <CustomHead />
      <Header customClass="black-red" />
      <EcoSystemModule />
    </>
  );
}
