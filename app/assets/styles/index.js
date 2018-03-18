import { Platform, Dimensions } from 'react-native';
import { isIphoneX } from '../../common/utils';

let isIPhoneX = isIphoneX();

/**
 * Color
 */
export const fontColorDark = '#000000';
export const fontColorLight = '#FFFFFF';
export const fontColorPlaceholder = '#929292';
export const fontColorDisabled = '#CBCBCB';
export const backgroundColor = '#FFFFFF';
export const baseColor = '#364150';
export const baseColorLight = '#E9F2F4';
export const baseColorDisabled = '#B2B2B2';
export const baseColorGreen = '#009846';
export const baseColorGreenLight = '#A0D0A9';
export const baseColorGreenVeryLight = '#D9EBDA';
export const baseColorOrange = '#EF7F1A';
export const baseColorOrangeLight = '#FBD4AE';
export const baseColorOrangeVeryLight = '#F5A355';
export const baseColorGray = '#3D3D3D';
export const baseColorGrayLight = '#CCCCCC';
export const baseColorRed = '#FF0000';
export const baseColorRedLight = '#FFAFAF';

export const backgroundColorLight = '#FFFFFF';
export const backgroundColorDark = '#F7F7F7';

export const lineColorLight = '#EEEEEE';
export const lineColorDark = '#DCDCDC';

/**
 * Font size
 */
export const fontSizeTiny = 12;
export const fontSizeLittle = 14;
export const fontSizeMiddle = 16;
export const fontSizeLarge = 20;

/**
 * Font
 */
export const fontFamily = (Platform.OS === 'ios') ? 'Helvetica' : 'Roboto';

/**
 * Indentation
 */
export const indentLarge = 16;
export const indentMiddle = 8;
export const indentLittle = 4;

/**
 * Border radius
 */
export const borderRadius = 4;
export const borderRadiusLarge = 16;
export const borderRadiusDeviceSmall = isIPhoneX ? borderRadiusLarge : borderRadius;
export const borderRadiusDevice = isIPhoneX ? borderRadiusLarge : borderRadius * 2;

/**
 * Size
 */
export const heightSizeButton = 40;

/**
 * Opacity
 */
export const maskOpacity = .4;

/**
 * Platform
 */
export const statusBar = (Platform.OS === 'ios') && parseInt(Platform.Version, 10) < 11 ? 20 : 0;
export const isiOS11 = (Platform.OS === 'ios') && parseInt(Platform.Version, 10) >= 11;
export const marginTopModal = (Platform.OS === 'ios') ? 20 : 8;
export const systemOffset = (Platform.OS === 'ios') ? 0 : 25;
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const fontFamilyButton = (Platform.OS === 'ios') ? 'System' : 'SF-UI-Display-Regular';

/**
 * Header styles
 */
export const headerTitleStyle = {
  color: fontColorDark,
  fontSize: fontSizeMiddle,
  fontWeight: '500',
  alignSelf: 'center',
  textAlign: 'center'
};

export const headerStyle = {
  height: 52,
  borderBottomColor: lineColorDark,
  borderBottomWidth: 1,
  shadowRadius: 0,
  elevation: 0,
  backgroundColor: backgroundColorLight
};

export const buttonOverlay = {
  justifyContent: 'center',
  alignItems: 'center',
  width: 52,
  height: 52
};
