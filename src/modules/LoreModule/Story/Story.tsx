import {
  StyledLoreContentDesc,
  StyledLoreContentHeading,
  StyledLoreContentSection,
  StyledLoreContentSubHeading,
} from "../lore.style";

type Props = {};

const Story = (props: Props) => {
  return (
    <StyledLoreContentSection>
      <div className="grid grid-cols-[360px_minmax(800px,_1fr)] gap-4">
        <div id="story-section" className="">
          <StyledLoreContentHeading className="font-marco text-white mb-10">
            Story
          </StyledLoreContentHeading>
          <StyledLoreContentSubHeading className="mb-20 text-white ">
            And one fine day, she came out tearing the womb of King Sagara, the
            god of oceans. Her birth was acknowledged by the elements, the
            volcanoes puffed, the oceans swelled and the air ravaged the surface
            of the planet.
          </StyledLoreContentSubHeading>
          <StyledLoreContentDesc className="mb-4 text-gray-c8c">
            In the midst of the Indian ocean, a humongous land mass stares at
            humanity. Ancient legends call it by the name Kumari With ancient
            architecture and temple cities, the new continent Kumari was
            recognized and attributed by various prominent personalities. Some
            claimed it theirs but none dared to explore it yet.
          </StyledLoreContentDesc>
        </div>
        <div>
          <figure>
            <img src="/images/lore/story.png" alt="story" className="w-full" />
          </figure>
        </div>
      </div>
    </StyledLoreContentSection>
  );
};

export default Story;
