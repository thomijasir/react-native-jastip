import { StyleSheet } from 'react-native';
import color from '../../utils/Color';

const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    container: {
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: backgroundColor ? backgroundColor : color.white,
    },
  });

export default styles;
