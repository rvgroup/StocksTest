import * as types from '../actions/actionTypes';
import { DeviceEventEmitter } from 'react-native';

const initialState = {
  stocks: []
};

export function stocks(state = initialState, action) {
  switch (action.type) {
    case types.STOCKS_REFRESH:
    
      setTimeout(
        () => {
          DeviceEventEmitter.emit('stocksChanged');
        }, 10);

      return {
        ...state,
        stocks: action.stocks
      };

    default:
      return state;
  }
}