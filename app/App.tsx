import React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import HeadBarComp from './components/HeadBar/HeadBar.comp';
import ContentArea from './components/ContentArea/ContentArea.comp';
import BoxBalanceComp from './components/BoxBalance/BoxBalance.comp';
import FeedCarouselComp from './components/FeedCarousel/FeedCarousel.comp';
import ProductCarouselComp from './components/ProductCarousel/ProductCarousel.comp';
import ProductListComp from './components/ProductList/ProductList.comp';
import MainNavigationComp from './components/MainNavigation/MainNavigation.comp';
import CountryListComp from './components/CountryList/CountryList.comp';
import GS from './assets/styles/General';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#151515" />
      <ScrollView>
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
        <ProductCarouselComp />
        <ContentArea>
          <Text style={GS.title}>Popular Item</Text>
          <ProductListComp />
        </ContentArea>
      </ScrollView>
      <MainNavigationComp />
    </SafeAreaView>
  );
};

export default App;
