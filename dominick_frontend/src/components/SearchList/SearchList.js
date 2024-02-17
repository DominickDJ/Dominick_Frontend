import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./SearchList.css";

const SearchList = ({ searchItems }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleJumpToTop = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const handleShowMore = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 3;
      if (newIndex > startIndex) {
        handleJumpToTop();
      }
      return newIndex;
    });
  };

  const handleGoBack = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      if (newIndex < 0) {
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <section className="list__section" id="listSection">
      <div className="list__items">
        {startIndex > 0 && (
          <button className="previous__button" onClick={handleGoBack}>
            Previous page
          </button>
        )}
        {searchItems.articles.length > 0 ? (
          searchItems.articles
            .slice(startIndex, startIndex + 3)
            .map((item, key) => <ItemCard key={key} item={item} />)
        ) : (
          <h1 className="nothing__found">Nothing Found</h1>
        )}
        {searchItems.articles.length > startIndex + 3 && (
          <button className="list__button" onClick={handleShowMore}>
            Show more articles
          </button>
        )}
      </div>
    </section>
  );
};

export default SearchList;
