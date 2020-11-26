import { useState } from 'react';
import { RangeSlider } from '../RangeSlider';
import './index.css';

export const Main = () => {
    const [value, setValue] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const valueOnInput = (e) => {
        setValue(e.target.value);
    }

    const minValueOnInput = (e) => {
        setMinValue(e.target.value);
    }

    const maxValueOnInput = (e) => {
        setMaxValue(e.target.value);
    }

    const updateValue = (value) => {
        setValue(value)
    }

  return (
    <div className='body'>
        <div className='edit_inputs-container'>
            <input className='edit_value-input' onInput={valueOnInput} />
            <input className='edit_min_value-input' onInput={minValueOnInput} />
            <input className='edit_max_value-input' onInput={maxValueOnInput} />
        </div>
        <div className='range_slider-container'>
            <RangeSlider 
                value={value}
                min={minValue}
                max={maxValue}
                updateValue={updateValue}
                defaultX={0}
            />
            <p className='range_slider-value'>{value}</p>
        </div>
    </div>
  );
}
