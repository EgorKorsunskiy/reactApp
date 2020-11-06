import React from 'react';
import './index.css';


export class Cell extends React.Component{
    render(){
      return (
        <div className='cell' style={this.props.style} onClick={this.props.onClick}></div>
      )
    }
  }