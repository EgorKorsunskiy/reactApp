import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';

export const Auth = ({username, onInput, errorMessage}) => {

    const { errorIndex } = useParams();
    
    useEffect(() => {
        if(typeof errorIndex === 'string' && !username){
            alert(errorMessage[errorIndex]);
        }
    })
    return (
        <div className='auth-body'>
            <input className='username-input' onInput={onInput} />
            <Link to={username?
                `/profile/${username}`:
                `/auth/0`} >
                <button>Login</button>
            </Link>
        </div>        
    )
}