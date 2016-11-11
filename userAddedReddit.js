import React, { Component } from 'react';

class UserReddit extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: props.item
    };
    this.clickRemove = this.clickRemove.bind(this);
  }

  clickRemove () {
    this.props.clickRemove(this.state.title);
  }

  render () {
    return (
      <div className="user-reddit-titles">
        <div className="name" onClick={this.props.click}>{this.state.title}</div>
        <div className="remove" onClick={this.clickRemove}>Remove</div>
      </div>
    );
  }
}

export default UserReddit;