import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="card__items">
      <div className="image__wrapper">
        <img
          alt={item.source.name}
          className="card__image"
          src={item.urlToImage}
        />
      </div>
      <div className="card__text">
        <div className="card__title">{item.title}</div>
        <div className="card__description">{item.description}</div>
        <div className="card__continue">Continue reading at...</div>
        <a
          href={item.url}
          className="card__url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.url}
        </a>
      </div>
      <div className="card__author">{item.author}</div>
    </div>
  );
};

export default ItemCard;
