import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import Style from './MainNavigation.style';

export type IMainNavigationCompProps = {};

export const MainNavigationCompDefaultProps = {};

export const MainNavigationCompNamespace = 'MainNavigationComp';

const MainNavigationComp: FC<IMainNavigationCompProps> = () => {
  return (
    <View style={Style().main}>
      <View style={Style().nav}>
        <View style={Style().navItem}>
          <Image source={require('../../assets/icons/home-fill-icon.png')} />
          <Text>Home</Text>
        </View>
        <View style={Style().navItem}>
          <Image source={require('../../assets/icons/apps-icon.png')} />
          <Text>Feed</Text>
        </View>
        <View style={Style().navItem}>
          <Image source={require('../../assets/icons/heart-icon.png')} />
          <Text>Wishlist</Text>
        </View>
        <View style={Style().navItem}>
          <Image
            source={require('../../assets/icons/shopping-cart-icon.png')}
          />
          <Text>Carts</Text>
        </View>
        <View style={Style().navItem}>
          <Image source={require('../../assets/icons/user-icon.png')} />
          <Text>Account</Text>
        </View>
      </View>
    </View>
  );
};

MainNavigationComp.displayName = MainNavigationCompNamespace;
MainNavigationComp.defaultProps = MainNavigationCompDefaultProps;
export default MainNavigationComp;
