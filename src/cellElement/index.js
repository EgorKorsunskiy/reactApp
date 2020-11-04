import React from 'react';
import './index.css';

const DEFAULT_CELL_COLOR = '#fff';
const MAX_HEXADECIMAL_NUMBER = 16777215;

export class Cell extends React.Component{
  
    constructor(props){
      super(props);
      this.state = {
        color:'',
        notPainted:true
      }
    }
  
    ganerateCellColor(){
      let color = '#' + Math.floor(Math.random() * MAX_HEXADECIMAL_NUMBER).toString(16);
  
      this.setState(state => ({
        color,
        notPainted: !state.notPainted
      }))
    }
  
    getCellStyle(){
      let color = this.state.color || DEFAULT_CELL_COLOR;
  
      if(this.state.notPainted) color = DEFAULT_CELL_COLOR;
  
      return {background: color};
    }
  
    render(){
      return (
        <div className='cell' 
        style={this.getCellStyle()}
        onClick={()=> {this.ganerateCellColor()}}>
        </div>
      )
    }
  }