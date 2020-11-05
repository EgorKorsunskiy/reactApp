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
            cells:[{
                key:'',
                color:''
            }]
        }
      }

    returnCurrentCellElement(key, cellState){

      let thisElement = cellState.find(el => el.key === key) || null;
      let thisElementIndex = cellState.indexOf(thisElement);

      return {thisElement, thisElementIndex};
    }

    generateCellColor(key){ 
        const CELLS = this.state.cells;

        let thisElement = this.returnCurrentCellElement(key, CELLS).thisElement;
        let thisElementIndex = this.returnCurrentCellElement(key, CELLS).thisElementIndex;
        let color;

        try{
           color = thisElement.color
           color = (color === DEFAULT_CELL_COLOR) ? '#' + Math.floor(Math.random() * MAX_HEXADECIMAL_NUMBER).toString(16) : DEFAULT_CELL_COLOR;
        }
        catch(TypeError){
          color = '#' + Math.floor(Math.random() * MAX_HEXADECIMAL_NUMBER).toString(16);
        }
  
        if(thisElement){
          this.state.cells.splice(thisElementIndex, 1);
        }

        this.state.cells.push({
          key,
          color
        })

        this.setState(state => ({
          cells: state.cells
        }))
    }

    getCellStyle(key){
        const CELL = this.state.cells;

        let thisElement = this.returnCurrentCellElement(key, CELL).thisElement;
        let color;

        try{
            color = thisElement.color
        }
        catch(TypeError){
            color = DEFAULT_CELL_COLOR;
        }

        return {background: color};
      }

    createGrid(){
      const WINDOW_HEIGHT = window.innerHeight;
      const WINDOW_WIDTH = window.innerWidth;

      let blocks = [];
      let cells = [];
      let key = 0
    
      for(let i=0;i<=WINDOW_HEIGHT-CELL_SIZE;i+=CELL_SIZE){
        for(let j=0;j<=WINDOW_WIDTH;j+=CELL_SIZE){
          cells.push(
          <Cell key={key} style={() => this.getCellStyle(key)} click={() => this.generateCellColor(key)}/>);
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