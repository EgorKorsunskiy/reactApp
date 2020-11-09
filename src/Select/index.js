import React from 'react';
import './index.css';

export class Select extends React.Component{
    render(){
        return(
            <div>
                <div className='custom-select'>
                    <p onClick={this.props.onClick()} className='title'>{this.props.options[0].value}</p>
                </div>
                <div className='custom-options-wrapper'>
                {this.props.options.map((el, i) => (
                    <div key={i} className='custom-option' onClick={this.props.onClick()}>{el.value}</div>
                ))}
                </div>
            </div>
        )
    }
}