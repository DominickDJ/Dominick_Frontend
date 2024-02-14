import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./SearchList.css";

const SearchList = ({ items, isLoggedIn }) => {
  return (
    <section className="list__section" id="listSection">
      <div className="list__items">
        {items.map((item, key) => (
          <ItemCard key={key} item={item} isLoggedIn={isLoggedIn} />
        ))}
      </div>
    </section>
  );
};

export default SearchList;
