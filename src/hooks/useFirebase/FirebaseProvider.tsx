import { FC } from 'react';
import { FirebaseContext } from './FirebaseContext';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

interface FirebaseProviderProps {
  children: React.ReactNode;
}

const FirebaseProvider: FC<FirebaseProviderProps> = ({ children }) => {
  const auth = getAuth();
  const firestore = getFirestore();

  return (
    <FirebaseContext.Provider value={{ auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
