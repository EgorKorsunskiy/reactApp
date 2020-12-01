import { Link } from 'react-router-dom';
import './index.css';

export const Main = () => {

    return (
        <div className='main-body'>
            <Link to='/auth' className='link'>
                <button>
                    Login
                </button>
            </Link>
        </div>
    )
}