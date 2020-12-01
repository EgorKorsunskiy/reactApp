import { useState, useContext } from 'react';
import './index.css';

export const RangeSliderElement = (props) => {

    return (
        <div className={
            props.isActive?
            'range_slider-element Active':
            'range_slider-element'
        }
        ></div>
    );
}