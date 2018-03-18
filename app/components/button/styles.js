import { StyleSheet } from 'react-native';
import * as assetsStyle from './../../assets/styles';

let styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: assetsStyle.borderRadius
  },
  button: {
    height: assetsStyle.heightSizeButton,
    backgroundColor: assetsStyle.baseColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: assetsStyle.borderRadius
  },
  text: {
    fontFamily: assetsStyle.fontFamily,
    fontSize: assetsStyle.fontSizeLarge,
    color: assetsStyle.fontColorLight
  }
});

module.exports = styles;
