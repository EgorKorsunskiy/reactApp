import { useState } from 'react';
import { RangeSlider } from '../RangeSlider';
import './index.css';

const DEFAULT_X = 0;

export const Main = () => {
    const [value, setValue] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [Xcoords, setXcoords] = useState(DEFAULT_X);

    const startXposition = 0;
    const endXposition = 400;
    const ELEMENT_WIDTH = endXposition / maxValue;

    const valueOnInput = (e) => {
        setValue(e.target.value);
    }

    const minValueOnInput = (e) => {
        setMinValue(e.target.value);
    }

    const maxValueOnInput = (e) => {
        setMaxValue(e.target.value);
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
                min={minValue}
                max={maxValue}
                X={
                    Xcoords < value?
                    value * ELEMENT_WIDTH:
                    Xcoords
                    }
                width={ELEMENT_WIDTH}
                startXposition={startXposition}
                endXposition={endXposition}
                updateX={setXcoords}
                updateValue={setValue}
            />
            <p className='range_slider-value'>{value}</p>
        </div>
    </div>
  );
}
