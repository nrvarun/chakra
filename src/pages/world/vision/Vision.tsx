import CustomHead from "@components/CustomHead";
import Header from "@components/Header";

import VisionModule from "modules/VisionModule";

export default function Vision() {
  return (
    <>
      <CustomHead />
      <Header customClass="white" />
      <VisionModule />
    </>
  );
}
