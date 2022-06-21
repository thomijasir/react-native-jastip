import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleWidth,
  scaleFont,
  scaleSize,
} from '../../assets/styles/Mixins';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: scaleSize(16),
    paddingVertical: scaleSize(12),
    ...Layout.center,
  },
  rounded: {
    borderRadius: scaleSize(8),
  },
  doubleRounded: {
    borderRadius: scaleSize(16),
  },
  primary: {
    backgroundColor: '#E1FF29',
  },
  outlineBlack: {
    borderWidth: scaleSize(1),
    borderColor: COLORS.BLACK,
  },
  outlinePurple: {
    borderWidth: scaleSize(1),
    borderColor: '#192DDF',
  },
  title: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;