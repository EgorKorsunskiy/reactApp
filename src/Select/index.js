import React from 'react';
import './index.css';

export class Select extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    removeSelectedClasses(target){
        for( let el of target.parentNode.children ){
            if(el.classList.contains('selected')){
                el.classList.remove('selected')
            }
        }
    }

    openSelectMenu = (e) => {
        const target = e.target.parentNode.parentNode.children[1];

        target.classList.toggle('open');

        this.setState(state => {
            return{
                isOpen: !state.isOpen
            }
        })
    }

    toggleSelectedElement = (e) => {
        this.removeSelectedClasses(e.target);

        e.target.classList.toggle('selected');
    }

    render(){
        return(
            <div>
                <div className='custom-select'>
                    <p onClick={this.openSelectMenu} className='title'>{this.props.options[0].value}</p>
                </div>
                <div className='custom-options-wrapper'>
                {this.state.isOpen? this.props.options.map((el, i) => (
                    <div key={i} className='custom-option' onClick={() => {this.props.onSelect(el.value)}, this.toggleSelectedElement} >{el.value}</div>
                )): 
                null
                }
                </div>
            </div>
        )
    }
}