import { Dimensions, Platform, StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/Colors';
import Layout from '../../assets/styles/Layout';
import { scaleHeight, scaleSize, scaleWidth } from '../../assets/styles/Mixins';

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
    image: {
      width: scaleWidth(
        Dimensions.get('window').width + (Platform.OS === 'ios' ? 45 : 0),
      ),
      // height: scaleHeight(1115),

      height: scaleHeight(850),
      resizeMode: 'stretch',
    },
  });

export default styles;
