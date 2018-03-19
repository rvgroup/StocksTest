import * as types from '../actions/actionTypes';
import { DeviceEventEmitter } from 'react-native';

const initialState = {
  data: []
};

export function stocks(state = initialState, action) {
  switch (action.type) {
    case types.STOCKS_BEFORE_REFRESH:
      DeviceEventEmitter.emit('stocksBeforeLoad');
      return state;

    case types.STOCKS_REFRESH:
      setTimeout(
        () => {
          DeviceEventEmitter.emit('stocksChanged');
        }, 10);

      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
}