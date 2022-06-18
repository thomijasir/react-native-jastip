import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Style from './Home.style';

export type IHomeScreenProps = {};

export const HomeScreenDefaultProps = {};

export const HomeScreenNamespace = 'HomeScreen';

const HomeScreen: FC<IHomeScreenProps> = () => {
  return (
    <View style={Style().main}>
      <Text>HomeScreen</Text>
    </View>
  );
};

HomeScreen.displayName = HomeScreenNamespace;
HomeScreen.defaultProps = HomeScreenDefaultProps;
export default HomeScreen;
