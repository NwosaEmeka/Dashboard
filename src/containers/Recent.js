import React from 'react'

function Recent({ data }) {
  const orders = data?.map((order) => {
    return <div key={order.id} className="orders__items">
      <div className="order__info">
        <div className="image__container bd-1">
          <img src={order.image} alt={order.name}/>
        </div>
        <div className="order__text">
          <p className="order__text--lg">{order.name}</p>
          <p className="order__text--sm">{order.text}</p>
        </div>
      </div>
      <p className="order__price icon_green">{order.price}</p>
    </div>
  })
  return (
    <div className="chart__container mt pd-3">
      <p className="card__title">Recent Orders</p>
      {orders}
    </div>
  )
}

export default Recent
