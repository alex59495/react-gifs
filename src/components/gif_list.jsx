import React, { Component } from 'react';
import Gif from './gif';

// class GifList extends Component {
//   render() {
//     return (
//       <div className="gif-list">
//         {this.props.gifs.map((gif) => {
//           return <Gif id={gif.id} key={gif.id} selectedGif={this.props.selectedGif}/>;
//         })}
//       </div>
//     );
//   }
// }

const GifList = ({ gifs, selectedGif }) => {
  console.log(selectedGif);
  return (
    <div className="gif-list">
      {gifs.map((gif) => {
        return <Gif id={gif.id} key={gif.id} selectedGif={selectedGif} />;
      })}
    </div>
  );
};

export default GifList;
