import React, { FC, useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  Button,
  View,
} from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import { AppContext } from '../../stores/AppProvider';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import LoadingMask from '../../components/LoadingMask/LoadingMask.comp';
import { AUTH_CODE } from '../../constants';
import useAsyncStorage from '../../hooks/useAsyncStorage';
import useApi from '../../hooks/useApi';
import { formatRupiah } from '../../utils/Currency';
import { SET_PROFILE } from '../../stores/AppReducers';

export type IHomeScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const HomeScreenDefaultProps = {};

export const HomeScreenNamespace = 'HomeScreen';

const HomeScreen: FC<IHomeScreenProps> = (props) => {
  const { navigation } = props;

  const [state, mState] = useState({
    profile: {
      BALANCE: '0',
      FULLNAME: 'Loading..',
      KTP_NUMBER: '',
      MASK_DANA_ID: 'Loading..',
      USER_KYC: '00',
    },
    feeds: [],
    products: [],
    newestProducts: [],
    homeLoading: false,
  });

  const context = useContext(AppContext);

  const authCode = useAsyncStorage(AUTH_CODE);
  const client = useApi();

  const setState = (obj: any) => {
    mState((prevState: any) => ({
      ...prevState,
      ...obj,
    }));
  };

  const handleProductPress = (id: string) => {
    navigation.navigate('Product', { productId: id });
  };

  const handlePressFlag = (val: string) => {
    navigation.navigate('ProductFilter', { filterData: val });
  };

  useEffect(() => {
    setState({
      homeLoading: true,
    });
    initData().then((res) => {
      context.setContext(res.profile, SET_PROFILE);
      setState({
        profile: res.profile,
        products: res.products,
        feeds: res.feeds,
        newestProducts: res.newestProducts,
        homeLoading: false,
      });
    });
  }, []);

  const initData = async () => {
    try {
      const authData = await authCode.get();
      const profileRequest = client.getProfile(authData || '');
      const productsRequest = client.getProducts();
      const productsNewestRequest = client.getProductsNewest();
      const feedRequest = client.getFeeds();
      const [profile, products, newestProducts, feeds] = await Promise.all([
        profileRequest,
        productsRequest,
        productsNewestRequest,
        feedRequest,
      ]);
      return Promise.resolve({ profile, products, newestProducts, feeds });
    } catch (error) {
      return Promise.reject('Something Wrong!');
    }
  };

  return (
    <>
      {state.homeLoading ? <LoadingMask /> : null}
      <SafeAreaView style={Style().main}>
        <StatusBar translucent animated={true} backgroundColor="#151515" />
        <ScrollView>
          <HeadBarComp />
          <ContentArea>
            <CountryListComp onPress={handlePressFlag} />
            <Text style={{ marginVertical: 12, fontSize: 16 }}>
              Hi,{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {state.profile.FULLNAME}
              </Text>
            </Text>
          </ContentArea>
          <BoxBalanceComp
            balance={formatRupiah(state.profile.BALANCE)}
            credits={'0'}
          />
          <ContentArea>
            <Text style={GS.title}>Newest Feed</Text>
          </ContentArea>
          <FeedCarouselComp feedList={state.feeds} />
          <ContentArea>
            <Text style={GS.title}>Newest Item</Text>
          </ContentArea>
          <ProductCarouselComp
            productList={state.newestProducts}
            onPress={handleProductPress}
          />
          <ContentArea>
            <Text style={GS.title}>Popular Item</Text>
            <ProductListComp
              productList={state.products}
              onPress={handleProductPress}
            />
          </ContentArea>
          <View style={Style().spacing}></View>
        </ScrollView>
        <MainNavigationComp
          isAvailableCart={context.carts.length}
          navigation={navigation}
        />
      </SafeAreaView>
    </>
  );
};

HomeScreen.displayName = HomeScreenNamespace;
HomeScreen.defaultProps = HomeScreenDefaultProps;
export default HomeScreen;
