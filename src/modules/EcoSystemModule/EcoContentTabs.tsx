import React, { useState } from "react";
import {
  StyledEcoTabsContent,
  StyledEcoTabsNav,
  StyledEcoTabsWrapper,
} from "./ecotabs.style";

type Tab = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
};

const EcoContentTabs = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StyledEcoTabsWrapper>
      <StyledEcoTabsNav className="mb-4 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`${
              activeTab === tab.id
                ? "opacity-100 no-underline active"
                : "opacity-50 no-underline"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </StyledEcoTabsNav>
      <StyledEcoTabsContent>
        {tabs.map((tab) => (
          <article
            key={tab.id}
            id={tab.id}
            className={`pt-3 ${
              activeTab === tab.id ? "opacity-100 block" : "opacity-0 hidden"
            } transition`}
          >
            {activeTab === tab.id && tab.content}
          </article>
        ))}
      </StyledEcoTabsContent>
    </StyledEcoTabsWrapper>
  );
};

export default EcoContentTabs;
