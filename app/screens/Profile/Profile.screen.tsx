import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Style from './Profile.style';

export type IProfileScreenProps = {};

export const ProfileScreenDefaultProps = {};

export const ProfileScreenNamespace = 'ProfileScreen';

const ProfileScreen: FC<IProfileScreenProps> = () => {
  return (
    <View style={Style().main}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

ProfileScreen.displayName = ProfileScreenNamespace;
ProfileScreen.defaultProps = ProfileScreenDefaultProps;
export default ProfileScreen;
