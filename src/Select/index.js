import React from 'react';
import './index.css';

export class Select extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    componentDidMount(){
        window.addEventListener('click', this.closeSelectMenu);
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.closeSelectMenu)
    }

    isSelectIncludes(target){
        return target.classList.contains('dropdown-select')
        || target.classList.contains('dropdown-title')
        || target.classList.contains('dropdown-option');
    }

    closeSelectMenu = (e) => {
        if(this.isSelectIncludes(e.target)) return;
        this.setState({
            isOpen: false
        })
    }

    toggleSelectMenu = () => {
        this.setState(state => {
            return{
                isOpen: !state.isOpen
            }
        })
    }

    render(){
        return(
            <div className='dropdown-body'>
                <div className='dropdown-select'>
                    <p onClick={this.toggleSelectMenu} 
                    className='dropdown-title'>
                    {this.props.options.lenght?
                    this.props.options[0].value || 'exampleOption':
                    'exampleOption'}</p>
                </div>
                <div className={this.state.isOpen?'dropdown-options-wrapper dropdown-open': 'dropdown-options-wrapper'}>
                {this.state.isOpen? this.props.options.map((el, i) => (
                    <div key={i}
                     className={el.value === this.props.selected?'dropdown-option dropdown-selected': 'dropdown-option'}
                     onClick={() => this.props.onSelect(el.value)} >
                    {el.value}</div>
                )): 
                null
                }
                </div>
            </div>
        )
    }
}