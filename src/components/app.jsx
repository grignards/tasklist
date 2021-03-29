import React, { Component } from 'react';
import giphy from  'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifList: [],
      selectedGifId: "6Hhrt25GQrd1YDR1Bw"
    }
  }

  search = (query) => {
    giphy('ZPdqW81cOzqfkPUPdFNVkkj2m8TVdmkN')
    // implement search function
  }


  render() {
    const gifs = [
      { id: "AEkWi5dH0OieoqXJj3"}, // pourquoi cette var ne fonctionne pas dans GifList ?
      { id: "6Hhrt25GQrd1YDR1Bw"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifList} />
        </div>
      </div>
    );
  }
}

export default App;
