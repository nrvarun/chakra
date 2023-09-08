import React, { useCallback, useState } from "react";
import {
  StyledQuestFilters,
  StyledQuestHeading,
  StyledQuestLeaderBoardHeader,
  StyledQuestLeaderBoardWrapper,
  StyledQuestListingsWrapper,
  StyledQuestWrapper,
} from "./quest.style";
import QuestItem from "./QuestItem";

type Props = {};

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

const QuestModule = (props: Props) => {
  const [activeFilter, setActiveFilter] = useState(BOARD_FILTERS[0].id);

  const toggleFilter = useCallback((id: string) => {
    setActiveFilter(id);
  }, []);

  return (
    <StyledQuestWrapper>
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
                    className={`${filter.id === activeFilter ? "active" : ""}`}
                  >
                    {filter.title}
                  </button>
                </li>
              ))}
            </StyledQuestFilters>
          </div>
        </StyledQuestLeaderBoardHeader>
      </StyledQuestLeaderBoardWrapper>
      <StyledQuestListingsWrapper>
        <StyledQuestHeading className="mb-6">
          Do Quests, Earn Rewards
        </StyledQuestHeading>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <QuestItem />
          <QuestItem />
          <QuestItem />
          <QuestItem />
        </div>
      </StyledQuestListingsWrapper>
    </StyledQuestWrapper>
  );
};

export default QuestModule;
