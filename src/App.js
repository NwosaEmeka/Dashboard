import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Menu from './containers/Menu';
import Hero from './containers/Hero';

function App() {
  const [data, setData] = useState({});

  const fetchData = async function () {
    const response = await axios.get('data.json')
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [setData])
  
  return (
    <div className="container">
      <div className="menu">
        <Menu data={data.menu} />
      </div>
      <div className="hero">
        <Hero data={data.cards} />
      </div>
      
    </div>
  );
}

export default App;
