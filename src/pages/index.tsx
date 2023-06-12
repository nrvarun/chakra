// import { Inter } from "next/font/google";

import CustomHead from "@components/CustomHead";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomeModule from "modules/HomeModule";
import HomeMobile from "modules/HomeModule/HomeMobile";
import PageLoadAnim from "modules/PageLoadAnim";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Home() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

  const { width } = useWindowSize();

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <>
      {isLoading && <PageLoadAnim />}
      <CustomHead />
      <Header customClass="landing" />
      {width > 1200 ? <HomeModule /> : <HomeMobile />}
      <Footer />
    </>
  );
}
