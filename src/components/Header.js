import React from 'react'
import Moment from 'react-moment';

function Header() {
  const now = new Date();
  return (
    <div className="header">
      <div className="header__text">
        <h1 className="header__text--main">Dashboard</h1>
        <p className="header__text--p">
          <Moment format="Do MMMM YYYY">{now}</Moment>
        </p>
      </div>
      <div className="header__profile">
        <p className="header__profile--name">Emeka Nwosa</p>
        <div className="image__container">
          <img src="/assets/mypic.jpg" alt="nwosa emeka"/>
        </div>
      </div>
    </div>
  )
}

export default Header
