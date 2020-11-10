import React from 'react';
import './index.css';

export class Select extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    openSelectMenu = () => {
        this.setState(state => {
            return{
                isOpen: !state.isOpen
            }
        })
    }

    render(){
        return(
            <div>
                <div className='custom-select'>
                    <p onClick={this.openSelectMenu} className='title'>{this.props.options[0].value}</p>
                </div>
                <div className={this.state.isOpen?'custom-options-wrapper open': 'custom-options-wrapper'}>
                {this.state.isOpen? this.props.options.map((el, i) => (
                    <div key={i} className={el.isSelected?'custom-option selected': 'custom-option'} onClick={() => this.props.onSelect(el.value, i)} >{el.value}</div>
                )): 
                null
                }
                </div>
            </div>
        )
    }
}