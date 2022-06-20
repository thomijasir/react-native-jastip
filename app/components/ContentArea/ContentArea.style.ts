import { StyleSheet } from 'react-native';
import { scaleSize, scaleHeight, scaleWidth } from '../../assets/styles/Mixins';
import color from '../../assets/styles/Colors';

const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    main: {
      width: '100%',
      paddingHorizontal: scaleWidth(16),
      paddingVertical: scaleHeight(8),
    },
  });

export default styles;
