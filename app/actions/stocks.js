import * as types from './actionTypes';
import * as controllers from '../controllers';

const resfeshInterval = 15000;

let timer = null;

export function stopAutoRefresh(callback, errorCallback) {
    return (dispatch) => {
        clearInterval(timer);

        dispatch({
            type: types.STOCKS_TIMER_STOP
          });
        
        if (callback) {
            callback();
        }
    };
}

export function startAutoRefresh(callback, errorCallback) {
    return (dispatch) => {
        clearInterval(timer);
  
        timer = setInterval(
            () => {
                dispatch(getStocks())
            }, 
            resfeshInterval);

        dispatch({
            type: types.STOCKS_TIMER_START
          });

        if (callback) {
            callback();
        }
    };
}

export function getStocks(callback, errorCallback) {
    return (dispatch) => {
        dispatch({
            type: types.STOCKS_BEFORE_REFRESH
          });

        controllers.stocks.get()
        .then(resp => {
            dispatch({
                type: types.STOCKS_REFRESH,
                data: resp.stock
              });

            if (callback) {
                callback();
            }
        })
        .catch((error) => {
            if (errorCallback) {
                errorCallback(error);
            }
        });
    };
}