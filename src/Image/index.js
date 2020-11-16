import './style.css'

export function Image(props){
    return(
        <img className="images-item" src={props.src} alt='img'/>
    );
}