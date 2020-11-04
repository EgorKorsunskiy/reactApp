import React from 'react';
import { Cell } from '../cellElement/index.js'
import './index.css';

const CELL_SIZE = 100;
const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;

export class Table extends React.Component{

    createGrid(){
      let blocks = [];
      let cells = [];
      let key = 0
    
      for(let i=0;i<=WINDOW_HEIGHT-CELL_SIZE;i+=CELL_SIZE){
        for(let j=0;j<=WINDOW_WIDTH;j+=CELL_SIZE){
          cells.push(<Cell key={key}/>);
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