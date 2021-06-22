import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";

const Hamburger = () => {
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <button className="sidebar-hamburger" onClick={handleOpenSidebar}>
      <span className="sidebar-hamburger__container">
        <span className="sidebar-hamburger__inner" />
      </span>
    </button>
  );
};

export default Hamburger;
