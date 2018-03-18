import { AsyncStorage } from 'react-native';

export const wrongTokenError = 'Пользователь не идентифицирован';
const tokenKey = 'Token';

export function get(callback) {
  AsyncStorage.getItem(tokenKey, callback);
}

export function set(newToken) {
  AsyncStorage.setItem(tokenKey, newToken);
}

export function remove(callback) {
  AsyncStorage.removeItem(tokenKey, callback);
}