import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const HomeButton = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <div className="header__links">
        <Link to="/">
          <button
            onClick={HomeButton}
            className="header__home-button"
            type="text"
          >
            Home
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
