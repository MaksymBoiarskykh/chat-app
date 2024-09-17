import React, { useCallback, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './Chat.module.scss';
import classNames from 'classnames';

const Chat = () => {
  const { firestore, auth } = useFirebase();
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  const [messages] = useCollectionData(
    query(collection(firestore, 'chat_1'), orderBy('createdAt'))
  );

  const sendMessage = useCallback(() => {
    if (firestore && user) {
      addDoc(collection(firestore, 'chat_1'), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: serverTimestamp(),
      });

      setValue('');
    }
  }, [firestore, user, value]);

  return (
    <div className='h-[70%] flex flex-col'>
      <div className={styles['chat']}>
        {user &&
          messages?.map((el, index) => {
            return (
              <div
                key={index}
                className={classNames(styles['chat-message'], {
                  [styles['chat-message-me']]: el.uid === user.uid,
                  [styles['chat-message-other']]: el.uid !== user.uid,
                })}
              >
                <div className={classNames(styles['chat-message-name'])}>
                  {el.displayName}
                </div>
                <div>{el.text ?? '...'}</div>
              </div>
            );
          })}
      </div>
      <div className={styles['form']}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage}>send</button>
      </div>
    </div>
  );
};

export default Chat;
