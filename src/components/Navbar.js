import React from 'react';
import { generateIcon } from '../utilities/IconGenerate';

function Navbar(props) {
 
  const menuItems = props.data?.map((menuItem) => {
    let icon = menuItem.icon;
    return <li key={menuItem.id} className="nav__item">
      <a href="/" className="nav__link">
        {generateIcon(icon)} <span className="nav__link--text">{menuItem.name}</span>
      </a>
    </li>
  })

  return (
    <ul className="nav__items">
      {menuItems}
    </ul>
  )
}

export default Navbar
