import React from 'react';
import { Easing, Animated, View, Platform, BackHandler } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import * as constants from './../constants';
import Stocks from './stocks';

const mainScreens = {
  Stocks: {
    screen: Stocks
  }
};

export const AppNavigator = StackNavigator(
  mainScreens,
  {
    cardStyle: {
      backgroundColor: 'transparent'
    },
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateX }] };
      }
    })
  }
);

export function resetTo(navigation, routeName) {
  navigation
    .dispatch(NavigationActions.reset(
      {
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: routeName })
          ]
        }));
}

const defaultGetStateForAction = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => {
  let currentRouteName = getCurrentRoute(state);
  let lastScreens = [constants.SCREEN_STOCKS_NAME];

  if (state 
      && action.type === NavigationActions.BACK 
      && (lastScreens.indexOf(currentRouteName) >= 0)
    ) {

    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    }
    
    return null;
  }

  if (action.type === NavigationActions.NAVIGATE && action.routeName == currentRouteName) {
    return null;
  }

  return defaultGetStateForAction(action, state);
};

function getCurrentRoute (state) {
  if (state && state.index != null && state.routes && state.routes.length) {
    let route = state.routes[state.index];

    return route ? route.routeName : null;
  }
}