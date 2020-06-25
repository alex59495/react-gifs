import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  ChooseGif = (event) => {
    this.props.selectedGif(this.props.id);
  }

  render() {
    return (
      <img src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} className="gif" alt="gif" onClick={this.ChooseGif} />
    );
  }
}

export default Gif;
