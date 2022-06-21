import { StyleSheet } from 'react-native';
import COLORS from './Colors';
import { scaleHeight, scaleWidth, scaleFont, scaleSize } from './Mixins';

const General = StyleSheet.create({
  title: {
    marginTop: scaleSize(8),
    marginBottom: scaleSize(10),
    fontWeight: 'bold',
    fontSize: scaleFont(24),
    color: COLORS.BLACK,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default General;
