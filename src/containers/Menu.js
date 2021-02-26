import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar';

function Menu(props) {
  const data = props.data;
  return (
    <nav className="menu__container">
      <Logo />
      <Navbar data={data} />
    </nav>
  )
}

export default Menu
