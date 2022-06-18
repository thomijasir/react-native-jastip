import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import styles from './LoadingMask.style';

const LoadingMask = () => (
  <View style={styles.loadingMask}>
    <ActivityIndicator size={'large'} color={'white'} />
  </View>
);

export default LoadingMask;
