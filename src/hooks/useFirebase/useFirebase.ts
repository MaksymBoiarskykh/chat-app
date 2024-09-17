import { useContext } from 'react';
import { FirebaseContext } from './FirebaseContext';
import FirebaseProvider from './FirebaseProvider';

const useFirebase = () => useContext(FirebaseContext);

useFirebase.Context = FirebaseContext;
useFirebase.Provider = FirebaseProvider;

export default useFirebase;