import { StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';
import { scaleSize, scaleWidth } from '../../assets/styles/Mixins';
import {
  FONT_SIZE_16,
  FONT_SIZE_24,
  FONT_SIZE_14,
} from '../../assets/styles/Typography';

const styles = () =>
  StyleSheet.create({
    main: {
      flex: 1,
      width: '100%',
      backgroundColor: COLORS.WHITE,
      ...Layout.center,
    },
    title: {
      fontWeight: 'bold',
      fontSize: FONT_SIZE_16,
      lineHeight: FONT_SIZE_24,
      marginTop: scaleSize(12),
    },
    desc: {
      fontSize: FONT_SIZE_14,
      lineHeight: FONT_SIZE_24,
      marginVertical: scaleSize(6),
      width: scaleWidth(300),
      textAlign: 'center',
    },
    paymentBtn: {
      width: '100%',
      paddingHorizontal: scaleSize(24),
    },
    btnSpacing: {
      height: scaleSize(16),
    },
  });

export default styles;
