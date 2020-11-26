import { RangeSliderElement } from './RangeSliderElement';
import './index.css';
import { useEffect, useState } from 'react';

export const RangeSlider = (props) => {

  let Xcoords = props.defaultX;

  useEffect(() => {
    return () => {
      document.body.style.userSelect = 'auto';
      window.removeEventListener('mousemove', this.mouseMoveHandler);
      window.removeEventListener('mouseup', this.mouseUpHandler);
    }
  }, [])

  const mouseDownHandler = e => {
    document.body.style.userSelect = 'none';
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    Xcoords = e.clientX;
  }

  const mouseUpHandler = () => {
      document.body.style.userSelect = 'auto';
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
  }

  const mouseMoveHandler = e => {
      Xcoords = e.clientX;
      console.log(Xcoords)
      if(Xcoords < 7){
        Xcoords = 7;
      }
      else if(Xcoords > 400){
        Xcoords = 400;
      }
  }

  const generateRangeSliderItems = () => {
    let Elements = [];
    const ELEMENT_WIDTH = 400 / props.max;

    for(let i=props.min;i<=props.max;i++){
      Elements.push(
      <RangeSliderElement 
        isActive={i < props.value}
        updateValue={props.updateValue}
        value={i}
        width={ELEMENT_WIDTH}
        key={i}
        X={Xcoords}
      />
      );
    }
    return Elements;
  }

  return (
      <div className='range_slider-body'>
        <div className='cursor' onMouseDown={mouseDownHandler}></div>
        {generateRangeSliderItems()}
      </div>
  );
};