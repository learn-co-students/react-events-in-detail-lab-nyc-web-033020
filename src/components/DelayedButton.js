import React, { Component } from 'react'

export class DelayedButton extends Component {
  handler = (e) => {
    e.persist()
    window.setTimeout( () => {
      this.props.onDelayedClick (e)
    },this.props.delay)
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handler}>Delete</button>
      </div>
    )
  }
}

export default DelayedButton

