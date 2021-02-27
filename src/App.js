import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Menu from './containers/Menu';
import Hero from './containers/Hero';
import SalesChart from './containers/SalesChart';
import Customers from './containers/Customers';
import Recent from './containers/Recent';
import Orders from './containers/Orders';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('data.json')
      .then(res => {
         setData(res.data);
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="container">
      <div className="menu">
        <Menu data={data.menu} />
      </div>
      <div className="hero">
        <Hero data={data.cards} />
        <div className="showcase">
          <div className="main__showcase">
            <SalesChart data={data.chartData} />
            <Customers data={data.customers}/>
          </div>
          <div className="minor__showcase">
            <Orders />
            <Recent />
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
