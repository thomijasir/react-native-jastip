import React, { FC } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
// Component
import HeadBarComp from '../../components/HeadBar/HeadBar.comp';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import BoxBalanceComp from '../../components/BoxBalance/BoxBalance.comp';
import FeedCarouselComp from '../../components/FeedCarousel/FeedCarousel.comp';
import ProductCarouselComp from '../../components/ProductCarousel/ProductCarousel.comp';
import ProductListComp from '../../components/ProductList/ProductList.comp';
import MainNavigationComp from '../../components/MainNavigation/MainNavigation.comp';
import CountryListComp from '../../components/CountryList/CountryList.comp';
import GS from '../../assets/styles/General';
import Style from './Home.style';
import DeviderComp from '../../components/Devider/Devider.comp';

export type IHomeScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const HomeScreenDefaultProps = {};

export const HomeScreenNamespace = 'HomeScreen';

const HomeScreen: FC<IHomeScreenProps> = (props) => {
  const { navigation } = props;

  const handleProductPress = (id: string) => {
    navigation.navigate('Product', { productId: id });
  };
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#151515" />
      <ScrollView style={Style().main}>
        <HeadBarComp />
        <ContentArea>
          <CountryListComp />
          <Text style={{ marginVertical: 12, fontSize: 16 }}>
            Hi, <Text style={{ fontWeight: 'bold' }}>Thomi Jasir</Text>
          </Text>
        </ContentArea>
        <BoxBalanceComp />
        <ContentArea>
          <Text style={GS.title}>Newest Feed</Text>
        </ContentArea>
        <FeedCarouselComp />
        <ContentArea>
          <Text style={GS.title}>Newest Item</Text>
        </ContentArea>
        <ProductCarouselComp onPress={handleProductPress} />
        <ContentArea>
          <Text style={GS.title}>Popular Item</Text>
          <ProductListComp onPress={handleProductPress} />
        </ContentArea>
      </ScrollView>
      <MainNavigationComp navigation={navigation} />
    </SafeAreaView>
  );
};

HomeScreen.displayName = HomeScreenNamespace;
HomeScreen.defaultProps = HomeScreenDefaultProps;
export default HomeScreen;
