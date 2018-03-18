import { StyleSheet } from 'react-native';

import * as assetsStyle from './../../assets/styles';

let styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: assetsStyle.backgroundColorLight
  }
});

module.exports = styles;
