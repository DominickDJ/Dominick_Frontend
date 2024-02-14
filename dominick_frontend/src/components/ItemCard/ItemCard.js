import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div>
      <div>
        <img alt={item.name} className="card__image" src={item.imageUrl} />
      </div>
      <div className="card__name card_item">{item.name}</div>
    </div>
  );
};

export default ItemCard;
