import { StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/Colors';
import { scaleHeight, scaleSize } from '../../assets/styles/Mixins';

const styles = () =>
  StyleSheet.create({
    main: {
      width: '100%',
      backgroundColor: COLORS.WHITE,
      flex: 1,
    },
    spacing: {
      height: scaleHeight(130),
    },
  });

export default styles;
