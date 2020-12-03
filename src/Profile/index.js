import { useParams } from 'react-router-dom';
import styles from './index.module.css';

export const Profile = () => {
    const { username } = useParams();

    return (
        <div className={styles['profile-wrapper']}>
             <h1>Hello {username}!</h1>
        </div>
    )
}