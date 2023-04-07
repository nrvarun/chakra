import type { AppProps } from "next/app";

import "../styles/globals.css";
import { GlobalStyle } from "../styles/GlobalStyles";
import { useWindowSize } from "react-use";
import MobileBanner from "@components/MobileBanner";

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize();

  return (
    <>
      <GlobalStyle />
      {width > 1280 ? (
        <Component {...pageProps} />
      ) : (
        <MobileBanner {...pageProps} />
      )}
    </>
  );
}
