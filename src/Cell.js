import React, { Component } from 'react';

class Cell extends Component {
    constructor (props) {
        super();
        this.state = {
            color: props.value
        }
    }

    handeClick = () => {
        const newColor = '#333';
        this.setState({color:newColor})
    }
    render () {
        return (
            <div 
                className="cell" 
                style={{backgroundColor: this.state.color}}
                onClick={this.handeClick}
            ></div>
        );
    }
}

export default Cell;
