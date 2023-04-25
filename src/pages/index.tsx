// import { Inter } from "next/font/google";

import CustomHead from "@components/CustomHead";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomeModule from "modules/HomeModule";
import PageLoadAnim from "modules/PageLoadAnim";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Home() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

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
      <HomeModule />
      <Footer />
    </>
  );
}
