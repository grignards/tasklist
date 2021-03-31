import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
        <img src={src} alt="" className="gif"/>
        // add on click function here handle click and change the state in the app
        // have a function passed to the children from the app
    );
  }
}

export default Gif;
