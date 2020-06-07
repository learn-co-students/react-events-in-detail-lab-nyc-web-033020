import React from 'react';

export default class DelayedButton extends React.Component{

    handleClick = event => {
        event.persist()
        window.setTimeout(() => { //setting it on current window
            this.props.onDelayedClick(event) //function that will be executed
        }, this.props.delay) //delay before execution
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                Delayed Click!
            </button>
        )
    }
}