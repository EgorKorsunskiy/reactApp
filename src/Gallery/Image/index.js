import { useContext } from 'react';
import { SelectedOption } from '../../Main'
import './style.css'

export function Image(props){
    const selectedOption = useContext(SelectedOption);

    return(
        <img className={(selectedOption === 'Big')?
        `images-item big ${props.customClassName}`:
        `images-item small ${props.customClassName}`} src={props.src} alt='img'/>
    );
}