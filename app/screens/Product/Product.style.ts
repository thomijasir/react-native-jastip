import { StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';
import { scaleHeight, scaleSize, scaleWidth } from '../../assets/styles/Mixins';
import {
  FONT_FAMILY_BOLD,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_30,
} from '../../assets/styles/Typography';

const styles = () =>
  StyleSheet.create({
    main: {
      width: '100%',
      color: '#000',
      backgroundColor: COLORS.WHITE,
    },
    productImage: {
      width: '100%',
      height: scaleHeight(240),
      marginBottom: scaleSize(12),
    },
    price: {
      color: COLORS.BASIC_BLACK,
      fontSize: FONT_SIZE_20,
      lineHeight: FONT_SIZE_30,
      fontWeight: '700',
      marginBottom: scaleSize(8),
    },
    desc: {
      color: COLORS.BLACK,
      fontSize: FONT_SIZE_14,
      lineHeight: scaleSize(21),
      fontWeight: '400',
    },
    productDate: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#F5F5F5',
      borderRadius: scaleSize(8),
      paddingVertical: scaleSize(12),
      paddingHorizontal: scaleSize(20),
      marginVertical: scaleSize(12),
    },
    titleDesc: {
      fontWeight: 'bold',
      fontSize: FONT_SIZE_16,
      fontFamily: FONT_FAMILY_BOLD,
      lineHeight: scaleSize(24),
      color: COLORS.BASIC_BLACK,
      marginTop: scaleSize(8),
    },
    productDesc: {
      fontWeight: '400',
      fontSize: FONT_SIZE_12,
      lineHeight: FONT_SIZE_18,
      color: COLORS.BASIC_BLACK,
      marginVertical: scaleSize(8),
    },
    productMore: {
      fontSize: FONT_SIZE_12,
      lineHeight: FONT_SIZE_18,
      color: '#ADB3BC',
      marginBottom: scaleSize(8),
    },
    sellerProfile: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: scaleSize(8),
    },
    rowImage: {
      flexBasis: scaleSize(65),
      ...Layout.center,
    },
    profileImage: {
      width: scaleWidth(49),
      height: scaleHeight(60),
      borderRadius: scaleSize(60 / 2),
    },
    rowInfo: {
      flexGrow: 1,
      paddingLeft: scaleSize(6),
    },
    sellerName: {
      fontSize: FONT_SIZE_12,
      lineHeight: FONT_SIZE_18,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: 'bold',
    },
    rowRating: {
      flexBasis: scaleSize(85),
      display: 'flex',
      flexDirection: 'row',
      ...Layout.center,
    },
    ratingText: {
      fontSize: FONT_SIZE_16,
    },
    footerControl: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: scaleSize(24),
      alignContent: 'center',
      alignItems: 'center',
    },
    chatBtn: {
      padding: scaleSize(16),
      backgroundColor: '#E1FF29',
      borderRadius: (16 * 4) / 2,
    },
    orderBtn: {
      flexGrow: 1,
      paddingLeft: scaleSize(16),
    },
  });

export default styles;
