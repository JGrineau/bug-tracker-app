import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const MainMenu = () => {
  return (
    <>
      <nav>
        <Link to="/">Board</Link>
        <Link to="/add">Add New Bug</Link>
        <Link to="/help">Issues</Link>
      </nav>
    </>
  );
};

export default MainMenu;
