import React, { Component } from 'react';

class UserSubs extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="user-reddit-header">
        <div className="user-reddits" onClick={this.props.click}>
          Tracked Pages
        </div>
      </div>
    );
  }
}

export default UserSubs;