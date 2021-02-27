import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { generateIcon } from '../utilities/IconGenerate';

function Orders({ data }) {
  const orderD = [];
  const orderLabel = [];
  const monthOrders = data?.map((order) => {
    orderD.push(parseInt(order.amount));
    orderLabel.push(order.name);
    return <div key={order.id} className="orders__items month__orders">
      <p>{order.name}</p>
      <p className="icon_green">{order.amount}%</p>
      <p className={order.icon_clr}>{generateIcon(order.icon)}{order.diff}%</p>
    </div>
  })

  const orderData = {
    labels: orderLabel,
    datasets: [{
      label: "",
      data: orderD,
      borderWidth: 1,
      backgroundColor: [
        'rgb(115, 89, 216)',
        'rgb(190, 170, 239)',
        'rgb(230, 224, 252)'
      ]
    }]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  }
  return (
    <div className="chart__container pd-3">
      <p className="card__title">Orders this month</p>
      <div className="donaught">
        <Doughnut 
        data={orderData}
        options={options}
        width={100}
        height={100}
      />
      </div>
      {monthOrders}
    </div>
  )
}

export default Orders
