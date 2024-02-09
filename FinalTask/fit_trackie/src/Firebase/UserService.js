// In a file like userService.js
import { auth, database } from './firebase';

export const storeUserData = (userId, userData) => {
  database.ref(`users/${userId}`).set(userData);
};
