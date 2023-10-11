import React, { useCallback, useState } from "react";
import {
  StyledFactionContent,
  StyledFactionMobileWrapper,
  StyledFactionNavWrapper,
  StyledFactionsBottomPattern,
  StyledFactionsContent,
  StyledFactionsWrapper,
} from "./factions.style";

import { StyledWorldNavList } from "@components/WorldNav/worldnav.style";
import { useWindowSize } from "react-use";
import FactionView from "./FactionView";
import FactionMobileView from "./FactionMobileView";
import FactionMobileNav from "./FactionMobileNav";

type Props = {};

export const FACTION_NAV_LIST = [
  {
    id: "deva",
    title: "Devas",
    desc: (
      <>
        <p>
          Devas, celestial beings of light Inhabiting realms beyond mortal sight
          Bright, radiant, and full of power associated with natural forces that
          tower.
        </p>
        <p>
          From the sun, to the moon, and the stars above Devas bring blessings,
          and fill us with love Invoked in rituals, and prayers said with care
          Devas bring guidance, and banish despair.
        </p>
        <p>
          Indra, king of devas, and god of war Agni, god of fire, burning bright
          and more Surya, god of the sun, lighting the way Devas, forever
          present, every single day Benevolent and protective, they watch from
          above Devas, divine beings of infinite love.
        </p>
      </>
    ),
  },
  {
    id: "naga",
    title: "Nagas",
    desc: (
      <>
        <p>
          The Nagas, serpentine beings of power Guardians of hidden treasures,
          hour by hour Their scales gleam in the sunlight, a sight to behold
          Their magic and wisdom, a story yet untold.
        </p>
        <p>
          In Hindu myths they are protectors of the land In Buddhist tales they
          guard the Buddha{`'`}s hand Their wisdom and strength, a force to be
          reckoned Their presence, a blessing, a gift unbegotten.
        </p>
        <p>
          Nagas of the underworld, masters of the deep Their secrets and
          stories, secrets we{`'`}ll keep For they are the protectors, the
          guardians of life Their magic and wonder, a source of delight. So let
          us honor the Nagas, these serpentine beings of might For their magic
          and power, a sight that{`'`}s a delight.
        </p>
      </>
    ),
  },
  {
    id: "shakti",
    title: "shakti",
    desc: (
      <>
        <p>
          Shakti, the goddess of divine power She who brings life, fertility,
          and creativity She who animates the universe The source of all
          strength and protection.
        </p>
        <p>
          With her fierce warrior spirit, she fights Defending the innocent and
          destroying the wicked Her energy is boundless, her determination
          unwavering She is the embodiment of pure will.
        </p>
        <p>
          In her manifestation as Durga, Kali, and Lakshmi She embodies the
          forces of nature, the cycles of life She is the bringer of abundance
          and prosperity The giver of blessings and blessings to all. Shakti,
          the goddess of divine energy She who fills our hearts with hope and
          courage She who guides us on the path to enlightenment We honor and
          praise you, goddess of Shakti.
        </p>
      </>
    ),
  },
  {
    id: "apsara",
    title: "apsara",
    desc: (
      <>
        <p>
          An Apsara so fair and so fine Dancing in the air with a step so divine
          Her beauty is unmatched, her grace is so rare She is the celestial
          dancer, beyond compare.
        </p>
        <p>
          She is the daughter of Indra, the king of the gods Her movements are
          light as a feather on the sod She dances through the heavens, her
          beauty on display An Apsara so fair, she takes our breath away.
        </p>
        <p>
          Her long flowing hair and her sparkling eyes Her slender figure that
          never tells lies She is the embodiment of youth and desire An Apsara
          so fair, she sets hearts on fire.
        </p>
        <p>
          So let us praise this celestial being Whose beauty and grace are
          beyond any human being May she bless us with her divine touch And fill
          our hearts with love and such
        </p>
      </>
    ),
  },
  {
    id: "kimpurusha",
    title: "kimpurusha",
    desc: (
      <>
        <p>
          The Kimpurushas are creatures of great charm With bodies of humans and
          heads of a Tiger,bear, and parrot, Their grace and their beauty would
          put us to shame, Their music and dance a sight to endorse.
        </p>
        <p>
          They roam through the forests and valleys so green, Their wings spread
          wide as they take to the sky, Their kindness and compassion are things
          to be seen, Their wisdom and knowledge, a treasure that{`'`}s high.
        </p>
        <p>
          The Kimpurushas are beings of great renown, Their beauty and strength
          a sight to behold, Their music and dance will lift your spirits up,
          Their kindness and compassion a story to be told.
        </p>
        <p>
          So let us all praise the kimpurushas divine, For their beauty and
          grace, their wisdom and might, May they bring us blessings and joy all
          the time, And guide us through life with their guiding light.
        </p>
      </>
    ),
  },
  {
    id: "daitya",
    title: "daitya",
    desc: (
      <>
        <p>
          Daityas, creatures of myth and lore, Born of Diti, with powers
          supreme. In battles fierce, they wage war with gods, Their strength
          and cunning, a force to be seen.
        </p>
        <p>
          With powers great, they roam the earth, Their deeds both good and evil
          known. Some serve the gods, while others fight, Their allegiances,
          forever prone. But though they may cause fear and dread, Daityas are
          more than mere demons. For in the tales of Hindu myth, They play a
          role that is quite seminal.
        </p>
        <p>
          So let us honor these beings grand, Who grace the tales of ancient
          lore. For daityas, though sometimes feared, Are a vital part of Hindu
          folklore.
        </p>
      </>
    ),
  },
  {
    id: "asura",
    title: "asura",
    desc: (
      <>
        <p>
          Asuras, divine beings of pride and power Anger and jealousy consume
          their every hour They are consumed by their own ego and desire Their
          battles with the gods never seem to tire.
        </p>
        <p>
          With their fierce strength and relentless might They wage war in the
          heavens day and night But the gods, they are wise and pure Their love
          and compassion endure.
        </p>
        <p>
          The asuras, they cannot comprehend The true power of love, they cannot
          comprehend Their rage and envy lead them astray But the gods, they
          show them the way.
        </p>
        <p>
          So let us not be like the asuras of old Let us seek love, let our
          hearts unfold For in love and compassion, true strength lies And we
          too can reach the heavens, where truth flies
        </p>
      </>
    ),
  },
  {
    id: "vanara",
    title: "vanara",
    desc: (
      <>
        <p>
          Vanara, the half-man, half-monkey kind, Agile and strong, with an
          agile mind. Intelligent and skilled, they roamed the land, Performing
          feats of strength with their agile hands. In the ancient tales of
          Hindu lore, They played a vital role, and so much more. In the
          Ramayana, they fought with might, To help the prince Rama win the
          fight.
        </p>
        <p>
          Their leader, Hanuman, was brave and true, An embodiment of devotion,
          through and through. He risked his life to save his friend, And in the
          end, their love did never end.
        </p>
        <p>
          So let us sing the praises of the vanara race, Who helped to save a
          kingdom and a prince{`'`}s face. Agile and strong, with hearts full of
          love, They are a noble people, sent from above.
        </p>
      </>
    ),
  },
  {
    id: "kimpurusha-tiger",
    title: "kimpurusha [Tiger]",

    desc: (
      <>
        <p>
          Devas, celestial beings of light Inhabiting realms beyond mortal sight
          Bright, radiant, and full of power associated with natural forces that
          tower.
        </p>
        <p>
          From the sun, to the moon, and the stars above Devas bring blessings,
          and fill us with love Invoked in rituals, and prayers said with care
          Devas bring guidance, and banish despair.
        </p>
        <p>
          Indra, king of devas, and god of war Agni, god of fire, burning bright
          and more Surya, god of the sun, lighting the way Devas, forever
          present, every single day Benevolent and protective, they watch from
          above Devas, divine beings of infinite love.
        </p>
      </>
    ),
  },
  {
    id: "garuda",
    title: "garuda",

    desc: (
      <>
        <p>
          The descendants of Garuda, A noble line of birds, With wings of fire
          and hearts of gold, They carry on the legacy of their lord. From mount
          Meru they take flight, To the realms of gods and men, Their noble
          hearts and fierce resolve, A sight to see and marvel at.
        </p>
        <p>
          With talons sharp and beaks of steel, They defend the righteous and
          the just, Their loyalty and honor unyielding, Their honor never to be
          lost.
        </p>
        <p>
          So let us sing their praises loud, And honor the descendants of
          Garuda, For they are the guardians of the skies, Their strength and
          courage ever true.
        </p>
      </>
    ),
  },
  {
    id: "rakshasa",
    title: "rakshasa",
    desc: (
      <>
        <p>
          Rakshasha, the demon of the night Creature of darkness, filled with
          might With fangs and claws and glowing eyes You haunt the shadows, a
          fearsome guise.
        </p>
        <p>
          Your power is great, your rage intense You bring fear to those who
          dare to make sense Of the darkness that surrounds you and your kind
          You are a force that leaves all else behind.
        </p>
        <p>
          But even demons can be overcome By the strength of those who stand as
          one With courage in their hearts and faith in their soul They stand
          against you, and make you whole.
        </p>
        <p>
          So beware, Rakshasha, demon of the night For even the strongest may
          meet their plight Against those who stand for what is right And banish
          you back to the endless night.
        </p>
      </>
    ),
  },
  {
    id: "danava",
    title: "danava",
    desc: (
      <>
        <p>
          Daityas, creatures of myth and lore, Born of Diti, with powers
          supreme. In battles fierce, they wage war with gods, Their strength
          and cunning, a force to be seen.
        </p>
        <p>
          With powers great, they roam the earth, Their deeds both good and evil
          known. Some serve the gods, while others fight, Their allegiances,
          forever prone. But though they may cause fear and dread, Daityas are
          more than mere demons. For in the tales of Hindu myth, They play a
          role that is quite seminal.
        </p>
        <p>
          So let us honor these beings grand, Who grace the tales of ancient
          lore. For daityas, though sometimes feared, Are a vital part of Hindu
          folklore.
        </p>
      </>
    ),
  },
  {
    id: "yaksha",
    title: "yaksha",
    desc: (
      <>
        <p>
          Yakshas, guardians of the earth{`'`}s treasure Associated with Kubera,
          the god of wealth With a great sense of smell and the ability to
          transform Into various forms, they roam the land.
        </p>
        <p>
          With a humanoid body and animalistic features Like the head of a lion
          or an elephant They are connected to nature and the forest Roaming
          free, with power and strength.
        </p>
        <p>
          But beware, for Yakshas are also known As demons and genies, causing
          fear and dread To those who cross their path.
        </p>
        <p>
          So if you happen to meet a Yaksha on your journey Be respectful and
          cautious, and they may just Grant you a wish or two.
        </p>
        <p>
          But if you dare to anger them, be prepared For the consequences of
          their wrath.
        </p>
        <p>
          Yakshas, mysterious beings of myth and legend Their stories told
          through the ages, forever etched Into the annals of time.
        </p>
      </>
    ),
  },
  {
    id: "ugradeva",
    title: "ugradeva",
    desc: (
      <>
        <p>
          Devas, celestial beings of light Inhabiting realms beyond mortal sight
          Bright, radiant, and full of power associated with natural forces that
          tower.
        </p>
        <p>
          From the sun, to the moon, and the stars above Devas bring blessings,
          and fill us with love Invoked in rituals, and prayers said with care
          Devas bring guidance, and banish despair.
        </p>
        <p>
          Indra, king of devas, and god of war Agni, god of fire, burning bright
          and more Surya, god of the sun, lighting the way Devas, forever
          present, every single day Benevolent and protective, they watch from
          above Devas, divine beings of infinite love.
        </p>
      </>
    ),
  },
  {
    id: "kimpurusha-parrot",
    title: "kimpurusha [Parrot]",
    desc: (
      <>
        <p>
          Devas, celestial beings of light Inhabiting realms beyond mortal sight
          Bright, radiant, and full of power associated with natural forces that
          tower.
        </p>
        <p>
          From the sun, to the moon, and the stars above Devas bring blessings,
          and fill us with love Invoked in rituals, and prayers said with care
          Devas bring guidance, and banish despair.
        </p>
        <p>
          Indra, king of devas, and god of war Agni, god of fire, burning bright
          and more Surya, god of the sun, lighting the way Devas, forever
          present, every single day Benevolent and protective, they watch from
          above Devas, divine beings of infinite love.
        </p>
      </>
    ),
  },
];

const Factions = (props: Props) => {
  const [activeSection, setActiveSection] = useState(FACTION_NAV_LIST[0].id);

  const toggleActiveFaction = useCallback((id: string) => {
    setActiveSection(id);
  }, []);
  const { width } = useWindowSize();

  return (
    <StyledFactionsWrapper>
      {width > 1200 && (
        <StyledFactionNavWrapper>
          <StyledWorldNavList className="mx-auto mt-24">
            <ul>
              {FACTION_NAV_LIST.map((nav, index) => (
                <li key={nav.id}>
                  <button
                    onClick={() => toggleActiveFaction(nav.id)}
                    className={`font-inter capitalize inline-block ${
                      activeSection === nav.id ? "active" : ""
                    }`}
                    data-id={nav.id}
                  >
                    {nav.title}
                  </button>
                </li>
              ))}
            </ul>
          </StyledWorldNavList>
        </StyledFactionNavWrapper>
      )}
      <StyledFactionsContent>
        <div className="container mx-auto h-full relative">
          {FACTION_NAV_LIST.map((faction) => (
            <>
              {width > 1200 ? (
                <FactionView activeSection={activeSection} faction={faction} />
              ) : (
                <StyledFactionMobileWrapper id={faction.id}>
                  <FactionMobileView faction={faction} />
                </StyledFactionMobileWrapper>
              )}
            </>
          ))}
        </div>
        {width > 1200 && (
          <StyledFactionsBottomPattern
            className=""
            src="/images/factions-pattern.png"
            alt="factions pattern"
          />
        )}
      </StyledFactionsContent>
      {width < 1200 && <FactionMobileNav />}
    </StyledFactionsWrapper>
  );
};

export default Factions;
