import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleWidth,
  scaleFont,
  scaleSize,
} from '../../assets/styles/Mixins';
const styles = () =>
  StyleSheet.create({
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: scaleSize(8),
      padding: scaleSize(16),
      marginHorizontal: scaleSize(16),
    },
    rowLeft: { flexBasis: scaleSize(45) },
    rowMid: {
      flex: 1,
      display: 'flex',
    },
    rowRight: { flexBasis: scaleSize(90) },
    title: {
      fontWeight: 'bold',
      fontSize: scaleFont(16),
      lineHeight: 18,
    },
    desc: {
      fontSize: scaleFont(12),
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: { width: scaleWidth(-2), height: scaleHeight(4) },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
  });

export default styles;
