import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import Style from './ProductFilter.style';
import useApi from '../../hooks/useApi';
import ProductListComp from '../../components/ProductList/ProductList.comp';
import ContentArea from '../../components/ContentArea/ContentArea.comp';

type RootStackParamList = {
  filterData: any;
};

export type IProductFilterScreenProps = {
  route: RouteProp<RootStackParamList>;
  navigation: NavigationHelpers<ParamListBase>;
};

export const ProductFilterScreenDefaultProps = {};

export const ProductFilterScreenNamespace = 'ProductFilterScreen';

const ProductFilterScreen: FC<IProductFilterScreenProps> = ({
  navigation,
  route,
}) => {
  const client = useApi();

  const [state, mState] = useState({
    products: [],
  });

  const setState = (obj: any) => {
    mState((prevState: any) => ({
      ...prevState,
      ...obj,
    }));
  };

  useEffect(() => {
    const getFilter = route.params?.filterData;
    client.getProductsByCountries(getFilter).then((res) => {
      setState({ products: res });
    });
  }, []);

  return (
    <SafeAreaView style={Style().main}>
      <ContentArea>
        <ScrollView>
          <ProductListComp onPress={() => {}} productList={state.products} />
        </ScrollView>
      </ContentArea>
    </SafeAreaView>
  );
};

ProductFilterScreen.displayName = ProductFilterScreenNamespace;
ProductFilterScreen.defaultProps = ProductFilterScreenDefaultProps;
export default ProductFilterScreen;
