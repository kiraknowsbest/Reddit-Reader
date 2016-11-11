import React from 'react';

const Title = props => (
  <div className="current-page-title">
    Currently viewing: {props.title}
  </div>
);

export default Title;