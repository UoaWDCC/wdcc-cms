import { useState } from "react";
import logo from "../../resources/logos/primary_white_512.png";
import { useLocation } from "react-router-dom";
import { Container, Logo } from "./NavBar.styled";
import NavItem from "../NavItem";
import FullScreenMenu from "../FullScreenMenu/FullScreenMenu";

const DATA = require("./NavBar.json");
function NavBar({ hasBg }: { hasBg?: boolean }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const listItems: NavItem[] = DATA.navItems.map((navItem: {
    displayName: string;
    link: string;
  }) => (
    {
      displayName: navItem.displayName,
      link: navItem.link,
    }
  ));

  listItems.map((listItem) => {
    const isActive =
      listItem.link === "/"
        ? location.pathname.endsWith("/")
        : location.pathname.includes(listItem.link);
    return {
      isActive,
      ...listItem,
    };
  });

  const getListItems = () => {
    return listItems.map((item) => (
      <li>
        <a
          href={item.link}
          className={
            (item.isActive ? "active" : "") +
            (item.highlight ? " highlight" : "")
          }
        >
          {item.displayName}
        </a>
      </li>
    ));
  };

  const handleStateChange = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Container className={hasBg ? "dark" : ""}>
      <span id="menu" onClick={handleStateChange}>
        <i className="fa-solid fa-bars"></i>
      </span>

      <ul className={"hori-nav"}>{getListItems()}</ul>

      <a href={"/"}>
        <Logo src={logo} alt={"Logo"} />
      </a>

      <FullScreenMenu isOpen={isMenuOpen} toggle={handleStateChange}>
        {getListItems()}
      </FullScreenMenu>
    </Container>
  );
}

export default NavBar;
