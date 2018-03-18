import { Alert } from 'react-native';
import * as tokenManager from '../common/tokenManager';

const serverOffline = 'Network request failed';
let offlineMessageOpen = false;

export function processResponse(response, resolve, reject) {
  if (response.message == serverOffline || response.status == 502) {
    processServerOffline();
    return;
  }

  if (response.json) {
    processWebResponse(response, resolve, reject);
    return;
  }

  reject(response.message);
}

function processServerOffline() {
  if (offlineMessageOpen) {
    return;
  }

  setTimeout(() => Alert.alert('​Технический перерыв', '​Приносим свои извинения, на сервере ведутся технические работы. Пожалуйста, попробуйте через несколько минут.', [{
    text: '​Попробовать снова',
    onPress: () => {
      offlineMessageOpen = false;
    }
  }], {
    cancelable: false
  }), 50);

  offlineMessageOpen = true;
}

function processWebResponse(response, resolve, reject) {
  response.json()
    .then((json) => {
      switch (response.status) {
        case 200:
          resolve(json);
          break;

        case 401:
          reject(tokenManager.wrongTokenError);
          break;

        case 422:
          reject({
            message: 'Не корректный запрос на авторизацию.',
            data: json
          });
          break;
          
        default:
          reject({
            message: 'Произошла ошибка',
            data: json
          });
      }
    })
    .catch((error) => {
      reject(error.message);
    });
}
