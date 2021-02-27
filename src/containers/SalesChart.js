import React from 'react';
import { Line } from 'react-chartjs-2';

function SalesChart({ data }) {
  
    const chatData = {
      labels: data?.sales,
      datasets: [
        {
          label: "",
          backgroundColor: 'rgba(255,255,255,1)',
          data: data?.sales,
          borderWidth: 3,
          borderColor: 'rgb(32, 93, 219)',
          pointRadius: 0,
        }
      ]
    }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        display: false,
      }],
      yAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          min: 0,
          max: 40,
          stepSize: 10,
          beginAtzero: true,
          callback: function (value, index, values) {
            return value + 'K';
          }
        }
      }]
    },
    legend: {
      display: false,
    }
  }
  return (
    <div className="chart__container">
      <div className="chart__card">
        <p className="chart__title">Sales in the last 7 days</p>
        <Line
          data={chatData}
          options={options}
          height={200}
        />
      </div>
    </div>
  )
}

export default SalesChart
