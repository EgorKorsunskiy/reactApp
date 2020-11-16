import { Image } from '../Image/index'
import './style.css'

export function Gallery(props){
    return(
        <div className="images-container">
            <div className='images-container-offset'>
                {props.fetchedImages.map((el, i) => (
                    <Image src={el.webformatURL} key={i} />
                ))}
            </div>
            {
                !props.fetchedImages.length?
                <h1 className="images-no_result">Nothing found :(</h1>:
                null
            }
        </div>
    );
}