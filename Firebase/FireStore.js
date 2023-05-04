import firebase from './Firebase';

const db = firebase.firestore();

export function getCollection(collection) {
  return db.collection(collection).get();
}

export function addDocument(collection, data) {
  return db.collection(collection).add(data);
}

export function updateDocument(collection, id, data) {
  return db.collection(collection).doc(id).update(data);
}

export function deleteDocument(collection, id) {
  return db.collection(collection).doc(id).delete();
}

export default db;
