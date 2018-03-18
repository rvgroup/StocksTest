import { Platform, Dimensions } from 'react-native';

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  
  return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (dimen.height === 812 || dimen.width === 812)
  );
}

export function formatNumber(n, decimalPrecision) {
  return n.toFixed(decimalPrecision).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? " " + c : c;
  });
}