import { useState } from 'react'
import { Gallery } from './Gallery';
import './App.css';

function App() {
  
  const [inputData, setInputData] = useState('');
  const [fetchedImages, setFetchedImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const CountTheNumberOfPictures = () => {
    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth; 

    const heightOrWidth = (WIDTH >= 1000)?HEIGHT:WIDTH;

    for(let i=15;i>=0;i=i-3){
        if((i/3) * (42*(heightOrWidth / 100)) <= HEIGHT - (10*(HEIGHT / 100))){
            return i;
        }
    }
  }

  const openImagesMenu = () => {
    setIsOpen(true);
  }

  const fetchImages = (url) => {
    fetch(url)
    .then(data => data.json())
    .then(JsonData => {
      setFetchedImages(JsonData.hits)})
  }

  const inputHandler = (e) => {
    setInputData(e.target.value);
  }

  const clickHandler = () => {
    const KEY = '18601823-36af0fdddc3ba24537f0e57fc';
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${inputData}&per_page=${CountTheNumberOfPictures()}`;
    console.log(URL)

    openImagesMenu();
    fetchImages(URL);
  }

  return (
    <div className="body">
      <div className={isOpen?"search-container search-container-after_search": 'search-container'}>
        <input type="text" placeholder="Enter something..." className="search-input" onInput={inputHandler}/>
        <button className="search-button" onClick={clickHandler}>Search</button>
      </div>
      {
        isOpen?
        <Gallery fetchedImages={fetchedImages}/>:
        null
      }
    </div>
  );
}

export default App;
