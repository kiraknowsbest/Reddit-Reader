import React from 'react';
import Subscriptions from './subs';

const Header = props => (
  <div className='header'>
    <img className="header-image" src="./main.png"/>
    <div className='header-title'>
      Reddit Reader
    </div>
    <Subscriptions normal={props.normal} click={props.click}/>
  </div>
);

export default Header;