// import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import CustomHead from "@components/CustomHead";
import Footer from "@components/Footer";
import Header from "@components/Header";

import LitePaperModule from "modules/LitePaperModule";
import PageLoadAnim from "modules/PageLoadAnim";

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
      <Header customClass="white" />
      <LitePaperModule />
      <Footer />
    </>
  );
}
