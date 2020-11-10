import React from 'react';
import './index.css';
import { Select } from '../Select'

export class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            options: [
                {
                    value: 'exampleOption',
                    isSelected: false
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
            }
        })
    }

    removeSelectClass(obj){
        for(let el of obj){
            el.isSelected = false;
        }
    }

    selectOption = (value, index) => {
        let options = [...this.state.options];
        const isSelected = options[index].isSelected;

        if(!isSelected){
            this.removeSelectClass(options);
        }
        options[index].isSelected = !isSelected;

        this.setState(
                {
                    options,
                    selected: value
                }
            )
    }

    render(){
        return(
            <div>
                <div>
                    <input placeholder='Add option'/>
                    <button onClick={this.addOption}>Add</button>
                </div>
                <Select options={this.state.options} onSelect={this.selectOption}/>
                <p>Selected: {this.state.selected}</p>
            </div>
        )
    }
}