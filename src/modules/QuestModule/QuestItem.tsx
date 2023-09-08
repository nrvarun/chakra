import React from "react";
import { StyledQuestItem, StyledQuestItemContent } from "./quest.style";

type Props = {};

const QuestItem = (props: Props) => {
  return (
    <StyledQuestItem>
      <img src="/images/quest/1.png" alt="quest" />
      <StyledQuestItemContent>
        <h4>Quest Title</h4>
        <p>Quest Description Description Quest Description Description </p>
        <p className="reward">Rewards</p>
      </StyledQuestItemContent>
      <button>Start Quest</button>
    </StyledQuestItem>
  );
};

export default QuestItem;
