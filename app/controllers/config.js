import { SERVER_URL } from '../../appconfig';

export const route = {
  stocks: {
    get: '/stocks.json'
  }
};

export function getUrl(localPath) {
  return SERVER_URL + localPath;
}
