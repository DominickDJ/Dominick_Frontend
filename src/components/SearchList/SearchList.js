import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./SearchList.css";

const SearchList = ({ searchItems }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setStartIndex(0);
    setCurrentPage(1);
  }, [searchItems]);

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
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleGoBack = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      if (newIndex < 0) {
        return 0;
      }
      return newIndex;
    });
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (pageNumber) => {
    setStartIndex((pageNumber - 1) * 3);
    setCurrentPage(pageNumber);
    handleJumpToTop();
  };

  const totalPages = Math.ceil(searchItems.articles.length / 3);
  const pageNumbers = Array.from(Array(totalPages).keys());

  return (
    <section className="list__section" id="listSection">
      <div className="list__border">
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
          <div className="page__numbers">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`page__number ${
                  currentPage === pageNumber + 1 ? "active" : ""
                }`}
                onClick={() => handlePageClick(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchList;
