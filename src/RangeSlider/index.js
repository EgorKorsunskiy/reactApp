import { RangeSliderElement } from './RangeSliderElement';
import './index.css';
import { Draggable } from './Draggable/Draggable';
import { useMemo } from 'react';

export const RangeSlider = (props) => {

  const generateRangeSliderItems = useMemo(() => {
    let Elements = [];

    for(let i=props.min;i<=props.max;i++){
      Elements.push(
      <RangeSliderElement 
        key={i}
        isActive={props.width * i <= props.X}
      />
      );
    }
    return Elements;
  }, [props.X, props.max, props.min, props.width]);

  return (
      <div className='range_slider-body'>
        <Draggable 
          startXposition={props.startXposition}
          endXposition={props.endXposition}
          updateX={props.updateX}
          updateValue={props.updateValue}
          currentX={props.X}
          width={props.width}
          >
          <div className='cursor'></div>
        </Draggable>
        {generateRangeSliderItems}
      </div>
  );
};