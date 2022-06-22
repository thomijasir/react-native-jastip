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
      position: 'absolute',
      bottom: 0,
      paddingHorizontal: scaleSize(16),
      paddingBottom: scaleSize(18),
      zIndex: 2,
      elevation: 2,
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      padding: scaleSize(16),
      borderRadius: scaleSize(50),
      backgroundColor: COLORS.YELLOW_GREEN_LIGHT,
    },
    navItem: {
      flex: 1,
      flexGrow: 1,
      ...LAYOUT.center,
    },
  });

export default styles;
