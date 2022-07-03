import { Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';
import { scaleHeight, scaleSize, scaleWidth } from '../../assets/styles/Mixins';
import { FONT_SIZE_18, FONT_SIZE_24 } from '../../assets/styles/Typography';

const styles = () =>
  StyleSheet.create({
    main: {
      width: '100%',
      flex: 1,
      backgroundColor: COLORS.WHITE,
    },
    wrapper: {
      width: '100%',
    },
    appImage: {
      marginBottom: scaleSize(24),
    },
    image: {
      // width: '80%',
      // height: scaleHeight(64),
      resizeMode: 'stretch',
    },
    spacing: {
      marginVertical: scaleSize(8),
    },

    title: {
      ...Layout.center,
    },
    btnLogin: {
      position: 'absolute',
      width: '100%',
      bottom: scaleSize(34),
      zIndex: 10,
      elevation: 10,
      paddingHorizontal: scaleSize(16),
      // ...Layout.ddb,
    },
    input: {
      marginTop: scaleSize(24),
      marginBottom: scaleSize(12),
      borderWidth: 1,
      paddingVertical: scaleSize(10),
      paddingHorizontal: scaleSize(16),
      backgroundColor: COLORS.WHITE,
      borderRadius: scaleSize(16),
      fontSize: FONT_SIZE_18,
      fontWeight: 'bold',
    },
    footerImage: {
      marginTop: scaleSize(34),
    },
  });

export default styles;
