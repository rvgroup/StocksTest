import * as config from './config';
import * as utils from './utils';

export function get() {
  return new Promise((resolve, reject) => {
    fetch(config.getUrl(config.route.stocks.get), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((response) => {
      utils.processResponse(response, resolve, reject);
    })
    .catch((error) => {
      utils.processResponse(error, resolve, reject);
    });
  });
}