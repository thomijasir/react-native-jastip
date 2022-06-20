import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth, scaleSize } from '../../assets/styles/Mixins';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';

const styles = () =>
  StyleSheet.create({
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      backgroundColor: COLORS.BASIC_BLACK,
      width: '100%',
      paddingHorizontal: scaleSize(20),
      paddingVertical: scaleSize(12),
    },
    rowInput: {
      flex: 1,
      flexBasis: scaleSize(190),
      position: 'relative',
    },
    rowInputFindIcon: {
      position: 'absolute',
      right: scaleSize(12),
      top: scaleSize(9),
    },
    rowIcon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      backgroundColor: '#FFF',
      borderRadius: scaleSize(4),
      color: COLORS.BASIC_BLACK,
      paddingHorizontal: scaleSize(8),
      paddingVertical: scaleSize(4),
      width: '100%',
    },
  });

export default styles;
