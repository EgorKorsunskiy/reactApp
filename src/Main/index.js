import React from 'react';
import './index.css';
import { Select } from '../Select'

export class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            options: [
                {
                    value: 'exampleOption'
                }
            ],
            selected: ''
        }
    }

    addOption = (e) => {
        const value = e.target.parentNode.children[0].value;

        this.setState(state => {
            return{
                options: [
                    ...state.options,
                    {
                        value
                    }
                ],
                selected: state.selected
            }
        })
    }

    removeSelectedClasses(target){
        for( let el of target.parentNode.children ){
            if(el.classList.contains('selected')){
                el.classList.remove('selected')
            }
        }
    }

    selectOption = (e) => {
        if(!e.target.classList.contains('title')){
            this.removeSelectedClasses(e.target);

            e.target.classList.toggle('selected')

            this.setState(state => {
                return{
                    options: state.options,
                    selected: e.target.innerText
                }
            })
        }
        else{
            this.openSelectMenu(e)
        }
    }

    openSelectMenu(e){
        const target = e.target.parentNode.parentNode.children[1]

        target.classList.toggle('open');
    }

    render(){
        return(
            <div>
                <div>
                    <input placeholder='Add option'/>
                    <button onClick={this.addOption}>Add</button>
                </div>
                <Select options={this.state.options} onClick={() => this.selectOption}/>
                <p>Selected: {this.state.selected}</p>
            </div>
        )
    }
}