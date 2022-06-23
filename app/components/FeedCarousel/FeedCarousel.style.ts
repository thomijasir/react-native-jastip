import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleWidth,
  scaleFont,
  scaleSize,
} from '../../assets/styles/Mixins';
import Colors from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';
import COLORS from '../../assets/styles/Colors';

const styles = () =>
  StyleSheet.create({
    main: {},
    rowItem: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#4800A3',
      borderRadius: scaleSize(8),
      width: scaleWidth(330),
      padding: scaleSize(16),
      marginRight: scaleSize(12),
    },
    rowLeft: {
      flexBasis: scaleSize(70),
    },
    rowLeftPicture: {
      width: scaleWidth(60),
      height: scaleHeight(60),
      borderRadius: scaleSize(60 / 2),
      borderColor: COLORS.WHITE,
      borderWidth: scaleSize(2),
    },

    rowRight: {
      flex: 1,
    },
    rowRightName: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: scaleFont(12),
    },
    rowRightText: {
      color: COLORS.WHITE,
      fontSize: scaleFont(12),
      lineHeight: scaleSize(18),
      marginVertical: scaleSize(8),
    },
    rowRightDate: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowRightDateText: {
      color: COLORS.WHITE,
    },
    rowRightDateImage: {
      width: scaleWidth(16),
      height: scaleHeight(16),
    },
    rowComments: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default styles;
