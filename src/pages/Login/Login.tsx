import { useCallback } from 'react';
import styles from './Login.module.scss';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { auth } = useFirebase();

  const onLogin = useCallback(async () => {
    if (auth) {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);
    }
  }, [auth]);

  return (
    <div className={styles['login']}>
      <div className={styles['login-content']}>
        <button
          onClick={onLogin}
          className={styles['login-content-btn']}
        >
          Enter with google
        </button>
      </div>
    </div>
  );
};

export default Login;
