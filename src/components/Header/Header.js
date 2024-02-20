import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <div className="header__links">
        <Link to="/">
          <button
            onClick={handleHomeClick}
            className="header__home-button"
            type="text"
          >
            Home
          </button>
        </Link>
        <Link to="/about">
          <button
            onClick={handleAboutClick}
            className="header__home-button"
            type="text"
          >
            About the author
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
