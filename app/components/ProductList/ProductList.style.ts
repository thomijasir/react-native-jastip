import { Dimensions, StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleWidth,
  scaleFont,
  scaleSize,
} from '../../assets/styles/Mixins';
import COLORS from '../../assets/styles/Colors';
import LAYOUT from '../../assets/styles/Layout';
import {
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_20,
  FONT_SIZE_24,
} from '../../assets/styles/Typography';

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
      flexGrow: 1,
      borderRadius: scaleSize(8),
      flexBasis: scaleSize(Dimensions.get('window').width / 2 - 17),
      padding: scaleSize(6),
    },
    itemImage: {
      height: scaleHeight(135),
      width: '100%',
      borderRadius: scaleSize(8),
    },
    itemInfo: {},
    itemName: {
      marginTop: scaleSize(4),
      fontSize: FONT_SIZE_14,
      lineHeight: FONT_SIZE_20,
    },
    itemPrice: {
      fontWeight: 'bold',
      fontSize: FONT_SIZE_16,
      lineHeight: FONT_SIZE_24,
    },
    itemDate: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default styles;
