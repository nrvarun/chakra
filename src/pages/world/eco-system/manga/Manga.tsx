import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import EcoLayout from "Layouts/EcoLayout";
import MangaModule from "modules/EcoSystemModule/MangaModule";

type Props = {};

const Manga = (props: Props) => {
  return (
    <>
      <CustomHead />
      <Header customClass="red with-underline bg-black" />
      <EcoLayout>
        <MangaModule />;
      </EcoLayout>
    </>
  );
};

export default Manga;
