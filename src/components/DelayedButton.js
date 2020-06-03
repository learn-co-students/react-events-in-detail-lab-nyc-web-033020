// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

    handleClick = event => {
        event.persist()
        // setTimeout(function, time)
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render(){
        return(
            <button onClick={this.handleClick} delay={this.props.delay}>Delay</button>
        )
    }
}