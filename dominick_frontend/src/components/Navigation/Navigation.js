import React, { useState } from "react";
import "./Navigation.css";

export default function Navigation({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(search);
  };

  return (
    <div className="search">
      <h1 className="search__title">Search World News </h1>
      <p className="search__paragraph">Find the latest news on any topic!</p>
      <form onSubmit={handleSubmit}>
        <div className="search__buttons">
          <input
            className="search__bar"
            type="text"
            placeholder="Enter location or topic"
            value={search}
            onChange={handleInputChange}
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
