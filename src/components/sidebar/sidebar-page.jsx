import React from "react";
import "./sidebar.styles.scss";
import Sidebar from "./sidebar";
import Hamburger from "./hamburger";

const SidebarPage = () => {
  return (
    <div>
      <Hamburger />
      <Sidebar />
    </div>
  );
};

export default SidebarPage;
