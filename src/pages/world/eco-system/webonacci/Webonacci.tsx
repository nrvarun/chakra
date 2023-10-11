import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import EcoLayout from "Layouts/EcoLayout";
import WebModule from "modules/EcoSystemModule/WebModule";
import React from "react";

type Props = {};

const Webonacci = (props: Props) => {
  return (
    <>
      <CustomHead />
      <Header customClass="red with-underline bg-black" />
      <EcoLayout>
        <WebModule />;
      </EcoLayout>
    </>
  );
};

export default Webonacci;
