import React from 'react';
import './index.css';

export class Select extends React.Component{
    render(){
        return(
            <select onChange={this.props.onClick()}>
                {this.props.options.map((el, i) => (
                    <option key={i}>{el.value}</option>
                ))}
            </select>
        )
    }
}