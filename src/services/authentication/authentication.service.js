import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';

export const auth = getAuth();

export const loginRequest = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
