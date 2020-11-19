import React, { useState } from 'react'
import { Select } from '../Select';
import { Gallery } from '../Gallery';
import './style.css';

const KEY = '18601823-36af0fdddc3ba24537f0e57fc';

const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth; 

const SEARCH_CONTAINER_PERSENT = 10;
const IMAGE_CONTAINER_HEIGHT = HEIGHT - ((HEIGHT / 100) * SEARCH_CONTAINER_PERSENT);

const IMAGE_OFFSET_PERCENT = 2;
const IMAGE_OFFSET = (IMAGE_CONTAINER_HEIGHT / 100) * (IMAGE_OFFSET_PERCENT * 2);

const IMAGE_IN_ROW = 3;
const IMAGE_PERCENT = 35;
const IMAGE_HEIGHT = ((HEIGHT / 100) * IMAGE_PERCENT) + IMAGE_OFFSET;
const IMAGE_WIDTH = ((WIDTH / 100) * IMAGE_PERCENT) + IMAGE_OFFSET;

const heightOrWidth = (WIDTH >= 700)?IMAGE_HEIGHT:IMAGE_WIDTH;

export const OnSelect = React.createContext(null);
export const SelectedOption = React.createContext(null);

export function Main() {

  const [inputData, setInputData] = useState('');
  const [fetchedImages, setFetchedImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [selectedOption, setSelectedOption] = useState('')
  const [filterOptions] = useState([
    {
      title: 'Images Size',
      options: [
        'Big',
        'Small'
      ]
    },
    {
      title: 'Number of image',
      options: [
        'Limit',
        'Unlimit'
      ]
    }
  ]);

  const selectOption = (value) => {
    value = (value === selectedOption)?
    '':
    value
    setSelectedOption(value);
  }

  const countTheNumberOfPictures = () => {
    return Math.floor((Math.floor(IMAGE_CONTAINER_HEIGHT) / Math.floor(heightOrWidth))) * IMAGE_IN_ROW;
  }

  const openImagesMenu = () => {
    setIsOpen(true);
  }

  const toggleSearchButtonText = () => {
    setIsSearch((isSearch) => !isSearch);
  }

  const fetchImages = () => {
    const URL = (!selectedOption || selectedOption === 'Limit')?
    `https://pixabay.com/api/?key=${KEY}&q=${inputData}&per_page=${countTheNumberOfPictures()}`:
    `https://pixabay.com/api/?key=${KEY}&q=${inputData}`;

    fetch(URL)
    .then(data => data.json())
    .then(JsonData => {
      setFetchedImages(JsonData.hits);
      toggleSearchButtonText();
    })
    .catch(e => {
      alert(`Something went wrong ${e}`);
      toggleSearchButtonText();
    })
  }

  const inputHandler = (e) => {
    setInputData(e.target.value);
  }

  const clickHandler = async() => {

    toggleSearchButtonText();
    openImagesMenu();
    fetchImages(URL);
  }

  return (
    <div className="body">
      <div className={isOpen?"search-container search-container-after_search": 'search-container'}>
        <input type="text" placeholder="Enter something..." className="search-input" onInput={inputHandler}/>
        <button className="search-button" onClick={clickHandler}>{isSearch?'Searching':'Search'}</button>
        <OnSelect.Provider value={selectOption}>
          <SelectedOption.Provider value={selectedOption}>
            <Select 
              options={filterOptions}
            />
          </SelectedOption.Provider>
        </OnSelect.Provider>
      </div>
      {
        isOpen?
        <SelectedOption.Provider value={selectedOption}>
          <Gallery
            fetchedImages={fetchedImages}
            customClassName='' />
        </SelectedOption.Provider>:
        null
      }
    </div>
  );
}