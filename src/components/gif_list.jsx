import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  render() {
    this.props.gifs.map(gif => {
      return <Gif id={gif.id} /> // ?
    });
  }
}

export default GifList;
