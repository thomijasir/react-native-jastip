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
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
    item: {
      display: 'flex',
      borderRadius: scaleSize(8),
      flexGrow: 1,
      flexBasis: scaleSize(170),
      paddingVertical: scaleSize(6),
    },
    itemImage: {
      height: scaleHeight(135),
      width: '100%',
      maxWidth: scaleWidth(165),
      borderRadius: scaleSize(8),
    },
    itemInfo: {},
    itemName: {
      fontSize: scaleFont(12),
      lineHeight: scaleSize(21),
    },
    itemPrice: {
      fontWeight: 'bold',
      fontSize: scaleFont(14),
      lineHeight: scaleSize(21),
    },
    itemDate: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default styles;
