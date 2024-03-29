import Navigation from "../Navigation/Navigation";
import SearchList from "../SearchList/SearchList";
import React from "react";

export default function Main({ onSearch, searchItems }) {
  return (
    <main className="main">
      <section>
        <Navigation onSearch={onSearch} />
        {searchItems?.articles && <SearchList searchItems={searchItems} />}
      </section>
    </main>
  );
}
