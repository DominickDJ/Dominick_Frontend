import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Header.css";

const Header = ({ onCreateModal }) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const renderHeaderContent = () => {
    if (isLoggedIn && currentUser && currentUser.name) {
    } else {
      return (
        <>
          <button
            className="header__button"
            type="text"
            onClick={() => {
              onCreateModal("LoginModal");
            }}
          >
            Sign In
          </button>
          <button
            className="header__button"
            type="text"
            onClick={() => {
              onCreateModal("RegisterModal");
            }}
          >
            Sign Up
          </button>
        </>
      );
    }
  };

  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <div className="header__links">
        <Link to="/">
          <button className="header__home-button" type="text">
            Home
          </button>
        </Link>
        {renderHeaderContent()}
      </div>
    </header>
  );
};

export default Header;
