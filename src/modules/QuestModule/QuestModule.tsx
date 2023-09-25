import React, { useCallback, useEffect, useState } from "react";
import {
  StyledQuestBody,
  StyledQuestContentWrapper,
  StyledQuestFilters,
  StyledQuestHeading,
  StyledQuestLeaderBoardHeader,
  StyledQuestLeaderBoardWrapper,
  StyledQuestListingsWrapper,
  StyledQuestTable,
  StyledQuestWrapper,
} from "./quest.style";
import QuestItem from "./QuestItem";

type Props = {
  listing: any;
};

const BOARD_FILTERS = [
  {
    id: "24",
    title: "24hr",
  },
  {
    id: "7",
    title: "7d",
  },
  {
    id: "1",
    title: "1m",
  },
  {
    id: "all-time",
    title: "all time",
  },
];

const QUESTS_LISTING = [
  {
    id: 1,
    title: "Daily Connect",
    desc: "Boost your Chakra XP daily!",
    xp: "10",
    img: "/images/quest/daily.png",
    questId: "81fc3ce0-5fa9-47cf-9399-b8411170bc92",
  },
  {
    id: 2,
    title: "Visit this Link",
    desc: "Unleash ancient myths and unlock the ultimate power!",
    xp: "10",
    img: "/images/quest/link.png",
    questId: "7aec2d6b-2a5f-4b70-9f17-d271ca0a4d3a",
  },
  {
    id: 3,
    title: "Newsletter Subscriber",
    desc: "Subscribe to our newsletter guide. ",
    xp: "10",
    questId: "083e375c-a769-42aa-ba1b-29f9d780389b",
    img: "/images/quest/news.png",
  },
  {
    id: 4,
    title: "Follow Chakra",
    desc: "Chase the mythos with every tweet! Follow us on X",
    xp: "10",
    questId: "6006e613-afd2-40b1-9a89-f8e285d475ab",
    img: "/images/quest/follow.png",
  },
  {
    id: 5,
    title: "Join Chakra Discord ",
    desc: "Come and vibe with us on out Discord channel.",
    xp: "10",
    questId: "f166e92d-affe-4987-a443-f319e7279650",
    img: "/images/quest/discord.png",
  },
  {
    id: 6,
    title: "Website Reveal",
    desc: "Gateway to the Mythos: Launching the  All-New Chakra Universe Website!",
    xp: "10",
    questId: "9a49bd04-4f91-4ffe-9501-80d15a7c7946",
    img: "/images/quest/web.png",
  },
  {
    id: 7,
    title: "Pinned Tweet",
    desc: "Chase the mythos with every tweet! Follow us on X",
    xp: "10",
    questId: "40548a4a-f6c8-4e5f-bced-13a682737ac7",
    img: "/images/quest/tweet.png",
  },
  {
    id: 8,
    title: "World Page Reveal",
    desc: "Step into the Unknown:The Grand Unveiling of Chakra’s Mystical World!",
    xp: "10",
    questId: "db1853db-fd4c-4726-b1f4-19fef52573dc",
    img: "/images/quest/world.png",
  },
];

const QuestModule = ({ listing }: Props) => {
  const [activeFilter, setActiveFilter] = useState(BOARD_FILTERS[0].id);

  const toggleFilter = useCallback((id: string) => {
    setActiveFilter(id);
  }, []);

  return (
    <StyledQuestWrapper>
      <StyledQuestContentWrapper className="max-w-[1440px] mx-auto">
        <div>
          <StyledQuestLeaderBoardWrapper>
            <StyledQuestLeaderBoardHeader>
              <div>
                <StyledQuestHeading>Leaderboard</StyledQuestHeading>
              </div>
              <div>
                {/* <StyledQuestFilters>
                {BOARD_FILTERS.map((filter) => (
                  <li key={filter.id} className="mr-4">
                    <button
                      onClick={() => toggleFilter(filter.id)}
                      className={`${
                        filter.id === activeFilter ? "active" : ""
                      }`}
                    >
                      {filter.title}
                    </button>
                  </li>
                ))}
              </StyledQuestFilters> */}
              </div>
            </StyledQuestLeaderBoardHeader>
            <StyledQuestBody>
              <StyledQuestTable>
                <thead>
                  <tr className="p-3 bg-[#33383F]">
                    <td className="rank">Rank</td>
                    <td className="name">Name</td>
                    <td className="wallet">Wallet ID</td>
                    <td className="score">Total Score</td>
                  </tr>
                </thead>
                <tbody>
                  {listing.leaderboard &&
                    listing.leaderboard.length &&
                    listing.leaderboard.map((entry, index) => (
                      <tr key={entry.userId}>
                        <td className="rank">{`${
                          index + 1 >= 9 ? index + 1 : `0${index + 1}`
                        }`}</td>
                        <td className="name">{entry.name}</td>
                        <td className="wallet">
                          <span title={entry.address}>{entry.address}</span>
                        </td>
                        <td className="score">{entry.xp}</td>
                      </tr>
                    ))}
                </tbody>
              </StyledQuestTable>
            </StyledQuestBody>
          </StyledQuestLeaderBoardWrapper>
        </div>
        <StyledQuestListingsWrapper className="mt-10 xl:mt-0">
          <StyledQuestHeading className="mb-6">
            Do Quests, Earn Rewards
          </StyledQuestHeading>
          <div className="grid xl:grid-cols-2 gap-x-4 gap-y-6">
            {QUESTS_LISTING.map((quest) => (
              <QuestItem key={quest.id} quest={quest} />
            ))}
          </div>
        </StyledQuestListingsWrapper>
      </StyledQuestContentWrapper>
    </StyledQuestWrapper>
  );
};

export default QuestModule;
