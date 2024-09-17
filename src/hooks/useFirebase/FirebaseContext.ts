import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { createContext } from 'react';

interface ContextType {
  auth: Auth,
  firestore: Firestore,
}

export const FirebaseContext = createContext<ContextType>(null!);