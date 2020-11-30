import { useState, useContext } from 'react';
import './index.css';

export const RangeSliderElement = (props) => {

    const [isActive, setIsActive] = useState(false);
    if(props.width * props.index <= props.X){
        setIsActive(true);

        props.updateValue(props.value);
    }
    else{
        if(isActive){
            setIsActive(false);
        }
    }

    return (
        <div className={
            isActive?
            'range_slider-element Active':
            'range_slider-element'
        }
        ></div>
    );
}