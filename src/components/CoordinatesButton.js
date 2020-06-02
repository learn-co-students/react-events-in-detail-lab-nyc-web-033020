import React, { Component } from 'react'

export class CoordinatesButton extends Component {

  handleChilck = (e) => {
    this.props.onReceiveCoordinates ( [ e.clientX, e.clientY])
  }
  render() {
    return (
      <div>
        <button onClick={this.handleChilck}></button>
      </div>
    )
  }
}

export default CoordinatesButton
