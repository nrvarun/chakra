import CustomHead from "@components/CustomHead";
import Footer from "@components/Footer";
import Header from "@components/Header";
import CustomErrorModule from "modules/CustomErrorModule";

type Props = {};

const Error404 = (props: Props) => {
  return (
    <>
      <CustomHead />
      <Header customClass="landing" />
      <CustomErrorModule />
      <Footer />
    </>
  );
};

export default Error404;
