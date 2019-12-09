import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>)
  }
  
  genMatrix = () => (
  this.props.values.map(rowVals => {
    return <div className="row">{this.genRow(rowVals)}</div>
  })
  )
  
  render() {
    return (
      
      <div id="matrix">    
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: new Array(10)
}