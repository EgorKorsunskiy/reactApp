import { useState, useEffect } from 'react';
import './index.css';

export const RangeSliderElement = (props) => {

    let isFirstRender = true;

    const [isActive, setIsActive] = useState(props.isActive);

    useEffect(() => {
        if(isFirstRender){
            isFirstRender = false;
        }
        else{
            const x = props.width * props.value;

            if(x - props.X >= 0){
                props.updateValue(props.value);

                setIsActive(true);
            }
            else{
                if(isActive){
                    setIsActive(false);
                }
            }
            }
    })

    return (
        <div className={
            isActive?
            'range_slider-element Active':
            'range_slider-element'
        }
        ></div>
    );
}