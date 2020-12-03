import { Link } from 'react-router-dom';
import styles from './index.module.css';

export const Main = () => {

    return (
        <div className={styles['main-body']}>
            <Link to='/auth'>
                <button>
                    Login
                </button>
            </Link>
        </div>
    )
}