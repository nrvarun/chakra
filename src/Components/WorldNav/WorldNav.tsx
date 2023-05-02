import {
  StyledFactionNav,
  StyledFactionNavList,
} from "modules/LoreModule/lore.style";
import {
  StyledWorldNavHeading,
  StyledWorldNavList,
  StyledWorldNavWrapper,
} from "./worldnav.style";

type NAV_ITEM = {
  title: string;
  id: string;
  subList?: any[];
  hasDropdown?: boolean;
};

type Props = {
  list: NAV_ITEM[];
  title: string;
  activeSection: string;
  customClass?: string;
};

const WorldNav = ({
  title = "Lore",
  list = [],
  activeSection = "premise",
  customClass = "",
}: Props) => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(`${id}-section`);

    console.log(element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <StyledWorldNavWrapper className={customClass}>
      <StyledWorldNavHeading className="font-marco capitalize">
        {title}
      </StyledWorldNavHeading>
      <StyledWorldNavList>
        <ul>
          {list.map((nav, index) => (
            <li key={nav.id}>
              <a
                onClick={() => handleClickScroll(nav.id)}
                href="javascript:void(0);"
                className={`font-inter capitalize inline-block ${
                  activeSection === nav.id ? "active" : ""
                }`}
                data-id={nav.id}
              >
                {nav.title}
              </a>
              <StyledFactionNav>
                <StyledFactionNavList>
                  {nav.subList &&
                    nav.subList.map((faction) => (
                      <li key={faction.id} className={`mb-3 `}>
                        <a
                          href="javascript:void(0);"
                          // className={`${
                          //   activeFaction === faction.id ? "active" : "in-active"
                          // }`}
                          onClick={() => handleClickScroll(faction.id)}
                          data-section-id={faction.id}
                        >
                          {faction.title}
                        </a>
                      </li>
                    ))}
                </StyledFactionNavList>
              </StyledFactionNav>
            </li>
          ))}
        </ul>
      </StyledWorldNavList>
    </StyledWorldNavWrapper>
  );
};

export default WorldNav;
