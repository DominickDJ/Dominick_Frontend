import About from "../About/About";
import Navigation from "../Navigation/Navigation";
import SearchList from "../SearchList/SearchList";
import React, { useState } from "react";
import { search } from "../../utils/api";

export default function Main({ onSearch }, isLoggedIn) {
  const [searchResults, setSearchResults] = useState([]);

  // const performSearch = async (searchTerm) => {
  //   try {
  //     const data = await search(searchTerm);
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error("Error performing search:", error);
  //   }
  // };

  return (
    <main className="main">
      <section>
        <Navigation onSearch={onSearch} />
        <SearchList items={searchResults} isLoggedIn={isLoggedIn} />
        <About />
      </section>
    </main>
  );
}
