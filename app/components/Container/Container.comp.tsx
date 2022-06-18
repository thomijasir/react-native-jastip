import React from 'react';
import { SafeAreaView } from 'react-native';

// Styling
import styles from './Container.style';

// Config
import { ContainerProps } from './Container.config';

const Container = ({ children, backgroundColor }: ContainerProps) => (
  <SafeAreaView style={styles(backgroundColor).container}>
    {children}
  </SafeAreaView>
);

export default Container;
