// Code CoordinatesButton Component Here
import React from 'react';
// import React, { Component } from 'react';
// import { render } from 'enzyme';

class CoordinatesButton extends React.Component{

    handleClick = e =>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return <button onClick={this.handleClick}>This is The Coordinate Button</button>
    }
}

export default CoordinatesButton