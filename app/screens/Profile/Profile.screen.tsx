import React, { FC } from 'react';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Touchable,
  Pressable,
  Alert,
} from 'react-native';
import { AUTH_CODE } from '../../constants';
import Style from './Profile.style';
import useAsyncStorage from '../../hooks/useAsyncStorage';
export type IProfileScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const ProfileScreenDefaultProps = {};

export const ProfileScreenNamespace = 'ProfileScreen';

const ProfileScreen: FC<IProfileScreenProps> = ({ navigation }) => {
  const auth = useAsyncStorage(AUTH_CODE);
  const onLogout = () => {
    Alert.alert('Logout', 'Are you sure want logout from this device?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          auth.clear().then(() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          });
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={Style().main}>
      <ScrollView>
        <Pressable onPress={onLogout} style={Style().wrapper}>
          <Image
            style={Style().image}
            source={require('../../assets/images/frame-profile.png')}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

ProfileScreen.displayName = ProfileScreenNamespace;
ProfileScreen.defaultProps = ProfileScreenDefaultProps;
export default ProfileScreen;
