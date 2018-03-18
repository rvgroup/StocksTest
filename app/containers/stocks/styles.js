import { StyleSheet } from 'react-native';
import * as assetsStyle from './../../assets/styles';

let styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: assetsStyle.backgroundColorLight
  },
  textStyle: {
    fontFamily: assetsStyle.fontFamily,
    color: assetsStyle.baseColor,
    fontSize: assetsStyle.fontSizeLittle
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  alternativeRow: {
    backgroundColor: assetsStyle.backgroundColorDark
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerRow: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: assetsStyle.backgroundColorDark,
    borderColor: assetsStyle.baseColorDisabled,
    borderBottomWidth: 1
  },
  headerCell: {
    fontWeight: 'bold'
  },
  cell1: {
    flex: 1
  },
  cell2: {
    width: 100
  },
  cell3: {
    width: 80
  }
});

module.exports = styles;
