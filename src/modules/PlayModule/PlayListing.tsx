import GameItem from "./GameItem";

type Props = {};

const GAMES = [
  {
    id: 1,
    imgUrl: "/images/play/ascension.png",
    title: "Chakra Ascension",
    subHeading: "3D ARPG Hack & Slash",
    category: "pc + epic games",
    link: "",
  },
  {
    id: 2,
    imgUrl: "/images/play/conundrum.png",
    title: "Chakra Conundrum",
    subHeading: "Simultaneous Coordination Game",
    category: "PC // Browser",
    link: "",
  },
  {
    id: 3,
    imgUrl: "/images/play/clash.png",
    title: "Chakra Clash",
    subHeading: "Simultaneous Coordination Game",
    category: "PC // Browser",
    link: "",
  },
];

const PlayListing = (props: Props) => {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 px-8 xl:px-12 gap-8 xl:gap-12 py-16">
      {GAMES.map((game) => (
        <GameItem key={game.id} {...game} />
      ))}
    </section>
  );
};

export default PlayListing;
