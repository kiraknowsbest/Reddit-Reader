import React, { Component } from 'react';

class Subscriptions extends Component {
  constructor (props) {
    super(props);
    this.state = {
      subs: props.normal
    };
  }

  render () {
    var context = this;
    var data = this.state.subs.map(function (reddit) {
      return (
        <div key={reddit} className="reddit-title" onClick={context.props.click}>
          {reddit}
        </div>
      );
    });
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default Subscriptions;