import { useParams } from 'react-router-dom';
import './index.css';

export const Profile = () => {
    const { username } = useParams();

    return (
        <div className='profile-wrapper'>
             <h1>Hello {username}!</h1>
        </div>
    )
}