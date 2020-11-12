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
            inputData: '',
            selected: ''
        }
    }

    saveInputData = (e) => {
        this.setState({
            inputData: e.target.value
        })
    }

    addOption = () => {
        const value = this.state.inputData;

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

    selectOption = (value) => {
        value = (value === this.state.selected)?
        '':
        value
        this.setState(
                {
                    selected: value
                }
            )
    }

    render(){
        return(
            <div>
                <div>
                    <input placeholder='Add option' onInput={this.saveInputData}/>
                    <button onClick={this.addOption}>Add</button>
                </div>
                <Select options={this.state.options} 
                selected={this.state.selected} 
                onSelect={this.selectOption}
                emptyOptionValue=''/>
                <p>Selected: {this.state.selected}</p>
            </div>
        )
    }
}