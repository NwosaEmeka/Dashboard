import React from 'react'

function Customers({ data }) {
  const tableData = data?.map((tdata => {
    return <tr>
      <td className="tdata__name" key="tdata.id">
        <div className="image__container">
          <img src={tdata.image} alt={tdata.name}/>
        </div>
        <p>{tdata.name}</p>
      </td>
      <td>{tdata.order}</td>
      <td><span className={tdata.style}>{tdata.status}</span></td>
      <td>{tdata.created}</td>
      <td>{tdata.total}</td>
    </tr>
  }))
  return (
    <div className="chart__container mt">
      <div className="chart__card">
        <p className="chart__title">Top Customers</p>
        <table id="customer__table">
          <thead>
            <tr>
              <td></td>
              <th>ORDERS</th>
              <th>LAST STATUS</th>
              <th>LAST CREATED</th>
              <th>TOTAL SPENT</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers
