import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import * as formsActions from '../actions';
import Forms from '../containers/';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Index extends Component {
  render() {
    return (
      <View style={ { flex: 1 } }>
        <StatusBar barStyle='default' />
        <Provider store={ store }>
          <ConnectedForms />
        </Provider>
      </View>
      );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formsActions, dispatch)
  };
}

let ConnectedForms = connect(mapStateToProps, mapDispatchToProps)(Forms);
