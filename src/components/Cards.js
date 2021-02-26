import React from 'react';
import { generateIcon } from '../utilities/IconGenerate';

function Cards(props) {
  const cards = props.data?.map((card) => {
    return <div className={card.style} key={card.id}>
      <p className="card__title">{card.name}</p>
      <p className="card__amount">{card.amount}</p>
      <p className={card.icon_clr}>{generateIcon(card.icon)} <span>{card.percent}</span></p>
    </div>
  })
  return (
    <div className="cards__container">
      {cards}
    </div>
  )
}

export default Cards
