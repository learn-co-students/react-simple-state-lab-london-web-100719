import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {color: props.value}
    }

    retoggle = () => {
        this.setState({color: this.props.value})
    }

    handleClick = () => {
        console.log(this.state)
        this.setState({color: '#333'})
        
    };


    render (){
        //setTimeout(this.retoggle(),1000)
        return <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}> </div>
        
    }
}
