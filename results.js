import React from 'react';
import Link from './linkClass';

const RedditsWrapper = (props) => (
  <div className="link-wrapper">
    { props.links !== undefined ? props.links.map((link) => (
        <Link key={link.data.id} link={link.data}/>
      )) : null
    }
  </div>
);

export default RedditsWrapper;