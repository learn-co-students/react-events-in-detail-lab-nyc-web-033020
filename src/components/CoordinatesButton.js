// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  
  handleOnClick = (event) => {
    let coords = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(coords)
  };
  
  render() {
    return (
      <button onClick={this.handleOnClick}>
        Coordinates
      </button>
    );  
  };
}