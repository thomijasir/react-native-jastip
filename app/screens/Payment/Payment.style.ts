import { StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';
import { scaleSize, scaleHeight, scaleWidth } from '../../assets/styles/Mixins';
import {
  FONT_SIZE_12,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_24,
} from '../../assets/styles/Typography';

const styles = () =>
  StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
    },
    items: {
      marginTop: scaleSize(12),
      width: '100%',
    },
    item: {
      display: 'flex',
      paddingVertical: scaleSize(12),
    },
    itemBorderBottom: {
      borderBottomWidth: 1,
      borderBottomEndRadius: 1,
      borderBottomColor: '#C4C4C4',
    },
    rowImage: {
      flexBasis: scaleSize(45),
    },
    profileImage: {
      width: scaleWidth(30),
      height: scaleHeight(40),
      borderRadius: scaleSize(40 / 2),
    },
    nameInfo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scaleSize(6),
      marginBottom: scaleSize(12),
    },
    nameText: {
      fontWeight: 'bold',
      flex: 1,
    },
    rowProduct: {
      display: 'flex',
      flexDirection: 'row',
    },
    rowProductImage: {
      flexBasis: scaleSize(70),
    },
    productImage: {
      width: scaleWidth(56),
      height: scaleHeight(74),
      borderRadius: scaleSize(8),
    },
    rowProductInfo: {
      flexGrow: 1,
    },

    productDesc: {
      fontSize: FONT_SIZE_12,
      lineHeight: FONT_SIZE_18,
      width: scaleWidth(240),
      color: COLORS.BLACK,
    },
    productPrice: {
      fontSize: FONT_SIZE_16,
      lineHeight: FONT_SIZE_24,
      fontWeight: 'bold',
      color: COLORS.BLACK,
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
    productQty: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    productQtyItem: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      marginBottom: scaleSize(8),
    },
    productQtyTrash: {
      paddingRight: scaleSize(4),
    },
    productQtyText: {
      fontWeight: 'bold',
      fontSize: FONT_SIZE_16,
      color: COLORS.BLACK,
      paddingHorizontal: scaleSize(12),
    },
    productQtyBtn: {
      backgroundColor: '#F5F5F5',
      borderRadius: scaleSize(4),
      paddingVertical: scaleSize(8),
      paddingHorizontal: scaleSize(16),
    },
    expBadge: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: scaleSize(8),
      paddingVertical: scaleSize(12),
      paddingHorizontal: scaleSize(20),
      marginVertical: scaleSize(12),
    },
    expBadgeIcon: {
      flexBasis: scaleSize(28),
      ...Layout.center,
    },
    expBadgeText: {
      flex: 1,
      fontWeight: 'bold',
      paddingLeft: scaleSize(6),
    },
    expBadgeArrow: {
      flexBasis: scaleSize(26),
      ...Layout.center,
    },

    paymentTitle: {
      fontWeight: 'bold',
      color: COLORS.BLACK,
      fontSize: FONT_SIZE_16,
      lineHeight: FONT_SIZE_24,
      marginVertical: scaleSize(12),
    },
    rowPayment: {
      display: 'flex',
      flexDirection: 'column',
    },
    colPayment: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: scaleSize(4),
    },

    spacingFooter: {
      marginVertical: scaleSize(16),
    },
  });

export default styles;
