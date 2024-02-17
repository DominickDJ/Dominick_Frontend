import About from "../About/About";
import Navigation from "../Navigation/Navigation";
import SearchList from "../SearchList/SearchList";
import React from "react";

export default function Main({ onSearch, searchItems }) {
  console.log(searchItems);
  return (
    <main className="main">
      <section>
        <Navigation onSearch={onSearch} />
        {searchItems?.articles && <SearchList searchItems={searchItems} />}

        <About />
      </section>
    </main>
  );
}
