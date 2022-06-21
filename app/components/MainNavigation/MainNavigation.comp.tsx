import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import Style from './MainNavigation.style';

export type IMainNavigationCompProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const MainNavigationCompDefaultProps = {};

export const MainNavigationCompNamespace = 'MainNavigationComp';

const MainNavigationComp: FC<IMainNavigationCompProps> = (props) => {
  const { navigation } = props;
  return (
    <View style={Style().main}>
      <View style={Style().nav}>
        <TouchableOpacity
          style={Style().navItem}
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/icons/home-fill-icon.png')} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style().navItem}
          onPress={() => navigation.navigate('Feed')}>
          <Image source={require('../../assets/icons/apps-icon.png')} />
          <Text>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style().navItem}
          onPress={() => navigation.navigate('About')}>
          <Image source={require('../../assets/icons/heart-icon.png')} />
          <Text>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style().navItem}
          onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('../../assets/icons/shopping-cart-icon.png')}
          />
          <Text>Carts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style().navItem}
          onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../assets/icons/user-icon.png')} />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

MainNavigationComp.displayName = MainNavigationCompNamespace;
MainNavigationComp.defaultProps = MainNavigationCompDefaultProps;
export default MainNavigationComp;
