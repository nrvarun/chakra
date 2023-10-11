/* eslint-disable @next/next/no-page-custom-font */
import { FACTION_NAV_LIST } from "modules/LoreModule/Factions/Factions";
import Head from "next/head";

type Props = {
  title?: string;
  bannerImg?: string;
};

const CustomHead = ({
  title = "Chakra",
  bannerImg = "https://www.chakra.world/images/ogg/banner.png",
}: Props) => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
      {title && title.toLowerCase().includes("lore") && (
        <>
          {FACTION_NAV_LIST.map((faction) => (
            <link
              rel="prefetch"
              href={`/images/factions/${faction.id}.gif`}
              key={faction.id}
            />
          ))}
        </>
      )}
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Chakra" />

      <meta
        name="twitter:description"
        content="Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]."
      />
      <meta
        name="description"
        content="Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]."
      />
      <meta property="og:title" content="Chakra" />
      <meta
        property="og:description"
        content="Chakra is a dynamic, ever expanding IP anchored in eastern mythologies that mimics natural evolution of human mythos and culture. Chakra seeks to speedrun millennia-long mythmaking by bringing it to life within a high-fidelity sandbox by leveraging mix media (Gaming, Cinematics & Comics) & web3 tech- [DeFi & NFTs]."
      />
      <meta property="og:image" content={bannerImg} />
      <meta name="twitter:image:src" content={bannerImg} />
      <meta name="twitter:image" content={bannerImg} />
    </Head>
  );
};

export default CustomHead;
