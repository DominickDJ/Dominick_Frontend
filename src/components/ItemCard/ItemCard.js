import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <article className="card">
      <div className="image__wrapper">
        <img
          alt={item.source.name}
          className="card__image"
          src={item.urlToImage}
        />
      </div>
      <div className="card__text">
        <h2 className="card__title">{item.title}</h2>
        <p className="card__description">{item.description}</p>
        <p className="card__continue">Continue reading at...</p>
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
    </article>
  );
};

export default ItemCard;
