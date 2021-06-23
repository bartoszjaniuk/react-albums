import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import "./menu.styles.scss";
import { navigationLinks } from "./sidebar-data";
import { AiOutlineHome } from "react-icons/ai";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png";

const Menu = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.sidebar);
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div>
      <nav className={isOpen ? "nav nav-closed" : "nav"}>
        <button
          onClick={handleToggleSidebar}
          className={`${isOpen ? "hamburger hamburger-active" : "hamburger"}`}
        >
          <div className="span" className="hamburger__container">
            <span className="hamburger__inner"></span>
          </div>
        </button>
        <div className="nav__logo-container">
          <img src={logoUrl} alt="logo" className="nav__logo" />
        </div>
        <ul className="nav__list">
          {navigationLinks.map((navLink) => {
            const { id, url, text, icon } = navLink;
            return (
              <li className="nav__list__item" key={id}>
                <a href={url} className="nav__list__link">
                  {icon}
                  <p className="nav__list__text">{text.toUpperCase()}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
