import { useEffect, useState } from 'react';
import { SelectItem } from './SelectItem';
import './index.css';

export function Select(props) {
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('click', closeSelectMenu);
    }, [])

    useEffect(() => {
        return () => window.removeEventListener('click', closeSelectMenu)
    }, [])

    const isSelectIncludes = (target) => {
        return target.classList.contains('dropdown-select')
        || target.classList.contains('dropdown-title')
        || target.classList.contains('dropdown-option');
    }

    const closeSelectMenu = (e) => {
        if(isSelectIncludes(e.target)) return;
        setIsOpen(false);
    }

    const toggleSelectMenu = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    return(
        <div className='dropdown-body'>
            <div className='dropdown-select'>
                <p onClick={toggleSelectMenu} 
                className='dropdown-title'>
                    &#x2630;
                </p>
            </div>
            <div className={isOpen?'dropdown-options-wrapper dropdown-open': 'dropdown-options-wrapper'}>
            {isOpen? props.options.map((el, i) => (
                <SelectItem
                    title={el.title}
                    options={el.options}
                    onSelect={props.onSelect}
                    selectedOption={props.selectedOption}
                    key={i}
                />
            )): 
            null
            }
            </div>
        </div>
        )
    }