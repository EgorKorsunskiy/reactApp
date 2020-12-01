import { RangeSliderElement } from './RangeSliderElement';
import './index.css';
import { Draggable } from './Draggable/Draggable';

export const RangeSlider = (props) => {

  const generateRangeSliderItems = () => {
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
  }

  return (
      <div className='range_slider-body'>
        <Draggable 
          updateX={props.updateX}
          updateValue={props.updateValue}
          currentX={props.X}
          width={props.width}
          >
          <div className='cursor'></div>
        </Draggable>
        {generateRangeSliderItems()}
      </div>
  );
};