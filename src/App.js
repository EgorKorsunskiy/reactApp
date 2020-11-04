import React from 'react';
import './App.css';


class Cell extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      key:null,
      color:null,
      notPainted:true
    }
  }

  updateState(key){
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    this.setState({
      key,
      color,
      notPainted:!this.state.notPainted
    })
  }

  setStyle(){
    let color = this.state.color || '#fff';

    if(this.state.notPainted) color = '#fff';

    return {background: color};
  }

  render(){
    return (
      <div className='cell' 
      style={this.setStyle()}
      onClick={()=> {this.updateState(this.props['data-key'])}}>
      </div>
    )
  }
}

export class App extends React.Component{

  constructor(){
    super();

    this.state = {}
  }

  createCell(){
    let blocks = [];
    let cells = [];
    let key = 0
  
    for(let i=0;i<=window.innerHeight;i+=100){
      if(cells.length){
        blocks.push(<div key={key}>{cells}</div>);
        cells = [];
      }
      for(let j=0;j<=window.innerWidth;j+=100){
        cells.push(<Cell key={key} data-key={key}/>);
        key++;
      }
    }
  
    return blocks;
  }

  render(){
      return (
        <div className='table'>
          {this.createCell()}
          <h1 className='author'>Created by Egor :)</h1>
        </div>
      )
  }
}
