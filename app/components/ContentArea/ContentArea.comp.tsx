import React from 'react';
import { View } from 'react-native';
import styles from './ContentArea.style';

export type ContentAreaProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const ContentArea = ({ children, backgroundColor }: ContentAreaProps) => (
  <View style={styles(backgroundColor).main}>{children}</View>
);

export default ContentArea;
