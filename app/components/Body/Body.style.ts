import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import type { FlexStyle } from 'react-native';
import { scaleHeight, scaleSize, scaleWidth } from '../../utils/Scale';
import color from '../../utils/Color';

const getBodyHeight = () => {
  if (StatusBar.currentHeight && StatusBar.currentHeight > 24) {
    return Dimensions.get('window').height - scaleHeight(233);
  } else if (Platform.OS === 'ios') {
    return Dimensions.get('window').height - scaleHeight(270);
  } else {
    return (
      Dimensions.get('window').height -
      scaleHeight(StatusBar.currentHeight || 0) -
      scaleHeight(240)
    );
  }
};

const style = (
	align?: FlexStyle['justifyContent'],
	justifyContent?: FlexStyle['justifyContent'],
) => StyleSheet.create({
  body: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - scaleHeight(210)
        : Dimensions.get('window').height - scaleHeight(280),
    backgroundColor: color.white,
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleSize(0),
    alignItems: 'center',
    justifyContent: align ? align : 'center',
  },
  bodyScroll: {
    alignItems: 'center',
    height: Dimensions.get('window').height - scaleHeight(240),
    justifyContent: justifyContent ? justifyContent : 'flex-start',
  },
	bodyScrollFocus: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
  bodyNoPadding: {
    height: getBodyHeight(),
    backgroundColor: color.white,
    padding: 0,
    margin: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  bodyFullScreen: {
    height: Dimensions.get('window').height,
    backgroundColor: color.white,
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleSize(20),
    alignItems: 'center',
  },
  bodyWithFooter: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - scaleHeight(150)
        : Dimensions.get('window').height - scaleHeight(130),
    backgroundColor: color.white,
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleHeight(40),
    alignItems: 'center',
    justifyContent: align ? align : 'center',
  }
});

export default style;
