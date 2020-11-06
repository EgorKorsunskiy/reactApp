import React from 'react';
import { Cell } from '../CellElement/index.js'
import './index.css';

const DEFAULT_CELL_COLOR = '#fff';
const MAX_HEXADECIMAL_NUMBER = 16777215;
const CELL_SIZE = 100;

export class Table extends React.Component{

    constructor(){
        super();
        this.state = {
            0 : DEFAULT_CELL_COLOR
        }
      }

    generateRandomColor(){
      return '#' + Math.floor(Math.random() * MAX_HEXADECIMAL_NUMBER).toString(16);
    }

    setCellColor(key){ 
      const color = this.state[key];
      const finalColor = color === DEFAULT_CELL_COLOR || 
      color === undefined ? 
      this.generateRandomColor() : 
      DEFAULT_CELL_COLOR;

      this.setState({
        [key] : finalColor
      })
    }

      returnSetCellColorFunc(key){
        return () => this.setCellColor(key);
      }

    createGrid(){
      const WINDOW_HEIGHT = window.innerHeight;
      const WINDOW_WIDTH = window.innerWidth;

      let blocks = [];
      let cells = [];
      let key = 0;
      for(let i=0;i<=WINDOW_HEIGHT-CELL_SIZE;i+=CELL_SIZE){
        
        for(let j=0;j<=WINDOW_WIDTH;j+=CELL_SIZE){
          cells.push(
          <Cell key={key} style={{background: this.state[key]}} onClick={this.returnSetCellColorFunc(key)}/>);
          key++;
        }
        blocks.push(<div key={key}>{cells}</div>);
        cells = [];
      }
    
      return blocks;
    }
  
    render(){
        return (
          <div className='table'>
            {this.createGrid()}
            <h1 className='author'>Created by Egor :)</h1>
          </div>
        )
    }
  }