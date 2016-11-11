import React, { Component } from 'react';
import Stock from './stockPhoto';

class Link extends Component {
  constructor (props) {
    super(props);
    let ups = props.link.ups || 0;
    let downs = props.link.downs || 0;
    this.state = {
      votes: (ups - downs),
      title: props.link.title,
      postInfo: props.link.author,
      url: props.link.url
    };
  }

  render () {
    let url = this.state.url;
    let imgTypes = {
      jpg: true,
      png: true,
      gif: true
    };
    return (
      <a href={url}>
        <div className="reddit-link-wrapper">
          <div className="link-votes">
            {this.state.votes}
          </div>
          {imgTypes[url.substr(-3)] ? <img src={url} className="thumbnail"/> : <Stock/>}
          <div className="link-title">
            {this.state.title}
          </div>
          <div className="link-post-info">
            posted by: {this.state.postInfo}
          </div>
        </div>
      </a>
    );
  }
}

export default Link;