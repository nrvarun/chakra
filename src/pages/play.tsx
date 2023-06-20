// import { Inter } from "next/font/google";

import CustomHead from "@components/CustomHead";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PageLoadAnim from "modules/PageLoadAnim";

import PlayModule from "modules/PlayModule";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Play() {
  const pathname = usePathname();

  const isHome = pathname === "/play";

  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <>
      {isLoading && <PageLoadAnim />}
      <CustomHead />
      <Header customClass="red bg-black" />
      <PlayModule />
      {/* <Footer /> */}
    </>
  );
}
