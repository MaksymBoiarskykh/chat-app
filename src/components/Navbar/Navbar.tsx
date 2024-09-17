import styles from './Navbar.module.scss';
import { useCallback } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const { auth } = useFirebase();
    const [user] = useAuthState(auth);

    const onLogout = useCallback(async () => {
        auth?.signOut();
    }, [auth]);

    return (
        <div className={styles['navbar']}>
            <div className={styles['navbar-content']}>
                <div>NAVBAR</div>
                {user ? <span onClick={onLogout}>LOG OUT</span> : <span>LOG IN</span>}
            </div>
        </div>
    )
}

export default Navbar;