import React from "react";
import { StyledQuestItem, StyledQuestItemContent } from "./quest.style";
import Link from "next/link";

type Quest = {
  id: number;
  title: string;
  desc: string;
  xp: string;
  img: string;
  questId: string;
};

type Props = {
  quest: Quest;
};

const QuestItem = ({ quest }: Props) => {
  return (
    <Link
      href={`https://zealy.io/c/chakra/questboard/` + quest.questId}
      target="_blank"
      rel="noreferrer noopener"
    >
      <StyledQuestItem>
        <img
          src={quest.img ? quest.img : "/images/quest/1.png"}
          alt={quest.title}
        />
        <StyledQuestItemContent>
          <h4>{quest.title}</h4>
          <p>{quest.desc}</p>
          <p className="reward">{quest.xp} XP</p>
        </StyledQuestItemContent>
        <button>Start Quest</button>
      </StyledQuestItem>
    </Link>
  );
};

export default QuestItem;
