import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleWidth,
  scaleFont,
  scaleSize,
} from '../../assets/styles/Mixins';
import COLORS from '../../assets/styles/Colors';
import LAYOUT from '../../assets/styles/Layout';

const styles = () =>
  StyleSheet.create({
    main: {
      width: '100%',
      height: scaleHeight(8),
      backgroundColor: '#F6F6F6',
    },
  });

export default styles;
