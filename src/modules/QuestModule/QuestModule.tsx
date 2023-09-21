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

const QuestModule = ({ listing }: Props) => {
  const [activeFilter, setActiveFilter] = useState(BOARD_FILTERS[0].id);

  const toggleFilter = useCallback((id: string) => {
    setActiveFilter(id);
  }, []);

  return (
    <StyledQuestWrapper>
      <StyledQuestContentWrapper className="max-w-[1440px] mx-auto">
        <StyledQuestLeaderBoardWrapper>
          <StyledQuestLeaderBoardHeader>
            <div>
              <StyledQuestHeading>Leaderboard</StyledQuestHeading>
            </div>
            <div>
              <StyledQuestFilters>
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
              </StyledQuestFilters>
            </div>
          </StyledQuestLeaderBoardHeader>
          <StyledQuestBody>
            <StyledQuestTable>
              <thead>
                <tr className="grid grid-cols-4 p-3 bg-[#33383F]">
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
        <StyledQuestListingsWrapper className="mt-10 xl:mt-0">
          <StyledQuestHeading className="mb-6">
            Do Quests, Earn Rewards
          </StyledQuestHeading>
          <div className="grid xl:grid-cols-2 gap-x-4 gap-y-6">
            <QuestItem />
            <QuestItem />
            <QuestItem />
            <QuestItem />
          </div>
        </StyledQuestListingsWrapper>
      </StyledQuestContentWrapper>
    </StyledQuestWrapper>
  );
};

export default QuestModule;