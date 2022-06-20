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
      display: 'flex',
      width: '100%',
      marginVertical: scaleSize(16),
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: scaleSize(16),
    },
    titleBold: {
      fontWeight: 'bold',
      fontSize: scaleFont(18),
      lineHeight: scaleSize(24),
      color: COLORS.BLACK,
    },
    flags: {
      display: 'flex',
      flexDirection: 'row',
    },
    flag: { flex: 1, flexGrow: 1, ...LAYOUT.center },
  });

export default styles;
