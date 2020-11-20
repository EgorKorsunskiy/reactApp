import { useEffect, useState } from 'react';
import './index.css';

export function SelectItem(props) {
    
    const [isOpen, setIsOpen] = useState(false)

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
        <div className='dropdown-body dropdown-item-body'>
            <div className='dropdown-select dropdown-item-select'>
                <p onClick={toggleSelectMenu} 
                className='dropdown-title dropdown-item-title'>
                    {props.title}
                </p>
            </div>
            <div className={isOpen?'dropdown-options-wrapper dropdown-item-options-wrapper dropdown-open': 'dropdown-options-wrapper dropdown-item-options-wrapper'}>
            {isOpen? props.options.map((el, i) => (
                <div key={i}
                    className={el === props.selectedOption?'dropdown-option dropdown-item-option dropdown-selected': 'dropdown-option dropdown-item-option'}
                    onClick={() => props.onSelect(el)} >
                {el}</div>
            )): 
            null
            }
            </div>
        </div>
        )
    }