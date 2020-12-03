import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './index.module.css';

export const Auth = ({errorMessage}) => {

    const { errorIndex } = useParams();
    const [username, setUsername] = useState('');

    const editUsername = (e) => {
      setUsername(e.target.value);
    }
    
    useEffect(() => {
        if(typeof errorIndex === 'string' && !username){
            alert(errorMessage[errorIndex]);
        }
    }, [username, errorMessage, errorIndex])
    return (
        <div className={styles['auth-body']}>
            <input onInput={editUsername} />
            <Link to={username?
                `/profile/${username}`:
                `/auth/0`} >
                <button>Login</button>
            </Link>
        </div>        
    )
}