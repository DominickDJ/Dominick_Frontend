import React, { useState } from "react";
import "./Navigation.css";

export default function Navigation({ onSearch }) {
  const [search, setSearch] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
    setIsDisabled(inputValue === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      onSearch(search);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search">
      <h1 className="search__title">Search World News</h1>
      <p className="search__paragraph">Find the latest news on any topic!</p>
      <form onSubmit={handleSubmit}>
        <div className="search__buttons">
          <input
            required
            className="search__bar"
            type="text"
            placeholder="Enter location or topic"
            value={search}
            onChange={handleInputChange}
          />
          <button
            className="search__button"
            type="submit"
            disabled={isDisabled}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
