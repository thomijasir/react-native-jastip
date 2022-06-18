import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

export const scaleWidth = (size: number, based: string = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const scaleHeight = (size: number, based: string = 'height') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const scaleSize = (size: number, based: string = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// based on https://github.com/heyman333/react-native-responsive-fontSize
export function scaleFont(fontSize: number, standardScreenHeight = 680) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - (offset || 0)
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export const windowWidth = () => Dimensions.get('window').width;

export const windowHeight = () => Dimensions.get('window').height;

export default {
  scaleWidth,
  scaleHeight,
  scaleFont,
  scaleSize,
  windowWidth,
	windowHeight
};
