import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleWidth,
  scaleFont,
  scaleSize,
} from '../../assets/styles/Mixins';
import Colors from '../../assets/styles/Colors';
import LAYOUT from '../../assets/styles/Layout';
import COLORS from '../../assets/styles/Colors';

const styles = () =>
  StyleSheet.create({
    main: {},
    rowItem: {
      display: 'flex',
      borderRadius: scaleSize(8),
      width: scaleWidth(170),
      marginLeft: scaleSize(12),
    },
    colTop: {
      marginBottom: scaleSize(8),
    },
    colTopImage: {
      height: scaleHeight(135),
      width: scaleWidth(165),
      borderRadius: scaleSize(8),
    },
    colBottom: {
      display: 'flex',
      paddingHorizontal: scaleSize(6),
    },
    colBottomText: {
      fontSize: scaleFont(12),
    },
    colBottomPrice: {
      fontWeight: 'bold',
      fontSize: scaleFont(14),
      lineHeight: scaleSize(21),
    },

    flexCol: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeInfo: {
      justifyContent: 'space-between',
    },
  });

export default styles;
