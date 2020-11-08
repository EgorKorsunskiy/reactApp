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
                    {
                        value
                    },
                    ...state.options
                ],
                selected: state.selected
            }
        })
    }

    selectOption = (e) => {
        this.setState(state => {
            return{
                options: state.options,
                selected: e.target.value
            }
        })
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