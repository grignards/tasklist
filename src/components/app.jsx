import React, { Component } from 'react';
import giphy from  'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GIPHY_API_KEY = 'ZPdqW81cOzqfkPUPdFNVkkj2m8TVdmkN';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "6Hhrt25GQrd1YDR1Bw"
    }
    this.search("homer");
  }

  // search(query) {
  //   const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
  //   fetch(giphEndpoint).then(response => response.json()).then((data) => {
  //     const gifs = data.data.map(giph => giph.id)
  //     this.setState({
  //       gifs: gifs
  //     })
  //   })
  // }


  render() {
    const gifs = [
      { id: "6Hhrt25GQrd1YDR1Bw" },
      { id: "6Hhrt25GQrd1YDR1Bw" },
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
