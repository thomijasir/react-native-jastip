import { StyleSheet } from 'react-native';
import color from '../../assets/styles/Colors';

const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    container: {
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: backgroundColor ? backgroundColor : color.WHITE,
    },
  });

export default styles;
