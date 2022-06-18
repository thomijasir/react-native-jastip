import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loadingMask: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
