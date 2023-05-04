import firebase from './Firebase';

const auth = firebase.auth();

export function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function createUserWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth.signOut();
}

export default auth;
