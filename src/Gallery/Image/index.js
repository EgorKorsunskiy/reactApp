import './style.css'

export function Image(props){
    return(
        <img className={(props.selectedOption === 'Big')?
        `images-item big ${props.customClassName}`:
        `images-item small ${props.customClassName}`} src={props.src} alt='img'/>
    );
}