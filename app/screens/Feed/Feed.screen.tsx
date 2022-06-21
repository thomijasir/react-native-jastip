import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Style from './Feed.style';

export type IFeedScreenProps = {};

export const FeedScreenDefaultProps = {};

export const FeedScreenNamespace = 'FeedScreen';

const FeedScreen: FC<IFeedScreenProps> = () => {
  return (
    <View style={Style().main}>
      <Text>FeedScreen</Text>
    </View>
  );
};

FeedScreen.displayName = FeedScreenNamespace;
FeedScreen.defaultProps = FeedScreenDefaultProps;
export default FeedScreen;
