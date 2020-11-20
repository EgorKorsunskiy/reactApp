import { Image } from './Image'
import './style.css'

export function Gallery(props){
    return(
        <div className={`images-container ${props.customClassName}`}>
            <div className={`images-container-offset ${props.customClassName}`}>
                {props.fetchedImages.map((el, i) => (
                    <Image 
                    src={el.webformatURL} 
                    selectedOption={props.selectedOption}
                    key={i} 
                    customClassName={props.customClassName} />
                ))}
            </div>
            {
                !props.fetchedImages.length?
                <h1 className={`images-no_result ${props.customClassName}`}>Nothing found :(</h1>:
                null
            }
        </div>
    );
}