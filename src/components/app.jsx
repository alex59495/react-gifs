import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "I7p8K5EY9w9dC",
    };
  }

  search = (query) => {
    giphy('9OCMeKia0PMOkPMJfIFUl6NxYqnZaYDE').search({
      q: query,
      rating: 'g',
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGif={this.selectedGif} />
        </div>
      </div>
    );
  }
};

export default App;
