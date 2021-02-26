import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';

function Hero(props) {
  return (
    <div className="hero__container">
      <Header />
      <Cards data={ props.data }/>
    </div>
  )
}

export default Hero
