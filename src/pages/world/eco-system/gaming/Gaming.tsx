import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import EcoLayout from "Layouts/EcoLayout";
import GamingModule from "modules/EcoSystemModule/GamingModule";

type Props = {};

const Gaming = (props: Props) => {
  return (
    <>
      <CustomHead />
      <Header customClass="red with-underline bg-black" />
      <EcoLayout>
        <GamingModule />
      </EcoLayout>
    </>
  );
};

export default Gaming;
