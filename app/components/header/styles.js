import { StyleSheet } from 'react-native';

import * as assetsStyle from './../../assets/styles';

var styles = StyleSheet.create({
  header: {
    ...assetsStyle.headerStyle,
    height: assetsStyle.statusBar + 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: assetsStyle.statusBar
  },
  title: {
    ...assetsStyle.headerTitleStyle
  },
  buttonOverlay: {
    ...assetsStyle.buttonOverlay
  }
});

module.exports = styles;
