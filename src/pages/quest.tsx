import CustomHead from "@components/CustomHead";
import Header from "@components/Header";
import QuestModule from "modules/QuestModule";

export default function Quest({ listing }) {
  return (
    <>
      <CustomHead title="Chakra - The Quest" />
      <Header customClass="white bg-black" />
      <main className="bg-black pt-20">
        <QuestModule listing={listing} />
      </main>
    </>
  );
}

export const getStaticProps = async (context) => {
  const API_KEY = process.env.ZEALY_API_KEY;

  if (API_KEY) {
    const res = await fetch(
      "https://api.zealy.io/communities/chakra/leaderboard?limit=100&page=0",
      {
        method: "GET",
        // mode: "no-cors",

        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );

    const listing = await res.json();
    return { props: { listing } };
  }
};
