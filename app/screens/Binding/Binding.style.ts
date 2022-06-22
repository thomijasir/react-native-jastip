import { Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';
import { scaleHeight, scaleSize, scaleWidth } from '../../assets/styles/Mixins';

const styles = () =>
  StyleSheet.create({
    main: {
      width: '100%',
      flex: 1,
      backgroundColor: COLORS.WHITE,
    },
  });

export default styles;
